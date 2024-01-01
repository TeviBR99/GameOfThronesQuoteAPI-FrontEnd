import { Component } from '@angular/core';
import { QuotesService } from '../service/quotes.service';
import { Quote } from '../model/quote.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  positionSelected ?: number
  dialogOpened: boolean = false
  quotesMap : Map<number,Quote> = new Map()

  constructor( private quoteService: QuotesService){}

  ngOnInit(){
    this.quoteService.getRandomQuotes().subscribe(resQuotes =>{
        let i = 0;
        resQuotes.forEach(q =>{
          this.quotesMap?.set(i,q)
          i++;
        } )
    })
  }

  openDialog(position:number){
    console.log("quoteElement position: ", position)
    this.positionSelected = position
    this.dialogOpened = true;
  }

  confirmSwtichQuote(){
    console.log("confirmSwtichQuote")
    this.quoteService.getRandomQuote().subscribe(responseQuote =>{
      this.quotesMap.set(this.positionSelected!, responseQuote)
      this.closeDialog();
    })
  }

  closeDialog(){
    console.log("closeDialog")
    this.dialogOpened = false;
  }

  getQuotes(){
    return Array.from(this.quotesMap.values())
  }




}
