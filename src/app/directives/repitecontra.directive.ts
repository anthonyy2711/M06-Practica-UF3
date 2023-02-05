//añado la línea siguiente
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors} from '@angular/forms'

//Input se añade por lo especial de esta directiva
import { Directive, Input  } from '@angular/core';

@Directive({
  selector: '[appRepitecontra]',//nombre de como es llamada en el html
  providers: [
    //hay que añadirlo lo siguiente
    { provide: NG_VALIDATORS, 
      useExisting: RepitecontraDirective, 
      multi: true }

  ]
})
export class RepitecontraDirective {
  @Input() parametro:any;//recoger contraseña que viene del: [parametro]="this.formularioReactivo.value.contra" en html
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log("Value contra: "+this.parametro)//valor que viene del html: [parametro]="this.formularioReactivo.value.contra": Contraseña:
    console.log("Value confcontra: "+control.value)//valor del campo que tiene la directiva: Confirmar Contraseña:
    if(control &&  control.value!= this.parametro){
      return {'repitecontra': true}; //cuando hay error
    }else{
      return null;//cuando no hay error
    }

  }

}
