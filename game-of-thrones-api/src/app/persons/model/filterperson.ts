import { FormControl } from "@angular/forms";
import { Filter } from "src/app/shared/model/filter.model";
import { Character } from "./character.model";
import { Utils } from "src/app/shared/model/utils";


export class FilterPerson extends Filter {
  quote = new FormControl('');

  filterResults(arrayOfPersons:Character[]):Character[]{
    let dataFiltered: Character[] = []
    let results: Character[] = []
    if(this.quote.value != ""){
      arrayOfPersons.forEach( p =>{
        let resQuotes = p.quotes!.filter(quote => quote.toLowerCase().trim().includes( this.quote!.value!.toLowerCase().trim() ) )
        if( resQuotes.length > 0 ){
          dataFiltered.push( p )
        }
      })
    }
    return Utils.dropRepeatedDataAndMerge( results.concat( super.filterByNameOrSlug(arrayOfPersons), dataFiltered) ) ;
  }


  override checkIfFiltersAreEmpty(): boolean {
    return ( super.checkIfFiltersAreEmpty() && this.quote.value == "" );
  }

  override printFiltersInConsole(): void {
    super.clearFilters()
    console.log("Quote: ", this.quote.value)
  }

  override clearFilters(): void {
    super.clearFilters();
    this.quote.setValue("");
    this.printFiltersInConsole();
  }

}
