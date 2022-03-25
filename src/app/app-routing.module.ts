import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PersonaListarComponent } from './personas/persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './personas/persona-crear/persona-crear.component';
import { DetalleComponent } from './personas/detalle/detalle/detalle.component';
import { PersonaActualizarComponent } from './personas/persona-actualizar/persona-actualizar.component';
import { ListarAsdeComponent } from './planta/asde/listar-asde/listar-asde.component';
import { PlantaComponent } from './planta/planta/planta.component';


const routes: Routes = [
  // personas
  {path:'home',component:HomeComponent},
  {path:'personas',component:PersonaListarComponent},
  {path:'personas/nueva',component:PersonaCrearComponent},
  {path:'personas/detalle/:id',component:DetalleComponent},
  
  // planta
  {path:'planta/:id',component:PlantaComponent},
  {path:'planta/asde/:id',component:ListarAsdeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
