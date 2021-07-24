
interface Log {
    level: string,
    message: string,
    context: any,
}

export class Logger {

    private logs: Array<Log> = []

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

    public log(level: string, message: string, context: any) {
        this.logs.push({
            level: level,
            message: message,
            context: context,
        });
    }

    public getLogs() {
        return this.logs;
    }

}
