import { Component, OnInit,  } from '@angular/core';
import { ServiceEventService } from 'src/app/services/service-event.service';
import { Event } from '../../class/event.model ';
@Component({
  selector: 'app-eventtemplatedriven',
  templateUrl: './eventtemplatedriven.component.html',
  styleUrls: ['./eventtemplatedriven.component.css']
})
export class EventtemplatedrivenComponent implements OnInit {
  array!: Event[];

  total!:number;
  cp!:number;
  //filtrar
  eventFiltrado!: Event[];
  nameFilter!: string;
  priceFilter!: number;
  //injectem el servei
  constructor(public randomEvents:ServiceEventService ){

  }
  
  ngOnInit(): void {
    
    this.array= this.randomEvents.randomEvents();
    console.log(this.array)

    this.total=10;
    this.cp=3;
    this.eventFiltrado = this.array;
    this.nameFilter="";
    this.priceFilter=50;
  }

  filter(){

    this.eventFiltrado = this.array.filter(value => {
      console.log(this.nameFilter.toUpperCase())
      if(value.event_name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) != -1){
        if(value.event_price <= this.priceFilter)
          return true;
      }
      return false;

    });



  }
  submit(){

  }
}
