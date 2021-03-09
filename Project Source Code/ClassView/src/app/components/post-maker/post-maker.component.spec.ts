import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostMakerComponent } from './post-maker.component';

<<<<<<< HEAD:Project Source Code/ClassView/src/app/components/setting/setting.component.spec.ts
import { SettingComponent } from './setting.component';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingComponent ]
=======
describe('PostMakerComponent', () => {
  let component: PostMakerComponent;
  let fixture: ComponentFixture<PostMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMakerComponent ]
>>>>>>> main:Project Source Code/ClassView/src/app/components/post-maker/post-maker.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:Project Source Code/ClassView/src/app/components/setting/setting.component.spec.ts
    fixture = TestBed.createComponent(SettingComponent);
=======
    fixture = TestBed.createComponent(PostMakerComponent);
>>>>>>> main:Project Source Code/ClassView/src/app/components/post-maker/post-maker.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
