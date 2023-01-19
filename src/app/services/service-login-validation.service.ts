import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../class/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceLoginValidationService {
  
  user1 = new User('ruyou', 'pruyou', 'ruyou@gmail.com', 'soltero', 'hombre', 'games', 'admin');
  user2 = new User('anthony', 'panthony', 'anthonygmail.com', 'soltero', 'hombre', 'games', 'admin');



}
