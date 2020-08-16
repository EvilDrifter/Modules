import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHouseComponent } from './menu-house.component';

describe('MenuHouseComponent', () => {
  let component: MenuHouseComponent;
  let fixture: ComponentFixture<MenuHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
