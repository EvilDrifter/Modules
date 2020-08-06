import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuflatComponent } from './menuflat.component';

describe('MenuflatComponent', () => {
  let component: MenuflatComponent;
  let fixture: ComponentFixture<MenuflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
