import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../class/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceLoginValidationService {
  
  constructor(){
    this.createUsers();
  }
  user1 = new User('ruyou', 'pruyou', 'ruyou@gmail.com', 'soltero', 'hombre', 'games', 'admin');
  user2 = new User('anthony', 'panthony', 'anthonygmail.com', 'soltero', 'hombre', 'games', 'admin');

  names = ['Maria', 'Marco', 'Laura', 'Joel', 'Raul', ];
  marital_status = ['Soltero', 'Casado', 'Viudo'];
  gender = ['Masculino', 'Femenino']
  information = ['BodyBuilder', 'Gamer', 'Runner', 'Teacher'];

  users =  [this.user1, this.user2];//Array de lo usuarios

  loginValidation(user:any, pass:any): string{
    console.log(this.users);
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].user_name == user && this.users[index].password == pass) {
        console.log('ok')
        return this.users[index].role;
      } 
    }
    return 'error';

    // if(user == this.user1.user_name && pass ==this.user1.password){
    //   console.log(this.users);
    //   console.log('ok')
    //   return true;
    // } else{
    //   console.log('no ok')
    //   return false;
    // }
  }
  //Create random users
  createUsers(){
    for (let index = 0; index < 18; index++) {
      let name = this.names[Math.floor(Math.random()*this.names.length)];
      let status = this.marital_status[Math.floor(Math.random()*this.marital_status.length)];
      let gender = this.gender[Math.floor(Math.random()*this.gender.length)];
      let info = this.information[Math.floor(Math.random()*this.information.length)];
      this.users.push(new User(name, 'pass', name+index+"@gmail.com", status, gender, info, 'buyer'));//añadimos los usuarios randoms al array users
    }
    console.log(this.users);
  }
  

}
