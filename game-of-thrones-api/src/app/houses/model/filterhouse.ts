import { FormControl } from "@angular/forms";
import { Filter } from "src/app/shared/model/filter.model";
import { House } from "./house.model";
import { Utils } from "src/app/shared/model/utils";

export class FilterHouse extends Filter{
  member = new FormControl('');

  override clearFilters(): void {
      super.clearFilters();
      this.member.setValue("");
  }

  override checkIfFiltersAreEmpty(): boolean {
      return (super.checkIfFiltersAreEmpty() && this.member.value == "")
  }

  override printFiltersInConsole(): void{
    super.printFiltersInConsole();
    console.log("Member: ", this.member.value);
  }

  filterResults(arrayOfHouses:House[]):House[]{
    let resultsByNameOrSlug: House[]

    resultsByNameOrSlug = super.filterByNameOrSlug(arrayOfHouses);

    if( this.member.value != "" ){
      let matchesWithMembers:House[] = [];

      arrayOfHouses.forEach( h =>{
        let members = h.members.filter( m => m.name?.toLowerCase().trim().includes( this.member.value!.toLowerCase().trim() ) )
        if ( members.length > 0 && !Utils.checkIfExistsInArray( resultsByNameOrSlug, h ) ){
          matchesWithMembers.push( h )
        }
      })
      console.log("matchesWithMembers: ", matchesWithMembers)
      resultsByNameOrSlug =  resultsByNameOrSlug.concat( matchesWithMembers  )
    }

    return resultsByNameOrSlug ;
  }
}

