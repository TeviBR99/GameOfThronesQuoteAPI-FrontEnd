import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { HouseElementComponent } from './house-element/house-element.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HousesComponent }
];

@NgModule({
  declarations: [
    HousesComponent,
    HouseElementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HousesComponent,
    HouseElementComponent
  ]
})
export class HousesModule { }
