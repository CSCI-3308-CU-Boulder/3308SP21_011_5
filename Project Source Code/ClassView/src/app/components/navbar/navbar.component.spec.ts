import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
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
