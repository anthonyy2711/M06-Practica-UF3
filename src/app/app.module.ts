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
import { EmailDirective } from './directives/email.directive';
import { RepitecontraDirective } from './directives/repitecontra.directive';
import { CookieService } from 'ngx-cookie-service';
import { RegistrocorrectoComponent } from './components/registrocorrecto/registrocorrecto.component';
import { EventtemplatedrivenComponent } from './components/eventtemplatedriven/eventtemplatedriven.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioreactivoComponent,
    LoginComponent,
    RegistroComponent,
    SoloLetrasDirective,
    EmailDirective,
    RepitecontraDirective,
    RegistrocorrectoComponent,
    EventtemplatedrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //necesito cargar a mano este modulo de angular
    ReactiveFormsModule //necesito cargar a mano este modulo de angular
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
