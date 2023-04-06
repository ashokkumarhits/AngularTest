import { Component } from '@angular/core';
import { CourseService } from '../SERVICE/course.service';
import { course } from 'src/Models/course';
import { BatchService } from '../SERVICE/batch.service';
import { Registration } from 'src/Models/registration';
import { RegistrationService } from '../SERVICE/registration.service';
import { ForeignkeyService } from '../SERVICE/foreignkey.service';
import { Data } from '@angular/router';
import { batch } from 'src/Models/batch';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent
 {
  reg:Registration[]=[]
  registrations:Registration=
  {
    id:0,
    firstname:"",
    lastname:"",
    nic:"",
    courseId:"",
    //batchId:,
    telno:""
  }
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

selectedForeignKeyValue: any;
foreignKeyValues:any;
foreignKeyValues1:any;


//Injecting Player service inside this component.
constructor(private obj:RegistrationService,b:BatchService,c:CourseService,private foreignKeyService:ForeignkeyService)
{

}

get_api():void
{
  this.obj.getallRegistration().subscribe(data=>{
    this.reg=data;
    this.msg="Successfully created"
    this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
    //Logging the response recieved from web api.
    console.log(this.reg);
  });
}


ngOnInit(): void 
{
  
  this.foreignKeyService.getForeignKeyValuesbatches().subscribe(values => {
  this.foreignKeyValues = values;
  console.log(values);
});
this.foreignKeyService.getForeignKeyValuescourses().subscribe(values1=>{
  this.foreignKeyValues1=values1;
  console.log(values1);
});

};

selectchange1($event)
{
  this.registrations.courseId=this.foreignKeyService[$event];
}
selectchange($event)
{
  this.registrations.batchId=this.foreignKeyService[$event];
}


post_api(data:Registration):void
{
  data.batchId=this.registrations.batchId
  {debugger}
  this.obj.AddRegistration(data).subscribe(data=>{
   this.msg="Successfully created "+data;
  //Logging the response received from web api.
  console.log(data);
  })
}

put_api(id:number,data:Registration):void
{
  {{debugger}}
  this.obj.editRegistration(id,data).subscribe(data=>{
    this.u_msg="Successfully updated course with id:"+id;
    console.log(data);
  })
}

delete_api(id:number):void
{
  this.obj.deleteRegistration(id).subscribe(data=>{
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
