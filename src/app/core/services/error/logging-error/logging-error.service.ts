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
      console.log("instanceof Error: ", error.error instanceof Error);
      console.log("instanceof ErrorEvent: ", error.error instanceof ErrorEvent);

      if (error.error instanceof Error) return error.error;
      if (error.error instanceof ErrorEvent) return error.error.message;
      if (typeof error.error === "string") {
        const formattedError = `${error.name} '${error.error}/${error.status}' for '${error.url}'`;
        return new HttpError(formattedError);
      }
      /*return new Error(
          `${error.name} '${error.error}/${error.status}' for '${error.url}'`*/
      //); // TODO: check this!! search <unknown> httpErrorResponse
      //return `${error.name} '${error.error}/${error.status}' for '${error.url}'`; // TODO: check this!! search <unknown> httpErrorResponse
      return error.message; // cuando se hace petición sin internet
    }
    // Client error
    else if (typeof error === "string" || error instanceof Error) return error;
    else return null;
  }

  logError(stackTrace) {
    //if (environment.production) {
    this.handleError(stackTrace);
    //} else {
    //}
  }

  handleError(error) {
    console.log("error enviado a sentry: ", error);
    const extractedError = this.extractError(error);

    console.log("extractedError: ", extractedError);
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
    // Para que el usuario explique el error
    //Sentry.showReportDialog({ eventId });
  }
}
