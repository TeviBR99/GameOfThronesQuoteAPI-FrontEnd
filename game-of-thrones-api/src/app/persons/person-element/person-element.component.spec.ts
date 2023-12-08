import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonElementComponent } from './person-element.component';

describe('PersonElementComponent', () => {
  let component: PersonElementComponent;
  let fixture: ComponentFixture<PersonElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonElementComponent]
    });
    fixture = TestBed.createComponent(PersonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
