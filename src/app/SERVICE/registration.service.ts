import { Injectable } from '@angular/core';
import { Registration } from 'src/Models/registration';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root' 
})
export class RegistrationService
 {
  constructor(private http:HttpClient) { }
  readonly rooturl="https://localhost:7107/api";
    crs:Registration[]=[];
   getallRegistration():Observable<Registration[]>
     {
     // this.http.get(this.rooturl+'/Emps')
      //.toPromise().then(res=>this.emps=res as Emp[]);
      return this.http.get<Registration[]>(this.rooturl+'/Registration');
     }
   deleteRegistration(Cid:number)
  {
    const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'}) };
     return this.http.delete('https://localhost:7107/api/Registration/'+Cid);
  }
   AddRegistration(C1:Registration)
  {
    console.log(C1);
   const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
   'Access-Control-Allow-Method':'*'}) };
    return this.http.post('https://localhost:7107/api/Registration',C1,httpHeaders);
  }
   editRegistration(C1:number,data:any)
  {
    console.log(C1);
    data.id=C1;
    console.log(data);
    
    const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'}) };

    return this.http.put('https://localhost:7107/api/Registration/'+C1,data,httpHeaders);
  }
   getRegistrationbyId(Cid:number):Observable<Registration>  
  {
   return this.http.get<Registration>('https:localhost:7107/api'+'/Registration/'+Cid);
  }
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:7107/api/Registration')
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
