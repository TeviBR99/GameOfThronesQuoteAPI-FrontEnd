import { Component } from '@angular/core';
import { PersonsService } from '../service/persons.service';
import { Character } from '../model/character.model';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { FilterPerson } from '../model/filterperson';
import { Utils } from 'src/app/shared/model/utils';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {

  persons: Character[] = []

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
      console.log("Persons: ", charactersResponse)
      this.findAll(charactersResponse)
      this.findWithFilters(charactersResponse)
    })
  }

  findAll(characterResponse:Character[]):void{
    if( this.filter.checkIfFiltersAreEmpty() ){

      this.persons = characterResponse
    }
  }

  findWithFilters(characterResponse:Character[]):void{
    if( !this.filter.checkIfFiltersAreEmpty() ){
      this.persons = Utils.dropRepeatedDataAndMerge( this.filter.filterResults(characterResponse) )
    }
  }

  getImageURL(person: Character){
    return "assets/img/characters/" + person.slug + ".jpg";
  }

  search():void{
    this.getAllCharacters();
  }

  clearFilters():void{
    this.filter.clearFilters()
    this.getAllCharacters();
  }

  goToCharaterDetail(person: Character){
    console.log("Person: ", person)
    this.sharedService.setCharacter(person)
    this.router.navigate(['/person-info'])
  }



}
