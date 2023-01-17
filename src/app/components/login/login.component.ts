import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  nombreUsuario!:string;
  passwordUsuario!:string;
  constructor(){
    
  }

  ngOnInit():void{
    this.nombreUsuario="";
    this.passwordUsuario="";
  }
  submit(){

  }
}
