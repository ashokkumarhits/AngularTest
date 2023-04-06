import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userdata } from 'src/Models/Userdata';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  req:string="https://localhost:7107/api/Userdatum/";
  getAllUsers():Observable<userdata[]>{
    return this.http.get<userdata[]>(this.req);
  }
  getCustomerById(id:number):Observable<any>
{
  return this.http.get<any>(this.req+"/"+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}
getCustomerDetailsById(username: string, password: string): Observable<userdata> {
  return this.http.get<userdata>(`${this.req}?username=${username}&password=${password}`);
}
IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

}