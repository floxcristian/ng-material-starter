// Angular
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  hasSession: boolean = false;
  user;

  constructor(
    private storage: LocalStorageService
  ) { }

  isLoggedIn() {
    const user = this.storage.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  logIn(username: string, password: string) {
    /*
    const url = `${this.apiAuthBaseURL}/users/login`;
    return this._http.post(url, {
      'username': username,
      'password': password
    });*/
    return true;
  }

  logout() {
    this.user = null;
    this.hasSession = false;
    this.storage.clear('user');
  }

}
