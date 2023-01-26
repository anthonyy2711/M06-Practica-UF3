import { Component, OnInit,  } from '@angular/core';
import { ServiceEventService } from 'src/app/services/service-event.service';

@Component({
  selector: 'app-eventtemplatedriven',
  templateUrl: './eventtemplatedriven.component.html',
  styleUrls: ['./eventtemplatedriven.component.css']
})
export class EventtemplatedrivenComponent implements OnInit {
  nombre!:string;
  tipus!:string;
  data:any;
  lloc:any;
  preu: any;
  array: any;
  //injectem el servei
  constructor(public randomEvents:ServiceEventService ){

  }
  ngOnInit(): void {
    
    this.nombre="";
    this.tipus="";
    this.array= this.randomEvents.randomEvents();
    console.log(this.array)
  }


  submit(){

  }
}
