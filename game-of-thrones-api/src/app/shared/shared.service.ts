import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from '../houses/model/house.model';
import { HousesService } from '../houses/service/houses.service';
import { Character } from '../persons/model/character.model';
import { PersonsService } from '../persons/service/persons.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private house!: House

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

  /* Methods needed in other components  */
  getHouses():Observable<House[]>{
    return this.housesService.getHouses();
  }

  getCharacterDetail(name:string):Observable<any>{
    return this.personsService.getCharacterByName(name);
  }



}
