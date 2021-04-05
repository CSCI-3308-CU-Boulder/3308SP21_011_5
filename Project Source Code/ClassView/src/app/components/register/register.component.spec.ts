import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Responsive to fields stuff.
  // it('Check to see if registration works with ideal inputs as of requirements of 3/30/21.', () => {
  //   const name = fixture.debugElement.nativeElement.querySelector('#nameField');
  //   const email = fixture.debugElement.nativeElement.querySelector('#emailField');
  //   const password = fixture.debugElement.nativeElement.querySelector('#passwordField');
  //   const passConf = fixture.debugElement.nativeElement.querySelector('#passwordConfirmField');
  //   const btn = fixture.debugElement.nativeElement.querySelector('#registerButton');
  //   name.innerHTML = "alice bean";
  //   email.innerHTML = "AB@email.com";
  //   password.innerHTML = "P@ssw0rd";
  //   passConf.innerHTML = "P@ssw0rd";
  //   expect(btn.display).toEqual.('block');
  // });
  // it('Check to see if registration works with missing name.', () => {
  //   const name = fixture.debugElement.nativeElement.querySelector('#nameField');
  //   const email = fixture.debugElement.nativeElement.querySelector('#emailField');
  //   const password = fixture.debugElement.nativeElement.querySelector('#passwordField');
  //   const passConf = fixture.debugElement.nativeElement.querySelector('#passwordConfirmField');
  //   const btn = fixture.debugElement.nativeElement.querySelector('#registerButton');
  //   name.innerHTML = "";
  //   email.innerHTML = "AB@email.com";
  //   password.innerHTML = "P@ssw0rd";
  //   passConf.innerHTML = "P@ssw0rd";
  //   expect(btn.display).not.toEqual.('block');
  // });
  // });
  // it('Check to see if registration works with missing email and invalid email.', () => {
  //   const name = fixture.debugElement.nativeElement.querySelector('#nameField');
  //   const email = fixture.debugElement.nativeElement.querySelector('#emailField');
  //   const password = fixture.debugElement.nativeElement.querySelector('#passwordField');
  //   const passConf = fixture.debugElement.nativeElement.querySelector('#passwordConfirmField');
  //   const btn = fixture.debugElement.nativeElement.querySelector('#registerButton');
  //   name.innerHTML = "alice bean";
  //   email.innerHTML = "";
  //   password.innerHTML = "P@ssw0rd";
  //   passConf.innerHTML = "P@ssw0rd";
  //   expect(btn.display).not.toEqual.('block');
  //   name.innerHTML = "alice bean";
  //   email.innerHTML = "AB@email.com@@";
  //   password.innerHTML = "P@ssw0rd";
  //   passConf.innerHTML = "P@ssw0rd";
  //   expect(btn.display).not.toEqual.('block');
  // });
  // it('Check to see if registration works with invalid password and variations with invalid confirm password.', () => {
  //   const name = fixture.debugElement.nativeElement.querySelector('#nameField');
  //   const email = fixture.debugElement.nativeElement.querySelector('#emailField');
  //   const password = fixture.debugElement.nativeElement.querySelector('#passwordField');
  //   const passConf = fixture.debugElement.nativeElement.querySelector('#passwordConfirmField');
  //   const btn = fixture.debugElement.nativeElement.querySelector('#registerButton');
  //   name.innerHTML = "alice bean";
  //   email.innerHTML = "AB@email.com";
  //   password.innerHTML = "p@ssw0rd";
  //   passConf.innerHTML = "p@ssw0rd";
  //   expect(btn.display).not.toEqual.('block');
  //   password.innerHTML = "P@ssw0r";
  //   passConf.innerHTML = "P@ssw0r";
  //   expect(btn.display).not.toEqual.('block');
  //   password.innerHTML = "P@ssword";
  //   passConf.innerHTML = "P@ssword";
  //   expect(btn.display).not.toEqual.('block');
  //   password.innerHTML = "Passw0rd";
  //   passConf.innerHTML = "Passw0rd";
  //   expect(btn.display).not.toEqual.('block');
  //   password.innerHTML = "P@ssw0rd";
  //   passConf.innerHTML = "P@ssw0rda";
  //   expect(btn.display).not.toEqual.('block');
  //   password.innerHTML = "P@ssw0rda";
  //   passConf.innerHTML = "P@ssw0rd";
  //   expect(btn.display).not.toEqual.('block');
  // });
});
