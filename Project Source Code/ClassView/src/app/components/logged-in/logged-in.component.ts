import {Component, OnDestroy } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import {PostModel} from 'src/app/models/PostModel'
import {PostService} from 'src/app/shared/post.service'

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService],
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnDestroy {
  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
      console.log(post)
    })
  }

  ngOnDestroy(): void {

  }

  public tools: object = {
    // font size and background color had to be disengaged.
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

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

  handleDropDown(id){
    (<HTMLInputElement>document.getElementById("postDropDown_"+id)).classList.toggle("active");
    (<HTMLInputElement>document.getElementById("replyMaker_"+id)).classList.toggle("active");
  }



  selectAnswer(id,num){
    var children = (<HTMLInputElement>document.getElementById("postDropDown_"+id)).childNodes;
    for(var c = 0; c < children.length; c++){
      var child = (<HTMLInputElement>children[c]);
      if(child.classList.contains("solution") && child.id != "response_"+id+"_"+num){
        child.classList.toggle("solution");
        (<HTMLInputElement>children[c].firstChild.childNodes[1]).classList.toggle("fa-check");
      }
    }
    (<HTMLInputElement>document.getElementById("response_"+id+"_"+num)).classList.toggle("solution");
    (<HTMLInputElement>document.getElementById("check_"+id+"_"+num)).classList.toggle("fa-check");
  }
}
