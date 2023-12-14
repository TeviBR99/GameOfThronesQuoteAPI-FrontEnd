import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../model/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getRandomQuotes():Observable<Quote[]>{
    return this.http.get<Quote[]>(' https://api.gameofthronesquotes.xyz/v1/random/5');
  }

  getRandomQuote():Observable<Quote>{
    return this.http.get<Quote>(' https://api.gameofthronesquotes.xyz/v1/random');
  }
}
