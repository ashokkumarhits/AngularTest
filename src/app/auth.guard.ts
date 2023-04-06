import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdataService } from './SERVICE/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private obj: UserdataService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      if (this.obj.IsLoggedIn() == true)
      {
        return true;
      }
      else
      {
    
      // this.route.navigate(['login']);
      this.route.navigateByUrl('login');
      return false;
      }
    }
  }

}
