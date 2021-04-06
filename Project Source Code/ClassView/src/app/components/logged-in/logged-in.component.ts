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
    // font size and background color had to be disengaged.
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

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