import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';

@Component({
  selector: 'app-house-element',
  templateUrl: './house-element.component.html',
  styleUrls: ['./house-element.component.scss']
})
export class HouseElementComponent {

  houseElement!: House;

  constructor(private housesService: HousesService, private sharedService: SharedService) { }

  ngOnInit(){
    this.loadHouseElement()
  }

  loadHouseElement():void {
    this.sharedService.getHouse().subscribe(res => this.houseElement = res)
    console.log("House Element: ", this.houseElement)
  }

}
