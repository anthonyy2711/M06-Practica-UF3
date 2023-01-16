import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})
export class FormularioreactivoComponent implements OnInit{
  datos!:string;//con ! no hace falta inicializar
  tipusEntrada: string[];
  informacion: string[];
  selectedInfoArray : string[];

  constructor(){
    this.tipusEntrada = ['Concert', 'Cinema', 'Museu', 'Fira'];
    this.informacion = ['Videojocs', 'Accesoris', 'Novetats del mercat'];
    this.selectedInfoArray = [];
  }

  formularioReactivo = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z]+')//solo letras
    ]),

    contra: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+')//solo numeros y letras
    ]),

    confcontra: new FormControl('', [
      Validators.required
    ]),

    correo: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')//correo
      //Validators.email

    ]),

    tipusEntrada: new FormControl('', [
      Validators.required
    ]),

    sexe: new FormControl('', [
      Validators.required
    ]),

    info: new FormControl('', [
      Validators.required
    ]),
    
    condiciones: new FormControl('', [
      Validators.required
    ]),

  });

  ngOnInit():void{
    this.datos="";
  }
  
  selectedInfo(info:string){
    //console.log(info);
    var esta = -1;//-1 es false, porque si lo iniciamos a 0 seria la primera posicion del array 
    for (let i = 0; i < this.selectedInfoArray.length; i++) {
      if(this.selectedInfoArray[i] == info){
        esta = i;
        break;
      }
    }
    if(esta==-1){//si no esta lo añado
      this.selectedInfoArray.push(info);
    }else{//si esta lo elimino
      console.log(esta);
      this.selectedInfoArray.splice(esta,1);//elimino
    }

  }

  submit(){
    console.log(this.selectedInfoArray)
    this.datos=`
    Nombre: ${this.formularioReactivo.value.nombre} | 
    Contraseña: ${this.formularioReactivo.value.contra} |
    Confirmacion Contraseña: ${this.formularioReactivo.value.confcontra} | 
    Correo: ${this.formularioReactivo.value.correo} |
    Estado civil: ${this.formularioReactivo.value.tipusEntrada} |
    Sexe: ${this.formularioReactivo.value.sexe} |
    `
    this.datos+="Informacion: ";
    for (let i = 0; i < this.selectedInfoArray.length; i++) {
      this.datos += this.selectedInfoArray[i] + " ";
      
    }

  }
}
