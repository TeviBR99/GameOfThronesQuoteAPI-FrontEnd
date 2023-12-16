import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { House } from '../model/house.model';
import { Character } from 'src/app/persons/model/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-element',
  templateUrl: './house-element.component.html',
  styleUrls: ['./house-element.component.scss']
})
export class HouseElementComponent {

  houseElement?: House;

  constructor(
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(){
    this.loadHouseElement()
  }

  loadHouseElement():void {
    if(this.sharedService.getHouse() != undefined){
      console.log("hey")
      this.sharedService.getHouseDetail().subscribe(houses =>{
        this.houseElement = houses[0];
        console.log("houseElement: ", this.houseElement)
      })
    }
  }

  desribeCharacter(person: Character):string {
    let describe = "";
    describe += "Name: " + person.name + " , Slug: " + person.slug
    return describe;
  }

  goToCharacterInfo(person: Character){
    console.log("Person: ", person)
    this.sharedService.setCharacter(person)
    this.router.navigate(['/person-info'])
  }

}
