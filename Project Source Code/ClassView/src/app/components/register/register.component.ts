import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  //Manages the password and password verification status.
  nameGood = false;
  emailGood = false;
  passGood = false;
  passVerGood = false;

  //Stores referential class and text for the password strength bar.
  passBarClass = ["passLowBar","passMediumBar","passFairBar","passGreatBar"];
  passLabelClass = ["passLowLabel","passMediumLabel","passFairLabel","passGreatLabel"];
  passLabelWords = ["Poor","Medium","Fair","Great"];
  
  //Local copy of the passwords.
  name: string;
  emailAdd: string;
  password: string;
  verPassword: string;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.email.hasError('email')){
      return 'Not a valid email';
    }
  }

  checkName(input){
    this.name = (<HTMLInputElement>document.getElementById(input)).value;
    this.nameGood = this.name.length > 0;
    this.activateTurnIn();
  }

  checkEmail(input){
    this.emailAdd = (<HTMLInputElement>document.getElementById(input)).value;
    this.emailGood = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailAdd);
    this.activateTurnIn();
  }

  //Checks to see if the password is up to spec. Being of a certain length
 checkPassword(input){
    this.password = (<HTMLInputElement>document.getElementById(input)).value;
    let counter = 0;
    let checklist = {  
      digits: /\d/.test(this.password),  
      lower: /[a-z]/.test(this.password),  
      upper: /[A-Z]/.test(this.password),   
      nonWords: /\W/.test(this.password),  
    };  
    if(this.password.length >= 8){
      counter++;
    }
    for (let check in checklist){
      counter += (checklist[check]) ? 1 : 0; 
    }
    counter = Math.max(counter-2,0);
    let bar = document.getElementById("strengthBar");
    let lab = document.getElementById("strengthLabel");
    bar.classList.remove("hidden","passLowBar","passMediumBar","passFairBar","passGreatBar");
    lab.classList.remove("hidden","passLowLabel","passMediumLabel","passFairLabel","passGreatLabel");
    bar.classList.add(this.passBarClass[counter]);
    lab.innerHTML = this.passLabelWords[counter];
    lab.classList.add(this.passLabelClass[counter]);
    if(counter >= 3){
      this.passGood = true;
    }
    else{
      this.passGood = false;
    }
    this.confirmPassword('passwordConfirmField');
    this.activateTurnIn();
  }

  confirmPassword(input){
    this.verPassword = (<HTMLInputElement>document.getElementById(input)).value;
    this.passVerGood = (this.verPassword == this.password);
    this.activateTurnIn();
  }

  //Handles activation and diactivation of the register button.
  activateTurnIn(){
    //this.emailGood && This does not fully work so I am putting it on the backburner for now. I absolve myself of duties until I find the strength to do this again.
    if(this.passGood && this.passVerGood && this.emailGood && this.nameGood){
      document.getElementById('registerButton').classList.add("found");
      document.getElementById('registerButton').classList.remove("hidden");
      document.getElementById('requirementsText').classList.add("hidden");
      document.getElementById('requirementsText').classList.remove("found");
    }
    else{
      document.getElementById('registerButton').classList.add("hidden");
      document.getElementById('registerButton').classList.remove("found");
      document.getElementById('requirementsText').classList.add("found");
      document.getElementById('requirementsText').classList.remove("hidden");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
