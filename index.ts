import * as fs from "fs";
import Thrift, {TBinaryProtocol, TBufferedTransport} from "thrift";
import {Config, Connector} from "./src/Connector";
import {HttpResponse, Response} from "./src/Response";
import {Dispatcher} from "./src/Dispatcher";
import {Logger} from "./src/Logger";
import {Request} from "./src/Request";
import {Context} from "./src/Context";
import {Action, Connection, Execute, Message, Result} from "./generated/worker_types";
import {Processor} from "./generated/Worker";

const port = 8081;

var connections: Record<string, Config>|null = null;

interface WorkerHandler {
    setConnection(connection: Connection, result: Function): void;
    setAction(action: Action, result: Function): void;
    executeAction(execute: Execute, result: Function): void;
}

var handler : WorkerHandler = {
    setConnection: function(connection: Connection, result: Function): void {
        const file = './connections.json';
        let data = readConnections();

        if (!connection.name) {
            result(null, new Message({success: false, message: 'Provided no connection name'}));
        }

        data[connection.name] = {
            type: connection.type,
            config: connection.config,
        };

        fs.writeFileSync(file, JSON.stringify(data));

        // reset connections
        connections = null;

        console.debug('Update connection ' + connection.name);

        result(null, new Message({success: true, message: 'Connection successful updated'}));
    },

    setAction: function(action: Action, result: Function): void {
        const dir = './action';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        if (!action.name) {
            result(null, new Message({success: false, message: 'Provided no action name'}));
        }

        const file = dir + '/' + action.name + '.js';
        fs.writeFileSync(file, action.code);

        // delete require cache
        delete require.cache[require.resolve(file)];

        console.debug('Update action ' + action.name);

        result(null, new Message({success: true, message: 'Action successful updated'}));
    },

    executeAction: function(execute: Execute, result: Function): void {
        const request = new Request(execute.request)
        const context = new Context(execute.context)
        const connector = new Connector(readConnections());
        const dispatcher = new Dispatcher();
        const logger = new Logger();
        const response = new Response((response: HttpResponse) => {
            result(null, new Result({
                response: response,
                events: dispatcher.getEvents(),
                logs: logger.getLogs(),
            }));
        });

        if (!execute.action) {
            return;
        }

        console.debug('Execute action ' + execute.action);

        const file = './action/' + execute.action + '.js';

        try {
            const action = require(file);

            action(request, context, connector, response, dispatcher, logger);
        } catch (error) {
            result(null, new Result({
                response: {
                    statusCode: 500,
                    headers: {},
                    body: ''
                },
                events: [],
                logs: []
            }));
        }
    },
};

var server = Thrift.createServer<Processor, WorkerHandler>(Processor, handler);
server.listen(port);

console.log('Fusio Worker started');

function readConnections(): Record<string, Config> {
    if (connections !== null) {
        return connections;
    }

    const file = './connections.json';
    if (fs.existsSync(file)) {
        connections = JSON.parse(fs.readFileSync(file, 'utf8'))
    }

    return connections !== null ? connections : {};
}
