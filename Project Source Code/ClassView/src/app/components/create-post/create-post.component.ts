import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SectionModel } from 'src/app/models/SectionModel';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SectionService } from 'src/app/shared/section.service';
import { CreatePostPayload } from './CreatePostPayload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  sections: Array<SectionModel>;

  constructor(private router: Router, private postService: PostService,
    private sectionService: SectionService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      sectionName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      sectionName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.sectionService.getAllSections().subscribe((data) => {
      this.sections = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.sectionName = this.createPostForm.get('sectionName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
