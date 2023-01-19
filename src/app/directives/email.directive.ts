import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, PatternValidator} from '@angular/forms';

@Directive({
  selector: '[emailPattern]',//nombre de como es llamada en el html
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors|null{
    let valida: boolean = false;//la validacion empieza en icorrecto, si es correcto sera true
    let patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";//patern email
    //console.log(control.value);//console del valor que viene del html
    if (control.value.match(patternEmail)){//cogemos el valor y probamos si coincide con el patern
      valida = true;//si el valor es correcto
    }
    //console.log(valida);//ver si es true o false
    return valida?null: {'emailPattern': true};//entre '' va el nombre del error a mostrar
  }
}
