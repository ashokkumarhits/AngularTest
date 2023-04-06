import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { userdata } from 'src/Models/Userdata';
import { UserdataService } from '../SERVICE/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userform:FormGroup=new FormGroup({})
users:userdata[]=[];
username:string="";
password:string="";
 user:userdata=
 {
    id:0,
    firstname:"",
    lastname:"",
    username:"",
    password:"",
 };
 errormsg=""
 token:string="";
 use:any;
 flag_get=false;
 flag=false;
 constructor(private obj:UserdataService,private route:Router){}
 ngOnInit():void
 {
  this.userform=new FormGroup({
    username:new FormControl(this.user.username,[Validators.required]),
    password:new FormControl(this.user.password,[Validators.required])
  })
 }
 SaveToken()
  {
    localStorage.setItem("token",this.token);
  }
  
  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/Login');
  }

  getToken()
  {
    return localStorage.getItem("token")||'';
  }

  login():void
  {
    let currentuser={"username":this.userform.value.username,"password":this.userform.value.password}
    this.obj.getAllUsers().subscribe(data=>{
      this.users=data;
      this.flag_get=true;
      this.SaveToken();
      console.log(this.token);
      console.log(this.users);
      console.log(currentuser.username);
      this.use=this.users.filter(x=>x.username==currentuser.username&&x.password==currentuser.password);
      console.log(this.use);
      if(this.use.length>0)
      {
        localStorage.setItem("id",this.use[0].id+"");
        this.flag=true;
         this.token="validuser";
      }
      console.log(this.token);
      if(this.token!="")
      {
        
        console.log("Entered tokennn");
        localStorage.setItem("token",this.token);
        localStorage.setItem("username",this.username);
        this.route.navigateByUrl('home');  

      }
      else{
        
        this.errormsg="Invalid username/password";
        localStorage.clear();
        console.log(this.errormsg);
        this.route.navigateByUrl('login');
      }
      console.log(this.errormsg);
      console.log(this.flag);

    },
    // error => {
    //   this.errormsg="Credentials Incorrect";
    //     console.log(this.errormsg);
    //     this.route.navigateByUrl('login');
    // }
    )
  }

}
