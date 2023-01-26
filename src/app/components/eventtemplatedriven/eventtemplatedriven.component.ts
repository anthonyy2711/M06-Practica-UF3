import { Component, OnInit,  } from '@angular/core';

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

  ngOnInit(): void {
    
    this.nombre="";
    this.tipus="";
    this.array= [
      {
        as: '',
        asd: '',
      },
      {
        as: '',
        asd: '',
      },
      {
        as: '',
        asd: '',
      },
      {
        as: '',
        asd: '',
      },
      {
        as: '',
        asd: '',
      },
    ];
  }


  submit(){

  }
}
