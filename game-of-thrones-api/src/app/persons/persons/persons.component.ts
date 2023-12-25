import { Component } from '@angular/core';
import { PersonsService } from '../service/persons.service';
import { Character } from '../model/character.model';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { FilterPerson } from '../model/filterperson';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {

  persons?: Character[]

  filter: FilterPerson = new FilterPerson()

  constructor(
    private personsService: PersonsService,
    private sharedService: SharedService,
    private router: Router) {
  }


  ngOnInit(){
    this.getAllCharacters()
  }

  getAllCharacters():void{
    this.personsService.getAllCharacters().subscribe(charactersResponse =>{
      this.findAll(charactersResponse)
      this.findWithFilters(charactersResponse)
    })
  }

  findAll(characterResponse:Character[]):void{

  }

  findWithFilters(characterResponse:Character[]):void{

  }

  search():void{

  }

  clearFilters():void{

  }

  goToCharaterDetail(person: Character){
    console.log("Person: ", person)
    this.sharedService.setCharacter(person)
    this.router.navigate(['/person-info'])
  }



}
