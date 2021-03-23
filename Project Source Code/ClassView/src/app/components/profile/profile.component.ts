
import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';


export interface UserData{
  id: number;
  name: string;
  activity: number;
  status: string;
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'John K', activity: 4, status: 'Active.'},
  {id: 2, name: 'Omar D', activity: 4, status: 'Active.'},
  {id: 3, name: 'Connor L', activity: 2, status: 'Active.'},
  {id: 4, name: 'Matt Z', activity: 3, status: 'Active.'},
  {id: 5, name: 'Carol C', activity: 2, status: 'Active.'},
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
  displayedColumns: string[] = ['id','name','activity','status'];
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

  //Deletes the file selected for image save.
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


  //Changes the color for light and dark mode.
  changeColor(){
    //Searches for all elements with the modeToggler Class.
    const eli = document.getElementsByClassName("modeToggler");
    let allLight = true;
    //Checks to see if there are elements with this class and then finds out if it needs to be set to light
    //or dark mode and then toggles the text within the mode selector.
    if(eli.length > 0){
      allLight = eli[0].classList.contains("lightMode") == true;
      if(allLight){
        document.getElementById("LDtoggle").innerHTML = "Dark Mode";
      }
      else{
        document.getElementById("LDtoggle").innerHTML = "Light Mode";
      }
    }
    //Iterates over all found elements with modeToggler class and depending on if it was on lightMode before or not and
    //changes its class to contain light or dark mode.
    for(let c = 0; c < eli.length; c++){
      const bit = eli[c] as HTMLElement;
      if(allLight){
        bit.classList.remove("lightMode");
        bit.classList.add("darkMode");
      }
      else{
        bit.classList.remove("darkMode");
        bit.classList.add("lightMode");
      }
    }
  }
}
