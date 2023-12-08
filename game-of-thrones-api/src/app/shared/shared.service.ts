import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from '../houses/model/house.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private house!: House

  constructor() { }

  getHouse():Observable<House>{
    return of(this.house)
  }

  setHouse( dataToSave: House ):void{
    this.house = dataToSave;
  }

}
