import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { HouseElementComponent } from './house-element/house-element.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'house-info', component: HouseElementComponent }
];

@NgModule({
  declarations: [
    HousesComponent,
    HouseElementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HousesComponent,
    HouseElementComponent
  ]
})
export class HousesModule { }
