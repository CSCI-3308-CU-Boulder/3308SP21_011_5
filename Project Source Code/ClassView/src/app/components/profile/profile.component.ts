
import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';


export interface UserData{
  username: string;
  email: string;
  created: string;
}

const ELEMENT_DATA: UserData[] = [
  {username: "joij", email: 'John K', created: 'createdDate'},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('Username', {read: ElementRef}) username: ElementRef<HTMLElement>;
  @ViewChild('Email', {read: ElementRef}) email: ElementRef<HTMLElement>;
  @ViewChild('Password', {read: ElementRef}) password: ElementRef<HTMLElement>;
  usernameAutofilled: boolean;
  emailAutofilled: boolean;
  passwordAutofilled: boolean;
  displayedColumns: string[] = ['username','email','created'];
  studentRoster = ELEMENT_DATA;
  url;

  constructor(private _autofill: AutofillMonitor) { }

  ngOnInit(): void {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  delete(){
    document.getElementById('fileInput').innerHTML = "";
    this.url = null;
  }

  ngAfterViewInit() {
    this._autofill.monitor(this.username)
        .subscribe(e => this.usernameAutofilled = e.isAutofilled);
    this._autofill.monitor(this.email)
        .subscribe(e => this.emailAutofilled = e.isAutofilled);
    this._autofill.monitor(this.password)
        .subscribe(e => this.passwordAutofilled = e.isAutofilled);
  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.username);
    this._autofill.stopMonitoring(this.email);
    this._autofill.stopMonitoring(this.password);
  }

  changeColor(){
    const darkness = document.getElementsByClassName('darkMode');
    const lightness = document.getElementsByClassName('lightMode');
    const formElis = document.getElementsByTagName('mat-label');
    var toggler = document.getElementById('LDtoggle');
    if(lightness.length > darkness.length){
      toggler.innerHTML = 'Dark Mode';
      for(let c = 0; c < lightness.length; c++){
        const lux = lightness[c] as HTMLElement;
        lux.classList.add('darkMode');
        lux.classList.remove('lightMode');
      }
      for(let c = 0; c < formElis.length; c++){
        const formEli = formElis[c] as HTMLElement;
        formEli.classList.add('darkMode');
        formEli.classList.remove('lightMode');
      }
    }
    else{
      toggler.innerHTML = 'Light Mode';
      for(let c = 0; c < darkness.length; c++){
        const nyx = darkness[c] as HTMLElement;
        nyx.classList.add('lightMode');
        nyx.classList.remove('darkMode');
      }
      for(let c = 0; c < formElis.length; c++){
        const formEli = formElis[c] as HTMLElement;
        formEli.classList.add('lightMode');
        formEli.classList.remove('darkMode');
      }
    }
  }
}
