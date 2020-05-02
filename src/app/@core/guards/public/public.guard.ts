// Angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// rxjs
import { Observable } from 'rxjs';
// Service
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(
    private _authSrv: AuthService,
    private router: Router
    ){ }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._authSrv.isLoggedIn()) return true;
    this.router.navigate(['/home']);
    return false;
  }
  
}
