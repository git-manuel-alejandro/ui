import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PlantaCrudService {

  API:string = environment.API_URL
  constructor(private clientHttp:HttpClient) { }

  // guardarPersona(persona:Persona):Observable<any>{
  //   return this.clientHttp.post(this.API+'persona/', persona)   
  // }

  getPersona(){    
    return this.clientHttp.get(this.API+'persona/')
  }

  getAsde(id:any){    
    return this.clientHttp.get(this.API+'planta/?id_persona='+id)
  }


}
