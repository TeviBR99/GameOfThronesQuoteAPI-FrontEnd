import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../model/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor( private http: HttpClient ) { }

  getHouses() : Observable<House[]>{
    return this.http.get<House[]>('https://api.gameofthronesquotes.xyz/v1/houses');
  }
}
