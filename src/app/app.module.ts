import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule ,} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BatchComponent } from './batch/batch.component';
import { CourseComponent } from './course/course.component';
import { RegistrationComponent } from './registration/registration.component';

//mdb stuff
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component'; // If You need animations


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BatchComponent,
    CourseComponent,
    RegistrationComponent,
    HomeComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
ReactiveFormsModule,
MDBBootstrapModule.forRoot(),
BrowserAnimationsModule
 

   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  
 }
