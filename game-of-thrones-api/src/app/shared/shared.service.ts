import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { House } from '../houses/model/house.model';
import { HousesService } from '../houses/service/houses.service';
import { Character } from '../persons/model/character.model';
import { PersonsService } from '../persons/service/persons.service';
import { Quote } from '../quotes/model/quote.model';
import { QuotesService } from '../quotes/service/quotes.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private house?: House

  private person ?: Character;

  constructor(
    private housesService: HousesService,
    private personsService: PersonsService,
    ) { }

  /* Methos to send data from a component to an other one */
  getHouse():House | undefined{
    return this.house;
  }

  setHouse( dataToSave: House ):void{
    this.house = dataToSave;
  }

  getHouseDetail():Observable<House[]>{
    return this.housesService.getHouseDetail(this.house?.slug!);
  }

  setCharacter( person:Character ): void{
    this.person = person
  }

  getCharacter( ): Character | undefined{
    return this.person;
  }

  getCharacterDetail():Observable<Character[]>{
    return this.personsService.getCharacterBySlug(this.person?.slug!);
  }



}
