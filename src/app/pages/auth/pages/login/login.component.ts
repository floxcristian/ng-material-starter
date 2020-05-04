// https://stackblitz.com/edit/angular-material-password-visibility-toggle?file=src%2Fapp%2Fapp.component.ts
// https://material.angular.io/components/form-field/overview#prefix-amp-suffix

// Angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Third-party
import { LocalStorageService } from 'ngx-webstorage';
// Material
import { MatDialog } from '@angular/material/dialog';
// Services
import { AuthService } from 'src/app/@core/services/auth/auth.service';

import { LoginErrorModalComponent } from '../login-error-modal/login-error-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide: boolean = true;

  constructor(
    private router: Router,
    private _authSrv: AuthService,
    public dialog: MatDialog,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  toggleButton(event){
    console.log("event: ", event)
    this.hide = !this.hide;
    
    //this.tooltip.hide()
    // if (event.checked) this.type = 'password';
    // else this.type = 'text';
  }


  getErrorMessageForUsername(){
    const hasError = this.username.hasError('required');
    return hasError ? 'nombre de usuario es requerido' : '';
  }

  getErrorMessageForPassword(){
    const hasError = this.password.hasError('required');
    return hasError ? 'password es requerido' : '';
  }

  onSubmit(event){
    //event.preventDefault();
    //console.log(event);
    this.router.navigate(['/dskjfdfk']);
    
    /*
    const dialogRef = this.dialog.open(LoginErrorModalComponent, {
      data: ''
    });*/

    //this._authSrv.logIn(this.username.value, this.password.value)
    /*
      .subscribe(data => {
        this._authSrv.user = data;
        this.storage.store('user', data);
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        if(error.status === 406) console.log('unable to login');
        console.error(error);
        this._authSrv.hasSession = false;
      });*/
  }

}
