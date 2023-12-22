import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/persons/model/character.model';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { Filter, FilterHouse } from 'src/app/shared/model/filter.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  houses: House[] = [];

  filter : FilterHouse = new FilterHouse()

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
      console.log("findAll")
      this.houses = responseHouses;
    }
  }

  findWithFilters(responseHouses:House[]):void{
    if( !this.filter.checkIfFiltersAreEmpty() ){
      console.log("findWithFilters")
      this.houses = responseHouses.filter(item => item.name.toLowerCase().indexOf( this.filter.name.value!.toLowerCase() ) > -1 )
    }
  }

  searchFilters():void{
    console.log("HouseName: ", this.filter.name.value);
    console.log("Slug: ", this.filter.slug.value);
    console.log("Member: ", this.filter.member.value);
    this.getAllHouses()
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


