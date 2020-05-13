// https://stackblitz.com/edit/angular-material-password-visibility-toggle?file=src%2Fapp%2Fapp.component.ts
// https://material.angular.io/components/form-field/overview#prefix-amp-suffix

// Angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Third-party
import { LocalStorageService } from 'ngx-webstorage';
// Material
import { MatDialog } from '@angular/material/dialog';
// Services
import { AuthService } from '@core/services/auth/auth.service';
// Translate
import {TranslateService} from '@ngx-translate/core';

import { LoginErrorModalComponent } from '../login-error-modal/login-error-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  // se repite
  SHOW = 'Mostrar contraseña';
  HIDE = 'Ocultar contraseña';
  hideTooltip: boolean = true;
  contentTooltip: string = this.SHOW;
  // fin se repite

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private _authSrv: AuthService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private storage: LocalStorageService,
    private translate: TranslateService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  // se repite
  toggleButton() {
    this.hideTooltip = !this.hideTooltip;
    setTimeout(() => {
      if (this.hideTooltip) this.contentTooltip = this.SHOW;
      else this.contentTooltip = this.HIDE;
    }, 100);
  }
  // fin se repite


  getErrorMessageForemail() {
    const hasError = this.emailField.hasError('required');
    return hasError ? 'nombre de usuario es requerido' : '';
  }

  getErrorMessageForPassword() {
    const hasError = this.passwordField.hasError('required');
    return hasError ? 'password es requerido' : '';
  }

  get emailField(){
    return this.loginForm.get('email');
  }

  get passwordField(){
    return this.loginForm.get('password');
  }

  get emailFieldIsInvalid(){
    return this.emailField.touched && this.emailField.invalid;
  }

  get passwordFieldIsInvalid(){
    return this.passwordField.touched && this.passwordField.invalid;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    //console.log(event);
    this.router.navigate(['/dskjfdfk']);

    /*
    const dialogRef = this.dialog.open(LoginErrorModalComponent, {
      data: ''
    });*/

    //this._authSrv.logIn(this.email.value, this.password.value)
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
