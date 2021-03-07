import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-post-maker',
  templateUrl: './post-maker.component.html',    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService],
  styleUrls: ['./post-maker.component.css']
})
export class PostMakerComponent implements OnInit {

  constructor() { }
  public tools: object = {
  items: [
    'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
    'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
    'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
    'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
    'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };
  ngOnInit(): void {
  }

}
