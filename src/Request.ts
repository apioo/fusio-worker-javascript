
export class Request {
    private request: any;

    public constructor(request: any) {
        this.request = request;
    }

    public getMethod(): string {
        return this.request.method;
    }

    public getHeader(name: string): string {
        return this.request.headers[name];
    }

    public getHeaders(): object {
        return this.request.headers;
    }

    public getUriFragment(name: string): string {
        return this.request.uriFragments[name];
    }

    public getUriFragments(): object {
        return this.request.uriFragments;
    }

    public getParameter(name: string): string {
        return this.request.parameters[name];
    }

    public getParameters(): object {
        return this.request.parameters;
    }

    public getBody(): object {
        return this.request.body;
    }
}
