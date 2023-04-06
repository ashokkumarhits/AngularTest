import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FixedButtonCaptionDirective, MDBBootstrapModule } from 'angular-bootstrap-md';
import { userdata } from 'src/Models/Userdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIangular';
  constructor(private route:Router){}
  username:string="";
  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('login');
  }
}
