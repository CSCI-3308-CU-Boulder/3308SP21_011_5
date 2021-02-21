
import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';

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

  constructor(private _autofill: AutofillMonitor) { }

  ngOnInit(): void {
  }

  url;

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
    this.url = '';
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
}
