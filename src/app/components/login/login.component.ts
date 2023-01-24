import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ServiceLoginValidationService } from 'src/app/services/service-login-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  nombreUsuario!:string;
  passwordUsuario!:string;
  role!:string;
  loginValidation:any;
  createUsers:any;
  cookieService: any;
  //injectem el servei
  constructor(private loginService: ServiceLoginValidationService, private myCookie: CookieService){
    
  }

  ngOnInit():void{
    this.nombreUsuario="";
    this.passwordUsuario="";
    this.createUsers=this.loginService.createUsers();
    console.log(this.createUsers)
  }

  submit(){
    //injectamos el servicio y le pasamos los parametros
    this.loginValidation = this.loginService.loginValidation(this.nombreUsuario, this.passwordUsuario);

    console.log(this.nombreUsuario);
    console.log(this.loginValidation);
    //
    this.myCookie.set(this.nombreUsuario,this.loginValidation);
    console.log(this.myCookie.get(this.nombreUsuario));
  }

  delete(){
    this.myCookie.delete(this.nombreUsuario);
  }
}
