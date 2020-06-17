// Angular
import { Injectable } from "@angular/core";
// Environment
import { environment } from "@env/environment";
// Sentry
import * as Sentry from "@sentry/browser";
// Config
import { AppConfig } from "app/configs/app.config";
import { HttpErrorResponse } from "@angular/common/http";

Sentry.init({
  dsn: AppConfig.sentryDSN,
});

@Injectable({
  providedIn: "root",
})
export class LoggingErrorService {
  // Extrae
  extractError(error) {
    console.log("ngOriginalError: ", error.ngOriginalError);
    if (error && error.ngOriginalError) error = error.ngOriginalError; // error nativo de angular?

    // Server error
    if (error instanceof HttpErrorResponse) {
      console.log("instanceof Error: ", error.error instanceof Error);
      console.log("instanceof ErrorEvent: ", error.error instanceof ErrorEvent);

      if (error.error instanceof Error) return error.error;
      else if (error.error instanceof ErrorEvent) return error.error.message;
      else if (typeof error.error === "string")
        return `${error.name}: ${error.error} - ${error.status}`;
      /*return {
          name: error.name,
          message: `${error.name}: Server returned code ${error.status} with body "${error.error}"`,
        };*/ else
        return error.message;
    }
    // Client error
    else if (typeof error === "string" || error instanceof Error) return error;
    else return null;
  }

  logError(stackTrace) {
    Sentry.captureException(stackTrace);
    //console.log(stackTrace);
    //if (environment.production) {
    //this.handleError(stackTrace);
    //} else {
    //}
  }

  handleError(error) {
    /*
    //const extractedError = this.extractError(error || "unknown error");
    console.log("error enviado a sentry: ", error);

    // devuelve: { type_error, stack }
    //Sentry.captureMessage("capturando mensaje?"); // ReferenceError, TypeError. HttpErrorResponse
    const extractedError = this.extractError(error);

    console.log("extractedError: ", extractedError);
    let user;
    let page;
    let version;
    let device; //movil, browser, versions
    Sentry.setContext(user, {
      email: "",
    });
    Sentry.setUser({
      name: "Carlos",
      email: "mariows@alumnos.uta.cl",
    });
    Sentry.setExtras({
      some: "ALGO",
    });
    //Sentry.setRelease();
    const eventId = Sentry.captureException(extractedError);
    // Dialog para que el usuario explique el error
    Sentry.showReportDialog({ eventId });*/
  }
}
