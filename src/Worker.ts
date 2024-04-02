import {About} from "./generated/About";
import {Execute} from "./generated/Execute";
import {Response} from "./generated/Response";
import {Update} from "./generated/Update";
import fs from "fs";
import {Connector} from "./Connector";
import {Dispatcher} from "./Dispatcher";
import {Logger} from "./Logger";
import {ResponseBuilder} from "./ResponseBuilder";
import {Message} from "./generated/Message";

export class Worker {

    private static ACTION_DIR = __dirname + '/actions';

    public async get(): Promise<About> {
        return {
            apiVersion: "1.0.0",
            language: "javascript"
        };
    }

    public async execute(action: string, payload: Execute): Promise<Response> {
        const connector = new Connector(payload.connections || {});
        const dispatcher = new Dispatcher();
        const logger = new Logger();
        const responseBuilder = new ResponseBuilder();

        const file = this.getActionFile(action);
        const callback = await Promise.resolve(require(file));

        if (typeof callback !== 'function') {
            throw new Error('Provided action does not return a function');
        }

        await callback(payload.request, payload.context, connector, responseBuilder, dispatcher, logger);

        let response = responseBuilder.getResponse();
        if (!response) {
            response = {
                statusCode: 204
            };
        }

        return {
            events: dispatcher.getEvents(),
            logs: logger.getLogs(),
            response: response,
        };
    }

    public async put(action: string, payload: Update): Promise<Message> {
        if (!fs.existsSync(Worker.ACTION_DIR)){
            fs.mkdirSync(Worker.ACTION_DIR);
        }

        const file = this.getActionFile(action);
        const code = payload.code || '';

        fs.writeFileSync(file, code);

        this.resetCache(file);

        return this.newMessage(true, 'Action successfully updated');
    }

    public async delete(action: string): Promise<Message> {
        if (!fs.existsSync(Worker.ACTION_DIR)){
            fs.mkdirSync(Worker.ACTION_DIR);
        }

        const file = this.getActionFile(action);

        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }

        this.resetCache(file);

        return this.newMessage(true, 'Action successfully deleted');
    }

    public getActionFile(action: string): string {
        if (!action.match(/^[A-Za-z0-9_-]{3,30}$/)) {
            throw new Error('Provided no valid action name');
        }

        return Worker.ACTION_DIR + '/' + action + '.js';
    }

    private newMessage(success: boolean, message: string): Message {
        return {
            success: success,
            message: message,
        }
    }

    private resetCache(file: string): void {
        try {
            const path = require.resolve(file);
            if (require.cache[path]) {
                delete require.cache[path];
            }
        } catch (error) {
        }
    }
}


