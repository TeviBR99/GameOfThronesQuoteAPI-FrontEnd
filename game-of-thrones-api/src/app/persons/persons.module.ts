import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons/persons.component';
import { PersonElementComponent } from './person-element/person-element.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'person-info', component: PersonElementComponent }
]

@NgModule({
  declarations: [
    PersonsComponent,
    PersonElementComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PersonsComponent,
    PersonElementComponent
  ]
})
export class PersonsModule { }
