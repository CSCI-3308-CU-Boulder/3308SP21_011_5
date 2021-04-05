import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInNavbarComponent } from './logged-in-navbar.component';

describe('LoggedInNavbarComponent', () => {
  let component: LoggedInNavbarComponent;
  let fixture: ComponentFixture<LoggedInNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Responsive to fields stuff.
  // it('Dropdown button should work with main dropdown button.', () => {
  //   const dpBtn = fixture.debugElement.nativeElement.querySelector('#main-toggler');
  //   const sideNav = fixture.debugElement.nativeElement.querySelector('#sidenav');
  //   dpBtn.click();
  //   expect(voteOption.height).not.toEqual.('0');
  //   dpBtn.click();
  //   expect(voteOption.height).toEqual.('0');
  // });
  // it('Dropdown button should work with sub dropdown button.', () => {
  //   const dpBtn = fixture.debugElement.nativeElement.querySelector('#main-toggler');
  //   const subDpBtn = fixture.debugElement.nativeElement.querySelector('#side-toggler');
  //   const sideNav = fixture.debugElement.nativeElement.querySelector('#sidenav');
  //   dpBtn.click();
  //   expect(voteOption.height).not.toEqual.('0');
  //   subDpBtn.click();
  //   expect(voteOption.height).toEqual.('0');
  // });
});
