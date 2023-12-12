import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor( private http: HttpClient) { }

  getAllCharacters():Observable<Character[]>{
    return this.http.get<Character[]>('https://api.gameofthronesquotes.xyz/v1/characters');
  }

  getCharacterBySlug(slug: string):Observable<Character>{
    return this.http.get<Character>("https://api.gameofthronesquotes.xyz/v1/character/" + slug);
  }
}
