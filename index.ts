import * as fs from "fs";
import Thrift from "thrift";
import {Config, Connector} from "./src/Connector";
import {HttpResponse, Response} from "./src/Response";
import {Dispatcher} from "./src/Dispatcher";
import {Logger} from "./src/Logger";
import {Action, Connection, Execute, Message, Result} from "./generated/worker_types";
import {Processor} from "./generated/Worker";

const PORT = 9091;
const ACTION_DIR = './actions';

var connections: Record<string, Config>|null = null;
var actions: Record<string, Function> = {};

interface WorkerHandler {
    setConnection(connection: Connection, result: Function): void;
    setAction(action: Action, result: Function): void;
    executeAction(execute: Execute, result: Function): void;
}

var handler : WorkerHandler = {
    setConnection: function(connection: Connection, result: Function): void {
        if (!fs.existsSync(ACTION_DIR)){
            fs.mkdirSync(ACTION_DIR);
        }

        let data = readConnections();

        if (!connection.name) {
            result(null, new Message({success: false, message: 'Provided no connection name'}));
        }

        data[connection.name] = {
            type: connection.type,
            config: connection.config,
        };

        fs.writeFileSync(ACTION_DIR + '/connections.json', JSON.stringify(data));

        // reset connections
        connections = null;

        console.debug('Update connection ' + connection.name);

        result(null, new Message({success: true, message: 'Connection successful updated'}));
    },

    setAction: function(action: Action, result: Function): void {
        if (!fs.existsSync(ACTION_DIR)){
            fs.mkdirSync(ACTION_DIR);
        }

        if (!action.name) {
            result(null, new Message({success: false, message: 'Provided no action name'}));
        }

        const file = ACTION_DIR + '/' + action.name + '.js';
        fs.writeFileSync(file, action.code);

        if (actions.hasOwnProperty(action.name)) {
            delete actions[action.name];
        }

        // delete require cache
        delete require.cache[require.resolve(file)];

        console.debug('Update action ' + action.name);

        result(null, new Message({success: true, message: 'Action successful updated'}));
    },

    executeAction: function(execute: Execute, result: Function): void {
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

        if (!actions.hasOwnProperty(execute.action)) {
            actions[execute.action] = require(ACTION_DIR + '/' + execute.action + '.js');
        }

        try {
            actions[execute.action](execute.request, execute.context, connector, response, dispatcher, logger);
        } catch (error) {
            result(null, new Result({
                response: {
                    statusCode: 500,
                    headers: {},
                    body: JSON.stringify({
                        success: false,
                        message: 'An error occurred at the worker: ' + error
                    })
                },
                events: [],
                logs: []
            }));
        }
    },
};

var server = Thrift.createServer<Processor, WorkerHandler>(Processor, handler);
server.listen(PORT);

console.log('Fusio Worker started');

function readConnections(): Record<string, Config> {
    if (connections !== null) {
        return connections;
    }

    const file = ACTION_DIR + '/connections.json';
    if (fs.existsSync(file)) {
        connections = JSON.parse(fs.readFileSync(file, 'utf8'))
    }

    return connections !== null ? connections : {};
}
