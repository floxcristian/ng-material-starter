// https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error
// Angular
import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
// Services
import { ExtractErrorService } from "../extract-error/extract-error.service";
import { NotificationService } from "../../utils/notification/notification.service";
import { LoggingErrorService } from "../logging-error/logging-error.service";

type ErrorType = Error | HttpErrorResponse;

@Injectable()
export class GlobalError implements ErrorHandler {
  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(private injector: Injector) {}

  handleError(error: ErrorType) {
    const errorService = this.injector.get(ExtractErrorService);
    const logger = this.injector.get(LoggingErrorService);
    const notifier = this.injector.get(NotificationService);

    //console.log("error:", error);
    console.log("typeof(error): ", typeof error);
    //notifier.showSuccess("this is a sample", "ok");
    let message: string;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerMessage(error); // error.message
      stackTrace = errorService.getServerStack(error); // ...
    } else {
      // Client error
      message = errorService.getClientMessage(error); // error.message |
      stackTrace = errorService.getClientStack(error); // error.stack
      console.log("stackTrace: ", stackTrace);
    }
    console.log("name: ", error.name);
    console.log("message: ", message);
    notifier.showSuccess(message);

    // router.navigate(['error']);
    logger.logError(error);
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}
