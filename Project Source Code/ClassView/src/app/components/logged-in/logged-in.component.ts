import {Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import {PostModel} from 'src/app/models/PostModel'
import {PostService} from 'src/app/shared/post.service'

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService],
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {
  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts$ = post;
    });
  }

  ngOnInit(): void {
  }
}
