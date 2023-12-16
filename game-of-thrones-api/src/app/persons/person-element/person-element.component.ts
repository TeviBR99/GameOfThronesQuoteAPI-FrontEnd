import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Character } from '../model/character.model';
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
    ) {
  }

  ngOnInit(){
    this.getCharacterInfo();
  }

  getCharacterInfo() {
    if(this.sharedService.getCharacter() != undefined){
      this.sharedService.getCharacterDetail().subscribe((personSaved) => {
        this.personElement = personSaved[0];
      });
    }
  }

  goToQuoteInfo(quote: Quote){
    console.log("goToQuoteInfo")
  }

}


