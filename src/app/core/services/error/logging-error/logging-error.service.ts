// Angular
import { Injectable } from "@angular/core";
// Environment
import { environment } from "@env/environment";
// Sentry
import * as Sentry from "@sentry/browser";
// Config
import { AppConfig } from "app/configs/app.config";

Sentry.init({
  dsn: AppConfig.sentryDSN,
});

@Injectable({
  providedIn: "root",
})
export class LoggingErrorService {
  /*
  extractError(error) {
    if (error && error.ngOriginalError) {
      error = error.ngOriginalError;
    }

    if (typeof error === 'string' || error instanceof Error) {
      return error;
    } else if (error instanceof HttpErrorResponse) {
      if (error.error instanceof Error) {
        return error.error;
      }

      if (error.error instanceof ErrorEvent) {
        return error.error.message;
      }

      if (typeof error.error === 'string') {
        return `Server returned code ${error.status} with body "${error.error}"`;
      }
      return error.message;
    }
    return null;
  }*/

  logError(message: string, stack: string) {
    if (environment.production) {
      // Send errors to server here
      this.handleError("");
    } else {
      console.log("LoggingService: ", message);
    }
  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);
  }
}
