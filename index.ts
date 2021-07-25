import express from "express";
import * as fs from "fs";
import {Config, Connector} from "./src/Connector";
import {HttpResponse, Response} from "./src/Response";
import {Dispatcher} from "./src/Dispatcher";
import {Logger} from "./src/Logger";
import {Request} from "./src/Request";
import {Context} from "./src/Context";

const app = express();
const port = 8081;

var connections: Record<string, Config>|null = null;

app.use(express.json());

app.post('/action', (req: express.Request, res: express.Response) => {
    const dir = './action';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    if (!req.body.name) {
        return;
    }

    const file = dir + '/' + req.body.name + '.js';
    fs.writeFileSync(file, req.body.code);

    // delete require cache
    delete require.cache[require.resolve(file)];

    console.debug('Update action ' + req.body.name);

    res.status(200);
    res.json({success: true});
});

app.post('/connection', (req: express.Request, res: express.Response) => {
    const file = './connections.json';
    let data = readConnections();

    if (!req.body.name) {
        return;
    }

    data[req.body.name] = {
        type: req.body.type,
        config: req.body.config,
    };

    fs.writeFileSync(file, JSON.stringify(data));

    // reset connections
    connections = null;

    console.debug('Update connection ' + req.body.name);

    res.status(200);
    res.json({success: true});
});

app.post('/execute', (req: express.Request, res: express.Response) => {
    const request = new Request(req.body.request)
    const context = new Context(req.body.context)
    const connector = new Connector(readConnections());
    const dispatcher = new Dispatcher();
    const logger = new Logger();
    const response = new Response((response: HttpResponse) => {
        res.status(200);
        res.json({
            response: response,
            events: dispatcher.getEvents(),
            logs: logger.getLogs(),
        });
    });

    if (!req.body.action) {
        return;
    }

    console.debug('Execute action ' + req.body.action);

    const file = './action/' + req.body.action + '.js';
    const action = require(file);

    try {
        action(request, context, connector, response, dispatcher, logger);
    } catch (error) {
        res.status(500);
        res.json({
            success: false,
            message: error,
        });
    }
});

app.listen(port, () => {
    console.log('Fusio Worker started');
    console.log('Server started at http://localhost:' + port);
});

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
