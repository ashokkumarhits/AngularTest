import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForeignkeyService
 {

  constructor(private http: HttpClient) 
  {}
    getForeignKeyValuesbatches(): Observable<any> {
      return this.http.get('https://localhost:7107/api/Batches');
    };
    getForeignKeyValuescourses(): Observable<any> {
      return this.http.get('https://localhost:7107/api/Courses');
    };
}
