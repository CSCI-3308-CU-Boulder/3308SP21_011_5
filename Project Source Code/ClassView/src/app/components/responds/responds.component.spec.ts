import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondsComponent } from './responds.component';

describe('RespondsComponent', () => {
  let component: RespondsComponent;
  let fixture: ComponentFixture<RespondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
