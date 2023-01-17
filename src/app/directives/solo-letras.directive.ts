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
  //el atributo entreValores me hara la validacion que le voy a decir
  validate(control: AbstractControl): ValidationErrors|null{
    let valida: boolean = false;
    let patternLetras="[A-Za-z]+";
    console.log(control.value);
    if (patternLetras.match(control.value)){
      valida = true;//si el valor es correcto
    }
    console.log(valida);
    return valida?null: {'nombre': true};
  }
}
