import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventtemplatedrivenComponent } from './components/eventtemplatedriven/eventtemplatedriven.component';
import { FormularioreactivoComponent } from './components/formularioreactivo/formularioreactivo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrocorrectoComponent } from './components/registrocorrecto/registrocorrecto.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
   
  },
  {
    path:'registro',
    component: RegistroComponent,
   
  },
  {
    path:'registrocorrecto',
    component: RegistrocorrectoComponent,
   
  },
  {
    path:'evento',
    component: EventtemplatedrivenComponent,
   
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
