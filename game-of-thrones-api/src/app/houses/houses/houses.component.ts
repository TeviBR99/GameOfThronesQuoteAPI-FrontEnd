import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/persons/model/character.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  houses: House[] = [];
  houseName =  new FormControl('');

  constructor(
    private housesService: HousesService,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(){
    this.getAllHouses();
  }

  getAllHouses():void{
    this.housesService.getHouses()
    .subscribe(
      responseHouses =>{
        //Returns all the house in case there is no filter
        if(this.houseName.value == ""){
          console.log("No filters")
          this.houses = responseHouses
          return;
        }
        this.houses = responseHouses.filter(item => item.name.toLowerCase().indexOf( this.houseName.value!.toLowerCase() ) > -1 )
      }
    )
  }

  searchFilters():void{
    console.log("HouseName: ", this.houseName.value);
    this.getAllHouses()
  }

  clearFilters():void{
    this.houseName.setValue("");
    this.getAllHouses()
  }

  goToHouseInfo(houseItem:House):void{
    console.log("House: ", houseItem)
    this.sharedService.setHouse(houseItem)
    this.router.navigate(['/house-info'])
  }

  describeCharacter(persons: Character[]): string{
    let description = "";
    persons.forEach(p => {
      description += p.name + " - "
    })
    return description;
  }



}


