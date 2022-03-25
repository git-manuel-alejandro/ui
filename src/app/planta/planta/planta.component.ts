import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {
  id:any

  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router,
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.id)
   }

  ngOnInit(): void {
  }

  ascensos(){
    this.router.navigateByUrl('planta/asde/'+ this.id)
  }

}
