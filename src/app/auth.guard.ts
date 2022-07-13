import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private loginService:LoginService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    if(this.loginService.loggedIn()){
      return true;
    }
    else{
      window.alert("Login to proceed !!!!!");
      this.router.navigate(['/']);
        return false;
    }
  }
}

  

