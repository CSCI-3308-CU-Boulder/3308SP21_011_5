import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMakerComponent } from './post-maker.component';


describe('PostMakerComponent', () => {
  let component: PostMakerComponent;
  let fixture: ComponentFixture<PostMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
