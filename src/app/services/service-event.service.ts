import { Injectable } from '@angular/core';
import { Event } from '../class/event.model ';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  constructor() { 


  }
  /*
  //creacion de eventos manual
  event1 = new Event('Duke Times', 'Concierto', 2023-06-15T00:00:00,'Barcelona',100);
  event2 = new Event('Eventions Parade Festivities', 'Cine', '2023-05-12T00:00:00','Madrid',130);
  event3 = new Event('Proteus Live Entertainment', 'Museo', '2023-07-18T00:00:00','Valencia',170);
  event4 = new Event('Pearl Party Division', 'Fira', '2023-08-13T00:00:00','Murcia',1430);
  
  //añadir los eventos manueales al array events
  events = [this.event1,this.event2,this.event3,this.event4];
  */
  events:Event[] = [];
  //Informacion para generar randoms
  eventNames = [
    'Castles Main Design',
    'Simply Running Bird',
    'Maverick Pro Fêtes',
    'Calluna Gals',
    'Manor Events',
    'Staging Shindigger',
    'Silver Planners',
    'Sparkling Socials',
    'Roads Times',
    'Fourplan Blue Meetings',
    'Amalgamated New Hands',
    'Two N Fêtes',
    'Five Come Festivities',
    'Fête Functions',
    'Sparkling It Forest',
    'Nine Moments',
    'Knox Everything',
    'Little Events',
    'Encore Guides',
    'Land Green Party',
    'Staging Blowout',
    'Fab Coasters'
  ];
  eventType = ['Concierto', 'Cine', 'Museo', 'Fira'];
  eventDate = [
    '2023-06-15T00:00:00', 
    '2023-05-12T00:00:00', 
    '2023-07-18T00:00:00', 
    '2023-08-13T00:00:00', 
    '2023-08-03T00:00:00', 
    '2023-10-13T00:00:00', 
    '2023-10-19T00:00:00',
    '2023-09-09T00:00:00',
    '2023-11-12T00:00:00',
    '2023-12-22T00:00:00'
  ];
  eventSite = ['Barcelona', 'Madrid', 'Valencia', 'Murcia', 'Bilbao', 'Sevilla'];
  eventPrice = [50, 60, 70, 80, 90, 250, 500, 1000];

  //Generar events randoms
  randomEvents(): Event[]{
    for(let i=0; i < 100; i++){
      let name = this.eventNames[Math.floor(Math.random()*this.eventNames.length)];
      let type = this.eventType[Math.floor(Math.random()*this.eventType.length)];
      let date = this.eventDate[Math.floor(Math.random()*this.eventDate.length)];
      let site = this.eventSite[Math.floor(Math.random()*this.eventSite.length)];
      let price = this.eventPrice[Math.floor(Math.random()*this.eventPrice.length)];

      this.events.push(new Event(name, type, new Date(date), site, price));
    }
    //console.log(this.events);//muestra array de los eventos 
    return this.events;
  }
  
}
