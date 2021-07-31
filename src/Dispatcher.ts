import {Event} from "../generated/worker_types";

export class Dispatcher {

    private events: Array<Event> = [];

    public dispatch(eventName: string, payload: any) {
        this.events.push(new Event({
            eventName: eventName,
            data: JSON.stringify(payload)
        }));
    }

    public getEvents() {
        return this.events;
    }

}
