import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonaListarComponent } from './personas/persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './personas/persona-crear/persona-crear.component';
import { DetalleComponent } from './personas/detalle/detalle/detalle.component';
import { PersonaActualizarComponent } from './personas/persona-actualizar/persona-actualizar.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'personas',component:PersonaListarComponent},
  {path:'personas/nueva',component:PersonaCrearComponent},
  {path:'personas/detalle/:id',component:DetalleComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
