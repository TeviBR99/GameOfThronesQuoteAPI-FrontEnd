import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { PersonElementComponent } from './person-element/person-element.component';



@NgModule({
  declarations: [
    PersonsComponent,
    PersonElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonsComponent,
    PersonElementComponent
  ]
})
export class PersonsModule { }
