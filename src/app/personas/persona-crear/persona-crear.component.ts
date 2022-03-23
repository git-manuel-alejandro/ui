import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonaCrudService } from 'src/app/servicios/persona/persona-crud.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-crear',
  templateUrl: './persona-crear.component.html',
  styleUrls: ['./persona-crear.component.css']
})
export class PersonaCrearComponent implements OnInit {

  data:FormGroup
  error:any[] = []
  eRut:string = ''
  eNombres:string = ''
  eApellidos:string = ''

  constructor(
    private formulario:FormBuilder,
    private crudService:PersonaCrudService,
    private router:Router,
    
    
    ){
    this.data = this.formulario.group({
      rut:[0],
      nombres:[''],
      apellidos:['']
    })
  }

  ngOnInit(): void {
  }

  nuevaPersona():any{
    this.crudService.guardarPersona(this.data.value).subscribe((res) =>{
      alert('Persona Ingresada')

      this.router.navigateByUrl('personas')
      console.log('respuesta', res)
    }, (err)=>{

      this.eRut = err.error.rut[0]
      this.eNombres = err.error.nombres[0]
      this.eApellidos = err.error.apellidos[0]
      // console.log(err.error.rut[0])
    })

  }

}
