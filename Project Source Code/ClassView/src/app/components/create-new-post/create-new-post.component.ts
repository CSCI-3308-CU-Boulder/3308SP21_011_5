import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {
  display: boolean;
  constructor() { 
    this.display= true;
  }

  ngOnInit(): void {
  }

}
