// https://github.com/getsentry/sentry-javascript/issues/2292
// Angular
import { Injectable } from "@angular/core";
// Environment
import { environment } from "@env/environment";
// Sentry
import * as Sentry from "@sentry/browser";
// Config
import { AppConfig } from "app/configs/app.config";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpError } from "../custom-error.model";

Sentry.init({
  dsn: AppConfig.sentryDSN,
  integrations: [
    new Sentry.Integrations.TryCatch({
      XMLHttpRequest: false,
    }),
  ],
  ignoreErrors: ["Non-Error exception captured"],
});

@Injectable({
  providedIn: "root",
})
export class LoggingErrorService {
  extractError(error) {
    if (error && error.ngOriginalError) error = error.ngOriginalError; // error nativo de angular?

    // Server error
    if (error instanceof HttpErrorResponse) {
      //console.log("instanceof Error: ", error.error instanceof Error);
      //console.log("instanceof ErrorEvent: ", error.error instanceof ErrorEvent);
      console.log("error.name: ", error.name);
      console.log("error.message: ", error.message);
      console.log("error.error: ", error.error);
      console.log("error.status: ", error.status);

      if (error.error instanceof Error) return error.error;
      if (error.error instanceof ErrorEvent) return error.error.message;
      if (typeof error.error === "string") {
        return new HttpError(`${error.name} '${error.error.toUpperCase()}/${error.status}' for '${error.url}'`); // prettier-ignore
      }
      return error.message; // cuando se hace petición sin internet
    }
    // Client error
    else if (typeof error === "string" || error instanceof Error) return error;
    else return null;
  }

  logError(error) {
    //if (environment.production) {
    this.handleError(error);
    //} else {
    //}
  }

  handleError(error) {
    const extractedError = this.extractError(error);
    /*let user;
    let page;
    let version;
    let device; //movil, browser, versions*/
    /*Sentry.setContext(user, {
      email: "",
    });*/
    /*Sentry.setUser({
      name: "Carlos",
      email: "mariows@alumnos.uta.cl",
    });
    Sentry.setExtras({
      some: "ALGO",
    });*/
    //Sentry.setRelease();
    const eventId = Sentry.captureException(extractedError);
    Sentry.showReportDialog({ eventId }); // Para que el usuario explique el error
  }
}
