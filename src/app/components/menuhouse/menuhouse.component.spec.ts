import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhouseComponent } from './menuhouse.component';

describe('MenuhouseComponent', () => {
  let component: MenuhouseComponent;
  let fixture: ComponentFixture<MenuhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
