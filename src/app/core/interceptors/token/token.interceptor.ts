// Angular
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs';
// Services
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const _authSrv = this.injector.get(AuthenticationService);
    const token = _authSrv.user ? _authSrv.user.api_token : '';

    request = request.clone({
      setHeaders: {
        'Api-Token': token,
        // TODO: Replace following line with an actual Base64 | JWT-based token
        'Authorization': `User ${token}`, // TODO: usar JWT
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: { 'Authorization': `Bearer ${token}` }
    });
  }

}
