import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceLoginValidationService } from 'src/app/services/service-login-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  nombreUsuario!:string;
  passwordUsuario!:string;
  constructor(public serviceLoginValidationService: ServiceLoginValidationService){
    
  }

  ngOnInit():void{
    this.nombreUsuario="";
    this.passwordUsuario="";
    console.log(this.serviceLoginValidationService);
    
  }

  submit(){
    // if(this.nombreUsuario == this.serviceLoginValidationService.user1){

    // }
  }
}
