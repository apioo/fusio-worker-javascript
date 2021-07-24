
export class Parameters {
    private parameters: Record<string, any>;

    public constructor(parameters: Record<string, any>) {
        this.parameters = parameters;
    }

    public get(name: string): any {
        return this.parameters[name];
    }

    public has(name: string): any {
        return !!this.parameters[name];
    }

    public set(name: string, value: any): any {
        return this.parameters[name] = value;
    }

    public isEmpty(): any {
        return !!this.parameters;
    }

    public toArray(name: string): any {
        return this.parameters;
    }
}
