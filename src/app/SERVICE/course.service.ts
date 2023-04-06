import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { course } from 'src/Models/course';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CourseService 
{
  readonly rooturl="https://localhost:7107/api";
  crs:course[]=[];
  constructor(private http:HttpClient) {}
 getallCourse():Observable<course[]>
   {
   // this.http.get(this.rooturl+'/Emps')
    //.toPromise().then(res=>this.emps=res as Emp[]);
    return this.http.get<course[]>(this.rooturl+'/Courses');
   }
 deleteCourse(Cid:number)
{
  const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Method':'*'}) };
   return this.http.delete('https://localhost:7107/api/Courses/'+Cid);
}
 AddCourse(C1:course)
{
 const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
 'Access-Control-Allow-Method':'*'}) };
  return this.http.post('https://localhost:7107/api/Courses',C1,httpHeaders);
}
 editCourse(C1:number,data:any)
{
  console.log(C1);
  data.id=C1;
  console.log(data);
  
  const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Method':'*'}) };

  return this.http.put('https://localhost:7107/api/Courses/'+C1,data,httpHeaders);
}
 getCoursebyId(Cid:number):Observable<course>  
{
 return this.http.get<course>('https:localhost:7107/api'+'/Courses/'+Cid);
}
register():Observable<any>
{
  //Giving incorrect URL.
  return this.http.get<any>('https://localhost:7107/api/Courses')
         .pipe(catchError(this.manageError));
}
private manageError(err_response:HttpErrorResponse)
{
  if(err_response.error instanceof ErrorEvent)
  console.error('Client Side Error:',err_response.error.message);
  else
  console.error('Server Side Error:',err_response);

  return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
  
}

}
