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

  filterByNameOrSlug( array:T[] ) :T[] {
    let results: T[] = [];
    let matchesWithName: T[] = [];
    let matchesWithSlug: T[] = [];

    if(this.name.value != ""){
      matchesWithName  = array.filter( house => house.name!.toLowerCase().trim().indexOf( this.name.value!.toLowerCase().trim() ) > -1 );
      console.log("machesWithName: ", matchesWithName)
      //results = results.concat( matchesWithName );
    }

    if(this.slug.value != ""){
      matchesWithSlug = array.filter( house =>  house.slug!.toLowerCase().indexOf( this.slug.value!.toLowerCase().trim() ) > -1);
      console.log("matchesWithSlug: ", matchesWithSlug)
    }

    return results.concat(matchesWithName,matchesWithSlug) ;
  }

  eraseRepetedElements(array:T[] ):T[]{
    let arrayWithoutRepetaedElements : T[] = [];

    arrayWithoutRepetaedElements = array;
    if( array.length > 1){
      arrayWithoutRepetaedElements = [];
      array.sort( (a,b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0 ) );
      for(let i=1; i<array.length; i++){
        if( array.at( i-1 )!.name == array.at(i)!.name){
          arrayWithoutRepetaedElements.push( array[i-1] )
        }
      }
    }

    return arrayWithoutRepetaedElements;
  }

}



