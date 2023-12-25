import { FormControl } from "@angular/forms";
import { Filter } from "src/app/shared/model/filter.model";
import { Character } from "./character.model";
import { Utils } from "src/app/shared/model/utils";

export class FilterPerson extends Filter {
  quote = new FormControl('');

  filterResults(arrayOfPersons:Character[]):Character[]{
    let dataFiltered: Character[] = this.quote.value == "" ? super.filterByNameOrSlug(arrayOfPersons) : [];
    if(this.quote.value != ""){
      arrayOfPersons.forEach( p =>{
        let resQuotes = []
        resQuotes = p.quotes!.filter(quote => quote.sentence.toLowerCase().trim().includes( this.quote.value! )  )
        if(resQuotes!.length > 0 && Utils.checkIfExistsInArray(dataFiltered,p) ){
          dataFiltered.push( p )
        }
      })
    }
    return dataFiltered;
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
