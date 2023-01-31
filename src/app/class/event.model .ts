export class Event {
    #event_id: number;
    #event_name: string;
    #event_type: string;
    #event_date: Date;
    #event_site: string;
    #event_price: number;
    constructor(event_id:number ,event_name:string, event_type:string, event_date:Date, event_site:string, event_price:number){
        this.#event_id = event_id;
        this.#event_name = event_name;
        this.#event_type = event_type;
        this.#event_date = event_date;
        this.#event_site = event_site;
        this.#event_price = event_price;
    }

    //gets
    get event_id(): number {
        return this.#event_id;
    }
    get event_name(): string {
        return this.#event_name;
    }
    get event_type(): string {
        return this.#event_type;
    }
    get event_date(): Date {
        return this.#event_date;
    }
    get event_site(): string {
        return this.#event_site;
    }
    get event_price(): number {
        return this.#event_price;
    }

    //sets
    set event_id(value: number) {
        if (value == null) {
            throw new Error('');
        }
        this.#event_id = value;
    }
    set event_name(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#event_name = value;
    }
    set event_type(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#event_type = value;
    }
    set event_date(value: Date) {
        this.#event_date = value;
    }
    set event_site(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#event_site = value;
    }
    set event_price(value: number) {
        if (value == null) {
            throw new Error('');
        }
        this.#event_price = value;
    }
}
