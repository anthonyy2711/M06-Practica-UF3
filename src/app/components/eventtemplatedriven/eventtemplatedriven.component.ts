import { Component, OnInit,  } from '@angular/core';
import { count } from 'rxjs';
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
  totalEvents!:number;
  //filtrar
  eventFiltrado!: Event[];
  nameFilter!: string;
  siteFilter!: string;
  priceFilter!: number;
  //injectem el servei
  constructor(public randomEvents:ServiceEventService ){

  }
  
  ngOnInit(): void {
    
    this.array= this.randomEvents.randomEvents();
    //console.log(this.array);//console log para ver los enventos randoms

    this.total=10;
    this.cp=1;
    this.eventFiltrado = this.array;
    this.nameFilter="";
    this.siteFilter="";
    this.priceFilter;
  

  }

  filter(){

    this.eventFiltrado = this.array.filter(value => {
      console.log(this.nameFilter.toUpperCase())
      if(value.event_name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) != -1){
        //console.log("Array name "+value.event_name.toUpperCase());
        //console.log("input name "+this.nameFilter.toUpperCase());
        if(value.event_price <= this.priceFilter){
          if(value.event_site.toUpperCase().indexOf(this.siteFilter.toUpperCase()) !=-1){
            return true;
          }
          
        }
        
      }
      return false;

    });
  }
  notFoundEvent(){
    if(this.eventFiltrado.length==0){
      true;
    } else{
      false;
    }
  }
  submit(){

  }
}
