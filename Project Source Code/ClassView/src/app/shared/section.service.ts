import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectionModel } from 'src/app/models/SectionModel';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  constructor(private http: HttpClient) { }

  getAllSections(): Observable<Array<SectionModel>> {
    return this.http.get<Array<SectionModel>>('http://localhost:8080/api/section');
  }

  createSection(sectionModel: SectionModel): Observable<SectionModel> {
    return this.http.post<SectionModel>('http://localhost:8080/api/section',
      sectionModel);
  }
}
