import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
