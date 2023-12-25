import { FormControl } from "@angular/forms";
import { ApiDto } from "src/app/shared/model/apidto.model";
import { Filter } from "src/app/shared/model/filter.model";

export class FilterPerson extends Filter {
  quote = new FormControl('');

  override clearFilters(): void {
    super.clearFilters();
    this.quote.setValue("");
  }

  override printFiltersInConsole(): void {
    super.clearFilters()
    console.log("Quote: ", this.quote.value)
  }

  override checkIfFiltersAreEmpty(): boolean {
      return ( super.checkIfFiltersAreEmpty() && this.quote.value == "" );
  }

}
