import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  //Manages the password and password verification status.
  passGood = false;
  passVerGood = false;
  emailGood = false;

  //Stores referential class and text for the password strength bar.
  passBarClass = ["passLowBar","passMediumBar","passFairBar","passGreatBar"];
  passLabelClass = ["passLowLabel","passMediumLabel","passFairLabel","passGreatLabel"];
  passLabelWords = ["Poor","Medium","Fair","Great"];
  
  //Local copy of the passwords.
  password: string;
  verPassword: string;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      if(!this.email.hasError('email')){
        this.emailGood = true;
        this.activateTurnIn();
        return '';
      }
      this.emailGood = false;
      this.activateTurnIn();
      return 'You must enter a value';
    }
    if(this.email.hasError('email')){
      this.emailGood = false;
      this.activateTurnIn();
      return 'Not a valid email';
    }
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
    if(this.passGood && this.passVerGood && this.emailGood){
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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
