import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Character } from '../model/character.model';
import { PersonsService } from '../service/persons.service';
import { Quote } from 'src/app/quotes/model/quote.model';
import { Observable } from 'rxjs';

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
    private cdr: ChangeDetectorRef,
    ) {
  }

  ngOnInit(){
    this.getCharacterInfo();
  }

  getCharacterInfo() {
    this.sharedService.getCharacter().subscribe((personSaved) => {
      console.log("personSaved:", personSaved);
      this.personElement = personSaved;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
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


