// https://stackoverflow.com/questions/50728460/password-confirm-angular-material
// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // se repite
  SHOW = 'Mostrar contraseña';
  HIDE = 'Ocultar contraseña';
  hideTooltip: boolean = true;
  contentTooltip: string = this.SHOW;
  // fin se repite

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
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

  private initForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', Validators.required],
      confirm_passwd: ['', Validators.required],
    });
  }

  get nameField(){
    return this.signupForm.get('name');
  }

  get lastnameField(){
    return this.signupForm.get('lastname');
  }

  get emailField(){
    return this.signupForm.get('email');
  }

  get passwdField(){
    return this.signupForm.get('passwd');
  }

  get confirmPasswdField(){
    return this.signupForm.get('confirm_passwd');
  }

  get emailFieldIsInvalid(){
    return this.emailField.touched && this.emailField.invalid;
  }

  get passwordFieldIsInvalid(){
    return this.passwdField.touched && this.passwdField.invalid;
  }
  
  

  onSubmit(event: Event) {
    event.preventDefault();
    //console.log(event);
  }

}
