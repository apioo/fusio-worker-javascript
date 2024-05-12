import fs from "fs";
import {Runtime} from "fusio-worker-runtime/dist/Runtime";
import {About} from "fusio-worker-runtime/dist/generated/About";
import {Execute} from "fusio-worker-runtime/dist/generated/Execute";
import {Response} from "fusio-worker-runtime/dist/generated/Response";
import {Update} from "fusio-worker-runtime/dist/generated/Update";
import {Message} from "fusio-worker-runtime/dist/generated/Message";

export class Worker {

    private static ACTION_DIR = __dirname + '/actions';

    private runtime: Runtime;

    public constructor() {
        this.runtime = new Runtime();
    }

    public async get(): Promise<About> {
        return this.runtime.get();
    }

    public async execute(action: string, payload: Execute): Promise<Response> {
        return this.runtime.run(this.getActionFile(action), payload);
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
