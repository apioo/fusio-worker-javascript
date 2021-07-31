
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

    public build(statusCode: number, headers: Record<string, string>, body: any) {
        this.callback({
            statusCode: statusCode,
            headers: headers,
            body: JSON.stringify(body),
        });
    }

}
