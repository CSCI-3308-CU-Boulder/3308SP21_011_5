import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/PostModel';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  @Input() data: PostModel[];
  faComments = faComments;

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
