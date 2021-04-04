import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/shared/section.service';
import { throwError } from 'rxjs';
import { SectionModel } from 'src/app/models/SectionModel';

@Component({
  selector: 'app-list-sections',
  templateUrl: './list-sections.component.html',
  styleUrls: ['./list-sections.component.css']
})
export class ListSectionsComponent implements OnInit {

  sections: Array<SectionModel>;
  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.sectionService.getAllSections().subscribe(data => {
      this.sections = data;
    }, error => {
      throwError(error);
    })
  }

}
