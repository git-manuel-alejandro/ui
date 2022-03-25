import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlantaCrudService } from '../../../servicios/persona/planta-crud.service';


@Component({
  selector: 'app-listar-asde',
  templateUrl: './listar-asde.component.html',
  styleUrls: ['./listar-asde.component.css']
})
export class ListarAsdeComponent implements OnInit {
  id:any
  asde:any

  constructor(
    private asdeService:PlantaCrudService,
    private activateRoute:ActivatedRoute,
    private router:Router,
  ) 
  {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.asdeService.getAsde(this.id).subscribe(res=>{
    this.asde = res

    console.log(this.asde)
      
     
   })
  } 

  ngOnInit(): void {
  }
  

}
