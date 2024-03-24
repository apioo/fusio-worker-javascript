import {ResponseEvent} from "./generated/ResponseEvent";

export class Dispatcher {

    private events: Array<ResponseEvent> = [];

    public dispatch(eventName: string, payload: any) {
        const event: ResponseEvent = {
            eventName: eventName,
            data: JSON.stringify(payload)
        };

        this.events.push(event);
    }

    public getEvents() {
        return this.events;
    }

}
