import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { HouseElementComponent } from './house-element/house-element.component';



@NgModule({
  declarations: [
    HousesComponent,
    HouseElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HousesComponent,
    HouseElementComponent
  ]
})
export class HousesModule { }
