import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/class/user';
import { ServiceLoginValidationService } from 'src/app/services/service-login-validation.service';
import { SynchronizationService } from 'src/app/services/synchronization.service';

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
  createUsers!: any;
  cookieService: any;

  //injectem el servei
  constructor(private loginService: ServiceLoginValidationService, private myCookie: CookieService, private router:Router, private sincronizacion:SynchronizationService){
    
  }

  ngOnInit():void{
    this.nombreUsuario="";
    this.passwordUsuario="";
    this.createUsers=this.loginService.createUsers();

    this.sincronizacion.RoleActual.subscribe(
      message => this.role=message
    )
  }

  submit(){
    //injectamos el servicio y le pasamos los parametros
    this.loginValidation = this.loginService.loginValidation(this.nombreUsuario, this.passwordUsuario);

    if(this.loginValidation=="error"){
      //alert("Mal")
    }
    else{
      var loginUser = {
      "username": this.nombreUsuario,
      "role": this.loginValidation 
      };
      //
      this.myCookie.set("user",JSON.stringify(loginUser));

      this.sincronizacion.cambiarRole(this.loginValidation);
      
      this.router.navigate(['evento'])
    }

    
    
  }

  delete(){
    this.myCookie.delete(this.nombreUsuario);
  }
}
