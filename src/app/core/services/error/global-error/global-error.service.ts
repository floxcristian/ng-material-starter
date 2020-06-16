// https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error

// Angular
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
// Services
import { ExtractErrorService } from "../extract-error/extract-error.service";
import { NotificationService } from "../../utils/notification/notification.service";
import { LoggingErrorService } from "../logging-error/logging-error.service";

/*
@Injectable({
  providedIn: "root",
})*/
@Injectable()
export class GlobalErrorService implements ErrorHandler {
  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(private injector: Injector) {
    console.log("GlobalErrorService init....");
  }

  // unionType: solo podemos acceder a valores en común
  // + Error:
  //   - message
  //   - stack
  // + HttpErrorResponse:

  handleError(error: Error | HttpErrorResponse) {
    console.log("isError: ", error instanceof Error);
    console.log(
      "isHttpErrorResponse: ",
      HttpErrorResponse instanceof HttpErrorResponse
    );
    console.log("error: ", error);
    //console.log("error.message: ", error.message);
    //console.log("error.stack: ", error.stack);

    const errorService = this.injector.get(ExtractErrorService);
    const logger = this.injector.get(LoggingErrorService);
    const notifier = this.injector.get(NotificationService);

    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerMessage(error); // error.message
      stackTrace = errorService.getServerStack(error); // ...
      notifier.showError(message);
    } else {
      // Client error
      message = errorService.getClientMessage(error); // error.message |
      stackTrace = errorService.getClientStack(error); // error.stack
      notifier.showError(message);
    }

    // router.navigate(['error']);
    // Always log errors
    logger.logError(message, stackTrace);
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}
