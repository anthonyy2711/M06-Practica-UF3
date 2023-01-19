import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//hayque importar a mano
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//se importaron solos al crear los componentes
import { FormularioreactivoComponent } from './components/formularioreactivo/formularioreactivo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SoloLetrasDirective } from './directives/solo-letras.directive';
import { EventComponent } from './components/event/event.component';
import { EmailDirective } from './directives/email.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormularioreactivoComponent,
    LoginComponent,
    RegistroComponent,
    SoloLetrasDirective,
    EventComponent,
    EmailDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //necesito cargar a mano este modulo de angular
    ReactiveFormsModule //necesito cargar a mano este modulo de angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
