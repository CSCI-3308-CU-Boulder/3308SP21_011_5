import {Component, OnDestroy } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService],
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnDestroy {
  ngOnDestroy(): void {
   
  }

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
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
  }

  selectAnswer(id,num){
    (<HTMLInputElement>document.getElementById("response_"+id+"_"+num)).classList.toggle("solution");
    (<HTMLInputElement>document.getElementById("check_"+id+"_"+num)).classList.toggle("fa-check");
  }
}
