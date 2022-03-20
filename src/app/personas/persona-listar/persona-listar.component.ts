import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PersonaCrudService } from 'src/app/servicios/persona/persona-crud.service'; 

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent implements OnInit {

  personas:any= [];

  constructor(
    private http:HttpClient,
    private crudService:PersonaCrudService,
    
    
    ) { }



  ngOnInit(): void {
    this.getPersonas()
  }

  getPersonas(){
    this.crudService.getPersona().subscribe(res=>{
      this.personas = res
    })}

  eliminarPersona(id:any){
    this.http.delete<any>(environment.API_URL+'persona/'+id,  {observe: 'response'}).subscribe(res=>{
      if(res.status == 204) {
        alert('Eliminado!!')
      }else{
        console.log(res)
      }
      this.getPersonas()
    });
  }

}
