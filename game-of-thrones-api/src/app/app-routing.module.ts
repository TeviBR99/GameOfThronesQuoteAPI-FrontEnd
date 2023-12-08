import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'houses', loadChildren: () => import('./houses/houses.module').then(m => m.HousesModule) },
  { path: 'quotes', loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'persons', loadChildren: () => import('./persons/persons.module').then(m => m.PersonsModule) },
  {  path: '', redirectTo: '/houses', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
