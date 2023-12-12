import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Character } from '../model/character.model';
import { PersonsService } from '../service/persons.service';
import { Quote } from 'src/app/quotes/model/quote.model';

@Component({
  selector: 'app-person-element',
  templateUrl: './person-element.component.html',
  styleUrls: ['./person-element.component.scss']
})
export class PersonElementComponent {

  personElement : Character = new Character();

  constructor(
    private sharedService: SharedService,
    private personsService: PersonsService,
    private cdr: ChangeDetectorRef
    ) {
  }

  ngOnInit(){
    this.getCharacterInfo();
  }

  getCharacterInfo(){
    let personSource = this.sharedService.getCharacter();
    if( personSource != null){
      console.log("personSource: ", personSource)
      this.personsService.getCharacterBySlug(personSource.slug).subscribe(
        (resPersonService:Character): void => {
          console.log("resPersonService: ", resPersonService)
          this.personElement = resPersonService;
      },
      error => {},
      () =>{
        console.log("PersonEl: ", this.personElement)
        this.updateView()
      })
    }

  }

  describeQuote(quote: Quote){
    return "- " + quote.sentence;
  }

  goToQuoteInfo(quote: Quote){
    console.log("goToQuoteInfo")
  }

  updateView(){
    this.cdr.detectChanges();
  }





}


