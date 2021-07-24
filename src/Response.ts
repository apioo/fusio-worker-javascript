
export interface HttpResponse {
    statusCode: number,
    headers: any,
    body: any,
}

export class Response {

    private callback: Function;

    public constructor(callback: Function) {
        this.callback = callback;
    }

    public build(statusCode: number, headers: any, body: any) {
        this.callback({
            statusCode: statusCode,
            headers: headers,
            body: body,
        });
    }

}
