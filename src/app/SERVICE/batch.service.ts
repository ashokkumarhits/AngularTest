import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { batch } from 'src/Models/batch';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  
    readonly rooturl="https://localhost:7107/api";
    crs:batch[]=[];
    constructor(private http:HttpClient) {}
   getallbatch():Observable<batch[]>
     {
     // this.http.get(this.rooturl+'/Emps')
      //.toPromise().then(res=>this.emps=res as Emp[]);
      return this.http.get<batch[]>(this.rooturl+'/Batches');
     }
   deletebatch(Cid:number)
  {
    const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'}) };
     return this.http.delete('https://localhost:7107/api/Batches/'+Cid).pipe(catchError(
      err => {
        console.log(err);
        return throwError (err);
      }));
  }

   Addbatch(C1:batch)
  {
    console.log(C1);
    // var newC1: batch = {
    //   id: 0,
    //   batch1: C1.batch1,
    //   year: C1.year+""
    // }
    // console.log(newC1);
   const headers = {'Content-Type': 'application/json'};
   const body = JSON.stringify(C1);
    return this.http.post('https://localhost:7107/api/Batches',body,{'headers':headers}).pipe(
      catchError( error => {
        console.log(error);
        return error;
      }
    ));
  }

   editbatch(C1:number,data:any)
  {
    console.log(C1);
    data.id=C1;
    console.log(data);
    
    const httpHeaders = {headers:new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Method':'*'}) };

    return this.http.put('https://localhost:7107/api/Batches/'+C1,data,httpHeaders);
  }
   getbatchbyId(Cid:number):Observable<batch>  
  {
   return this.http.get<batch>('https:localhost:7107/api'+'/Batches/'+Cid);
  }
  register():Observable<any>
  {
    //Giving incorrect URL.
    return this.http.get<any>('https://localhost:7107/api/Batches')
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
