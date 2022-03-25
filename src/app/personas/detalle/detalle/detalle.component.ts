import { Component, OnInit } from '@angular/core';
import { PersonaCrudService } from 'src/app/servicios/persona/persona-crud.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id:any
  persona:any

  constructor(
    private crudService:PersonaCrudService,
    private activateRoute:ActivatedRoute,
    private router:Router,
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.crudService.getPersonaId(this.id).subscribe(res=>{
      this.persona = res
      
     
   })
  } 


  ngOnInit(): void {
  }

  planta(){
    this.router.navigateByUrl('planta/'+ this.id)
  }

}
