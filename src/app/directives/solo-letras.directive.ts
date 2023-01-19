import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, PatternValidator} from '@angular/forms';

@Directive({
  selector: '[soloLetras]', //nombre de como es llamada en el html
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SoloLetrasDirective,
      multi: true
    }
  ]
})
export class SoloLetrasDirective {

  constructor() { }
  //dado un control de un formulario cualquiera si le pongo 
  //el atributo soloLetras me hara la validacion que le voy a decir
  validate(control: AbstractControl): ValidationErrors|null{
    let valida: boolean = false;//la validacion empieza en icorrecto, si es correcto sera true
    let patternLetras="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";//patern solo letras
    //console.log(control.value);//console del valor que viene del html
    if (control.value.match(patternLetras)){//cogemos el valor y probamos si coincide con el patern
      valida = true;//si el valor es correcto
    }
    //console.log(valida);//ver si es true o false
    return valida?null: {'sololetras': true};//entre '' va el nombre del error a mostrar
  }
}
