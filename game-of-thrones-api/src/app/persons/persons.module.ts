import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { PersonElementComponent } from './person-element/person-element.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonsComponent }
]

@NgModule({
  declarations: [
    PersonsComponent,
    PersonElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PersonsComponent,
    PersonElementComponent
  ]
})
export class PersonsModule { }
