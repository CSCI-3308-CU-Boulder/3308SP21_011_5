import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPostComponent } from './create-new-post.component';

describe('CreateNewPostComponent', () => {
  let component: CreateNewPostComponent;
  let fixture: ComponentFixture<CreateNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
