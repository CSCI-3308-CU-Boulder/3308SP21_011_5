import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInComponent } from './logged-in.component';

describe('LoggedInComponent', () => {
  let component: LoggedInComponent;
  let fixture: ComponentFixture<LoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Basic stuff.
  // it('clicking the up vote button does something', () => {
  //   const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
  //   const votOption = fixture.debugElement.nativeElement.querySelector('vote_0');
  //   expect(btn.innerHTML).toBe('Yes');
  // });
  //Responsive to fields stuff.
  // it('should set userResponse when up vote button is clicked', () => {
  //   const btn = fixture.debugElement.nativeElement.querySelector('#votebtnU_0');
  //   const voteOption = fixture.debugElement.nativeElement.querySelector('vote_0');
  //   btn.click();
  //   expect(voteOption.innerHTML).toBe('1');
  // });
  // it('should set userResponse when down vote button is clicked', () => {
  //   const btn = fixture.debugElement.nativeElement.querySelector('#votebtnD_0');
  //   const voteOption = fixture.debugElement.nativeElement.querySelector('vote_0');
  //   btn.click();
  //   expect(voteOption.innerHTML).toBe('-1');
  // });
});
