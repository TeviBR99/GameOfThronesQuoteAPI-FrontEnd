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
  quoteSelected ?: Quote
  dialogOpened: boolean = false

  constructor( private quoteService: QuotesService){}

  ngOnInit(){
    this.quoteService.getRandomQuotes().subscribe(resQuotes =>{
      this.quotes = resQuotes;
    })
  }

  openDialog(quoteElement: Quote){
    console.log("quoteElement: ", quoteElement)
    this.dialogOpened = true;
  }

  confirmSwtichQuote(){
    console.log("confirmSwtichQuote")
    /*this.quoteService.getRandomQuote().subscribe(responseQuote =>{
      this.quotes = this.quotes?.filter(quote => quote !== this.quoteSelected)
      this.quotes?.push(responseQuote)
    })*/
  }

  closeDialog(){
    console.log("closeDialog")
    this.dialogOpened = false;
  }






}
