import {ResponseHTTP} from "./generated/ResponseHTTP";

export class ResponseBuilder {

    private response?: ResponseHTTP;

    public build(statusCode: number, headers: Record<string, string>, body: any) {
        this.response = {
            statusCode: statusCode,
            headers: headers,
            body: body,
        };
    }

    public getResponse(): ResponseHTTP|undefined {
        return this.response;
    }

}
