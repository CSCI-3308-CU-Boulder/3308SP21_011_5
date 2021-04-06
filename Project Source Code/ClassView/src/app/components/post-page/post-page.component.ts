import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  vote(action, id) {
    var voteCount = parseInt((<HTMLInputElement>document.getElementById("vote_"+id)).innerHTML,10);
    if (action == 1) {
      voteCount = voteCount + 1;
    } else {
      voteCount = voteCount - 1;
    }
    (<HTMLInputElement>document.getElementById("vote_"+id)).innerHTML = voteCount.toString();
  }

}