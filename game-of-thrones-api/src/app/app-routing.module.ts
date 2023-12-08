import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { PersonsComponent } from './persons/persons/persons.component';
import { HousesComponent } from './houses/houses/houses.component';
import { PersonElementComponent } from './persons/person-element/person-element.component';
import { HouseElementComponent } from './houses/house-element/house-element.component';
import { QuoteElementComponent } from './quotes/quote-element/quote-element.component';



const routes: Routes = [
  {  path: '', redirectTo: '/houses', pathMatch: 'full'},
  {
    path: 'quotes',
    component: QuotesComponent,
  },
  {
    path: 'persons',
    component: PersonsComponent,
  },
  {
    path: 'houses',
    component: HousesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
