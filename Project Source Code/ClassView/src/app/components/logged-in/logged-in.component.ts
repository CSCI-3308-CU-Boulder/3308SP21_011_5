import {Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnDestroy {
  ngOnDestroy(): void {
   
  }

  
  upVote(id){
    var voteCount = parseInt((<HTMLInputElement>document.getElementById("postVoteLabel_"+id)).innerHTML,10);
    voteCount = isNaN(voteCount) ? 0 : voteCount;
    voteCount++;
    (<HTMLInputElement>document.getElementById("postVoteLabel_"+id)).innerHTML = voteCount.toString();
  }

  downVote(id){
    var voteCount = parseInt((<HTMLInputElement>document.getElementById("postVoteLabel_"+id)).innerHTML,10);
    voteCount = isNaN(voteCount) ? 0 : voteCount;
    voteCount--;
    (<HTMLInputElement>document.getElementById("postVoteLabel_"+id)).innerHTML = voteCount.toString();
  }
}
