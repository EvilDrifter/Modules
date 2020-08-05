import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTownhouseComponent } from './menu-townhouse.component';

describe('MenuTownhouseComponent', () => {
  let component: MenuTownhouseComponent;
  let fixture: ComponentFixture<MenuTownhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTownhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTownhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
