import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { count } from 'rxjs';
import { ServiceEventService } from 'src/app/services/service-event.service';
import { SynchronizationService } from 'src/app/services/synchronization.service';
import { Event } from '../../class/event.model ';
@Component({
  selector: 'app-eventtemplatedriven',
  templateUrl: './eventtemplatedriven.component.html',
  styleUrls: ['./eventtemplatedriven.component.css']
})
export class EventtemplatedrivenComponent implements OnInit {
  array!: Event[];
  role!:string;

  total!:number;
  cp!:number;
  totalEvents!:number;


  //filtrar
  eventFiltrado!: Event[];
  nameFilter!: string;
  siteFilter!: string;
  priceFilter!: number;
  //injectem el servei
  constructor(public randomEvents:ServiceEventService, private myCookie: CookieService, private sincronizacion:SynchronizationService, private router:Router){

  }
  
  ngOnInit(): void {
    
    this.array= this.randomEvents.randomEvents();
    //console.log(this.array);//console log para ver los enventos randoms



    this.total=10;
    this.cp=1;
    this.eventFiltrado = this.array;
    this.nameFilter="";
    this.siteFilter="";
    this.priceFilter=50;

    this.sincronizacion.RoleActual.subscribe(
      message => this.role=message
    )
    
  }

  filter(){

    this.eventFiltrado = this.array.filter(value => {
      //console.log(this.nameFilter.toUpperCase())
      if(value.event_price <= this.priceFilter){
        //console.log("Array name "+value.event_name.toUpperCase());
        //console.log("input name "+this.nameFilter.toUpperCase());
        if(value.event_name.toUpperCase().indexOf(this.nameFilter.toUpperCase()) != -1){
          if(value.event_site.toUpperCase().indexOf(this.siteFilter.toUpperCase()) !=-1){
            return true;
          }        
        }       
      }
      return false;

    });
  }
  submit(){

  }
  logout() {
    this.myCookie.deleteAll();
    this.router.navigate(['login']) //importar router y redirigir al login
  }
}
