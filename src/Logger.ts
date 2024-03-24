import {ResponseLog} from "./generated/ResponseLog";

export class Logger {

    private logs: Array<ResponseLog> = []

    public emergency(message: string, context: any) {
        this.log('EMERGENCY', message, context);
    }

    public alert(message: string, context: any) {
        this.log('ALERT', message, context);
    }

    public critical(message: string, context: any) {
        this.log('CRITICAL', message, context);
    }

    public error(message: string, context: any) {
        this.log('ERROR', message, context);
    }

    public warning(message: string, context: any) {
        this.log('WARNING', message, context);
    }

    public notice(message: string, context: any) {
        this.log('NOTICE', message, context);
    }

    public info(message: string, context: any) {
        this.log('INFO', message, context);
    }

    public debug(message: string, context: any) {
        this.log('DEBUG', message, context);
    }

    private log(level: string, message: string, context: any) {
        const log: ResponseLog = {
            level: level,
            message: message
        };

        this.logs.push(log);
    }

    public getLogs() {
        return this.logs;
    }

}
