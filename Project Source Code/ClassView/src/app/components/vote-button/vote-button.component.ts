import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/PostModel';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor() {
  }


  ngOnInit() {

  }

}
