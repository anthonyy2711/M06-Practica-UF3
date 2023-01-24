import { Injectable } from '@angular/core';
import { Event } from '../class/event.model ';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  constructor() { }
  
  //creacion de eventos manual
  event1 = new Event('Duke Times', 'Concierto', '2023-06-15T00:00:00','Barcelona',100);
  event2 = new Event('Eventions Parade Festivities', 'Cine', '2023-05-12T00:00:00','Madrid',130);
  event3 = new Event('Proteus Live Entertainment', 'Museu', '2023-07-18T00:00:00','Valencia',170);
  event4 = new Event('Pearl Party Division', 'Fira', '2023-08-13T00:00:00','Murcia',1430);
  
  //añadir los eventos manueales al array events
  events = [this.event1,this.event2,this.event3,this.event4];
}
