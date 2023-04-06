import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { course } from 'src/Models/course';
import { AuthGuard } from './auth.guard';
import { BatchComponent } from './batch/batch.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'batch',component:BatchComponent,canActivate:[AuthGuard]
  },
  {
    path:'course',component:CourseComponent,canActivate:[AuthGuard]
  },
  {
    path:'registration',component:RegistrationComponent,canActivate:[AuthGuard]
  },
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
