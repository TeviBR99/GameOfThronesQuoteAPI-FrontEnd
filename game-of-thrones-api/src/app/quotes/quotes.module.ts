import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteElementComponent } from './quote-element/quote-element.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: QuotesComponent }
];

@NgModule({
  declarations: [
    QuotesComponent,
    QuoteElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    QuotesComponent,
    QuoteElementComponent
  ]
})
export class QuotesModule { }
