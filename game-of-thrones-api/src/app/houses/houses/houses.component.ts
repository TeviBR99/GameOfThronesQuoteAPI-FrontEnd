import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { Character } from 'src/app/persons/model/character.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  displayedColumns: string[] = ['id','name','slug','members'];
  dataFetched: House[] = [];

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
      res =>{
        this.dataFetched = res
        console.log("dataFetched: ", this.dataFetched)
      }
    )
  }

  describeCharacter(persons: Character[]): string{
    let description = "";
    persons.forEach(p => {
      description += p.name + " - "
    })
    return description;
  }

  actionButton(houseItem:House):void{
    this.sharedService.setHouse(houseItem)
    this.router.navigate(['/house-info'])
  }


}


