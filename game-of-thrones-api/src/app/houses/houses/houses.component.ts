import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  constructor(private housesService: HousesService) {

  }

  ngOnInit(){
    this.getAllHouses();
  }

  getAllHouses():void{
    this.housesService.getHouses().subscribe(
      res => console.log("res: " , res)
    )
  }

}
