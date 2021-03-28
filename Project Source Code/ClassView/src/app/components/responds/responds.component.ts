import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responds',
  templateUrl: './responds.component.html',
  styleUrls: ['./responds.component.css']
})
export class RespondsComponent implements OnInit {

  response ="";
  postResponse = [];

  post(){
    this.postResponse.push(this.response);
    this.response= "";
  }
  constructor() {}
  ngOnInit(): void {
  }

}
