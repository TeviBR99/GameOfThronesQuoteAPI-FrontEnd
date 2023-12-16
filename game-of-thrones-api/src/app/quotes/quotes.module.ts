import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: QuotesComponent },
];

@NgModule({
  declarations: [
    QuotesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    QuotesComponent,
  ]
})
export class QuotesModule { }
