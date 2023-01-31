import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SynchronizationService {

  constructor() { }

  private role = new BehaviorSubject("");//para sincronizar componentes

  public RoleActual=this.role.asObservable();

  public cambiarRole(message:string){
    this.role.next(message);
  }

}
