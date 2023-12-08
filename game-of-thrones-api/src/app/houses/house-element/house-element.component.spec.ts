import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseElementComponent } from './house-element.component';

describe('HouseElementComponent', () => {
  let component: HouseElementComponent;
  let fixture: ComponentFixture<HouseElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseElementComponent]
    });
    fixture = TestBed.createComponent(HouseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
