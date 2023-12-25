import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/persons/model/character.model';
import { FilterHouse } from '../model/filterhouse';
import { Utils } from 'src/app/shared/model/utils';
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
      }
    )
  }

  findAll(responseHouses:House[]):void{
    if( this.filter.checkIfFiltersAreEmpty() ){
      this.houses = responseHouses;
    }
  }

  findWithFilters(responseHouses:House[]):void{
    if( !this.filter.checkIfFiltersAreEmpty() ){
      this.houses = this.filter.filterResults(responseHouses) ;
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


