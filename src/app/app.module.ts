import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { PersonaListarComponent } from './personas/persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './personas/persona-crear/persona-crear.component';
import { PersonaActualizarComponent } from './personas/persona-actualizar/persona-actualizar.component';
import { DetalleComponent } from './personas/detalle/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    EmployeeComponent,
    ContactComponent,
    PersonaListarComponent,
    PersonaCrearComponent,
    PersonaActualizarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
