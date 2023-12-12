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

  // Use a BehaviorSubject to store and notify subscribers of changes
  private personSource = new BehaviorSubject<Character | null>(null);

  // Observable for components to subscribe to changes
  public person$ = this.personSource.asObservable();

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
    this.personSource.next(person);
  }

  getCharacter():Character | null{
    return this.personSource.value;
  }

  setQuotes( quote: Quote ):void{
    this.quote = quote
  }

  getQuote():Observable<Quote>{
    return of(this.quote);
  }



}
