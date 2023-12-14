import { Component } from '@angular/core';
import { QuotesService } from '../service/quotes.service';
import { Quote } from '../model/quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  quotes ?: Quote[]

  constructor( private quoteService: QuotesService){}

  ngOnInit(){
    this.quoteService.getRandomQuotes().subscribe(resQuotes =>{
      this.quotes = resQuotes;
    })
  }

  openDialog(quoteElement: Quote){

  }






}
