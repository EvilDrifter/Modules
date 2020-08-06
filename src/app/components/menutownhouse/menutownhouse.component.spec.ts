import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutownhouseComponent } from './menutownhouse.component';

describe('MenutownhouseComponent', () => {
  let component: MenutownhouseComponent;
  let fixture: ComponentFixture<MenutownhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutownhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutownhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
