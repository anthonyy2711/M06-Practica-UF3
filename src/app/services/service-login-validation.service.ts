import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../class/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceLoginValidationService {
  
  user1 = new User('ruyou', 'pruyou', 'admin');
  user2 = new User('anthony', 'panthony', 'admin');
  user3 = new User('jonathan', 'pjonathan', 'buyer');
  user4 = new User('pau', 'ppau', 'buyer');
}
