import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSideBarComponent } from './section-side-bar.component';

describe('SectionSideBarComponent', () => {
  let component: SectionSideBarComponent;
  let fixture: ComponentFixture<SectionSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
