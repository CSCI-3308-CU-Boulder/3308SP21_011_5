import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/PostModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-sidebar',
  templateUrl: './post-sidebar.component.html',
  styleUrls: ['./post-sidebar.component.css']
})
export class PostSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() data: PostModel[];

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  ngOnInit(): void {
  }

}
