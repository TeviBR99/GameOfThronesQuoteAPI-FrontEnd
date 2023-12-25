import { FormControl } from "@angular/forms";
import { ApiDto } from "./apidto.model";

export class Filter {
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

  filterByNameOrSlug<T extends ApiDto>( array:T[] ) :T[] {
    let results: T[] = [];
    let matchesWithName: T[] = [];
    let matchesWithSlug: T[] = [];

    if(this.name.value != ""){
      matchesWithName  = array.filter( house => house.name!.toLowerCase().trim().indexOf( this.name.value!.toLowerCase().trim() ) > -1 );
    }

    if(this.slug.value != ""){
      matchesWithSlug = array.filter( house =>  house.slug!.toLowerCase().indexOf( this.slug.value!.toLowerCase().trim() ) > -1);
    }



    return results.concat(matchesWithName,matchesWithSlug) ;
  }



}



