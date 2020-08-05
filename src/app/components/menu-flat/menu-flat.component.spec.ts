import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFlatComponent } from './menu-flat.component';

describe('MenuFlatComponent', () => {
  let component: MenuFlatComponent;
  let fixture: ComponentFixture<MenuFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
