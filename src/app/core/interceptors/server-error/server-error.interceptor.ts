import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // refresh token
        } else {
          //router.navigate(["error"]);
          console.log("ServerErrorInterceptors: ", error);
          return throwError(error);
        }
      })
    );
  }
}
