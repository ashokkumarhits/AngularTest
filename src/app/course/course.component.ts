import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { CourseService } from '../SERVICE/course.service';
import { course } from 'src/Models/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit
{
    //Array to store the player objects.
  Courses:course[]=[];

  //Player object to be used in forms.
  CourseDetails:course={
   id:0,
   course1:"",
   duration:0
  };
  
  //Other required variables.
  msg:string="";
  u_msg:string="";
  d_msg:string="";
  e_msg:string="";

  flag_get:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;

  update_id:number=0;
  delete_id:number=0;

  //Injecting Player service inside this component.
  constructor(private obj:CourseService)
  {

  }

  ngOnInit(): void {
  }
  
  get_api():void
  {
    this.obj.getallCourse().subscribe(data=>{
      this.Courses=data;
      this.msg="Successfully created"
      this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.Courses);
    });
  }

  post_api(data:course):void
  {
    this.obj.AddCourse(data).subscribe(data=>{
     this.msg="Successfully created "+data;
    //Logging the response received from web api.
    console.log(data);
    })
  }

  put_api(id:number,data:course):void
  {
    {{debugger}}
    this.obj.editCourse(id,data).subscribe(data=>{
      this.u_msg="Successfully updated course with id:"+id;
      console.log(data);
    })
   

  }

  delete_api(id:number):void
  {
    this.obj.deleteCourse(id).subscribe(data=>{
      this.d_msg="Successfully deleted course  "+id;
      console.log(data);
    })
    
  }

  error_api():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=true;

    this.obj.register().subscribe((data)=>{
    console.log(data);
    },
    (error)=>{
    this.e_msg=error;
    }
    );
  }

  btn_post():void
  {
    this.flag_get=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=false;
  }
  
  btn_put():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_delete=false;
    this.flag_register=false;
  }

  btn_delete():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=true;
    this.flag_register=false;
  }


}
