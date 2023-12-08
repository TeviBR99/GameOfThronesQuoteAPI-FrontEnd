import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { PersonsComponent } from './persons/persons/persons.component';
import { HousesComponent } from './houses/houses/houses.component';



const routes: Routes = [
  {  path: '', redirectTo: '/houses', pathMatch: 'full'},
  {
    path: 'quotes',
    title: "Quotes",
    component: QuotesComponent,
  },
  {
    path: 'persons',
    title: "Persons",
    component: PersonsComponent,
  },
  {
    path: 'houses',
    title: "Houses",
    component: HousesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
