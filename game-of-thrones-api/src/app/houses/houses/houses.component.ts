import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/persons/model/character.model';
import { FilterHouse } from '../model/filterhouse';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  houses: House[] = [];

  filter : FilterHouse = new FilterHouse();

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
        this.findAll(responseHouses)
        this.findWithFilters(responseHouses);
        console.log("houses - results: ", this.houses)
      }
    )
  }

  findAll(responseHouses:House[]):void{
    if( this.filter.checkIfFiltersAreEmpty() ){
      console.log("findAll")
      this.houses = responseHouses;
    }
  }

  findWithFilters(responseHouses:House[]):void{
    if( !this.filter.checkIfFiltersAreEmpty() ){
      console.log("findWithFilters")
      this.houses = this.filter.filterResults(responseHouses);
    }
  }

  searchFilters():void{
    this.filter.printFiltersInConsole();
    this.getAllHouses();
  }

  clearFilters():void{
    this.filter.clearFilters();
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


