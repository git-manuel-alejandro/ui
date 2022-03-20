import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonaListarComponent } from './personas/persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './personas/persona-crear/persona-crear.component';
import { PersonaActualizarComponent } from './personas/persona-actualizar/persona-actualizar.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'personas',component:PersonaListarComponent},
  {path:'personas/nueva',component:PersonaCrearComponent},
  {path:'personas/actualizar',component:PersonaActualizarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
