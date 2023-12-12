import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { House } from '../houses/model/house.model';
import { HousesService } from '../houses/service/houses.service';
import { Character } from '../persons/model/character.model';
import { PersonsService } from '../persons/service/persons.service';
import { Quote } from '../quotes/model/quote.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private house!: House

  private person ?: Character;

  private quote!: Quote


  constructor(
    private housesService: HousesService,
    private personsService: PersonsService
    ) { }

  /* Methos to send data from a component to an other one */
  getHouse():Observable<House>{
    return of(this.house)
  }

  setHouse( dataToSave: House ):void{
    this.house = dataToSave;
  }

  setCharacter( person:Character ): void{
    this.person = person
  }

  getCharacter():Observable<Character>{
    return this.personsService.getCharacterBySlug(this.person?.slug!);
  }

  setQuotes( quote: Quote ):void{
    this.quote = quote
  }

  getQuote():Observable<Quote>{
    return of(this.quote);
  }



}
