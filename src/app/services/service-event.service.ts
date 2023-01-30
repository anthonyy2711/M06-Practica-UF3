import { Injectable } from '@angular/core';
import { Event } from '../class/event.model ';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  constructor() { 


  }
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
      let id = i;
      let name = this.eventNames[Math.floor(Math.random()*this.eventNames.length)];
      let type = this.eventType[Math.floor(Math.random()*this.eventType.length)];
      let date = this.eventDate[Math.floor(Math.random()*this.eventDate.length)];
      let site = this.eventSite[Math.floor(Math.random()*this.eventSite.length)];
      let price = this.eventPrice[Math.floor(Math.random()*this.eventPrice.length)];

      this.events.push(new Event(id, name, type, new Date(date), site, price));
    }
    //console.log(this.events);//muestra array de los eventos 
    return this.events;
  }
  
}
