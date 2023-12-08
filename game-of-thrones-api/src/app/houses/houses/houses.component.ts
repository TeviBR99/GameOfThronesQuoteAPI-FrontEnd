import { Component } from '@angular/core';
import { HousesService } from '../service/houses.service';
import { House } from '../model/house.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  displayedColumns: string[] = ['id','name','slug','members'];
  dataFetched: House[] = [];

  constructor(private housesService: HousesService) { }

  ngOnInit(){
    this.getAllHouses();
  }

  getAllHouses():void{
    this.housesService.getHouses().subscribe(
      res =>{
        console.log("JSON: ", res)
        let index = 0;
        res.forEach(item => {
          item.id = index;
          this.dataFetched.push(item)
          index++;
          console.log("Data Feched: " , this.dataFetched)
        })
      }

    )
  }

}


