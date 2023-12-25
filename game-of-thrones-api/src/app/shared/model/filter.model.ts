import { FormControl } from "@angular/forms";
import { ApiDto } from "./apidto.model";

export class Filter <T extends ApiDto>{
  name = new FormControl('');

  slug = new FormControl('');

  clearFilters():void{
    this.name.setValue("")
    this.slug.setValue("")
  }

  checkIfFiltersAreEmpty():boolean{
    return (this.name.value == "" && this.slug.value == "");
  }

  printFiltersInConsole(): void{
    console.log("Name: ", this.name.value);
    console.log("Slug: ", this.slug.value);
  }

  filterByNameOrSlug( arrayOfHouses:T[] ) :T[] {
    return arrayOfHouses.filter( house => {
      let check = false
      if(this.name.value != ""){
        check = house.name!.toLowerCase().trim().indexOf( this.name.value!.toLowerCase().trim() ) > -1;
      }

      if(this.slug.value != ""){
        check = house.slug!.toLowerCase().indexOf( this.slug.value!.toLowerCase() ) > -1;
      }
      return check;
    } );
  }

}



