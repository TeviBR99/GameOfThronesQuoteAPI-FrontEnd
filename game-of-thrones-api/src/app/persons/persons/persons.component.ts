import { Component } from '@angular/core';
import { PersonsService } from '../service/persons.service';
import { Character } from '../model/character.model';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {

  persons?: Character[]

  constructor(
    private personsService: PersonsService,
    private sharedService: SharedService,
    private router: Router) {
  }


  ngOnInit(){
    this.personsService.getAllCharacters().subscribe(characters =>{
      this.persons = characters
    })
  }

  goToCharaterDetail(person: Character){
    console.log("Person: ", person)
    this.sharedService.setCharacter(person)
    this.router.navigate(['/person-info'])
  }



}
