// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Third-party
import { LocalStorageService } from 'ngx-webstorage';
// Material
import { MatDialog } from '@angular/material/dialog';
// Services
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

import { LoginErrorModalComponent } from '../../../../pages/login-error-modal/login-error-modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private _authSrv: AuthenticationService,
    public dialog: MatDialog,
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
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
    event.preventDefault();
    console.log(event);
    //this.router.navigate(['/home']);
    const dialogRef = this.dialog.open(LoginErrorModalComponent, {
      data: ''
    });

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
