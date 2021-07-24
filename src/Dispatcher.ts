
interface Event {
    name: string,
    payload: any,
}

export class Dispatcher {

    private events: Array<Event> = [];

    public dispatch(eventName: string, payload: any) {
        this.events.push({
            name: eventName,
            payload: payload
        });
    }

    public getEvents() {
        return this.events;
    }

}
