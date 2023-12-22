import { FormControl } from "@angular/forms";

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
}


export class FilterHouse extends Filter{
  member = new FormControl('');

  override clearFilters(): void {
      super.clearFilters();
      this.member.setValue("");
  }

  override checkIfFiltersAreEmpty(): boolean {
      return (super.checkIfFiltersAreEmpty() && this.member.value == "")
  }

}
