import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaCrudService } from 'src/app/servicios/persona/persona-crud.service'; 
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-persona-actualizar',
  templateUrl: './persona-actualizar.component.html',
  styleUrls: ['./persona-actualizar.component.css']
})
export class PersonaActualizarComponent implements OnInit {
id:any
persona:any
data:FormGroup
  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private crudService:PersonaCrudService,
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    console.log(parseInt(this.id))
    this.crudService.getPersonaId(this.id).subscribe(res=>{
      console.log(res)
      
      this.data.setValue({
        // rut      :  res[0]['rut'],
        // nombres  : [0]['nombres'],
        // apellidos: [0]['apellidos']
      })
    })
    this.data = this.formulario.group({
      rut:[0],
      nombres:[''],
      apellidos:['']
    })
  }

  ngOnInit(): void {
  }

  getPersona(id:any){
    this.crudService.getPersona().subscribe(res=>{
      this.persona = res
    })

  }

}
