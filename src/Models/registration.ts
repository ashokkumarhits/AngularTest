import { batch } from "./batch";

export class Registration
{
    id:number=0;
    firstname:string="";
    lastname:string="";
    nic:string="";
    courseId:string="";
    batchId?:batch;
    telno:string="";
}