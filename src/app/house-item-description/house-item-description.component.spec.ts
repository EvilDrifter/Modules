import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseItemDescriptionComponent } from './house-item-description.component';

describe('HouseItemDescriptionComponent', () => {
  let component: HouseItemDescriptionComponent;
  let fixture: ComponentFixture<HouseItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
