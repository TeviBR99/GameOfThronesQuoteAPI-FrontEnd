import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteElementComponent } from './quote-element/quote-element.component';



@NgModule({
  declarations: [
    QuotesComponent,
    QuoteElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QuotesComponent,
    QuoteElementComponent
  ]
})
export class QuotesModule { }
