import { Component, OnInit } from '@angular/core';
import { batch } from 'src/Models/batch';
import { BatchService } from '../SERVICE/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit
{
  batch:batch[]=[];
  batchdetails:batch=
  {
    id:0,
    batch1:"" ,
    year:""
  };
  msg:string="";
  u_msg:string="";
  d_msg:string="";
  e_msg:string=null;

  flag_get:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;

  update_id:number=0;
  delete_id:number=0;
  constructor(private obj:BatchService){}
  ngOnInit(): void {
    this.reset_vars();
  }
  get_api():void
  {
    
    this.obj.getallbatch().subscribe(data=>{
      this.batch=data;
      this.msg="Successfully created"+data;
      this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.batch);
    });
  }

  post_api(data:batch):void
  {
    console.log(data);
    this.obj.Addbatch(data).subscribe(d=>{
     this.msg="Successfully created "+d;
    //Logging the response received from web api.
    // console.log(data);
    },
    error => console.log(error))
  }

  put_api(id:number,data:batch):void
  {
    
    this.obj.editbatch(id,data).subscribe(data=>{
      this.u_msg="Successfully updated batch with id:"+id;
      console.log(data);
    })
   

  }

  delete_api(id:number):void
  {
    this.obj.deletebatch(id).subscribe(data=>{
        this.d_msg="Successfully deleted batch  "+id;

    },
   error=> {
    this.e_msg=error.error;
    });
    this.ngOnInit();
    
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

  reset_vars():void{
    this.d_msg = null;
  }
}
