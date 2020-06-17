// Angular
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ExtractErrorService {
  // Client:
  // + myUndefinedFunction is not defined
  getClientMessage(error: Error): string {
    if (!navigator.onLine) return "No Internet Connection";
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack;
  }

  // Server
  getServerMessage(error: HttpErrorResponse): string {
    return error.message;
  }

  getServerStack(error: HttpErrorResponse): string {
    // handle stack trace
    //return "stack";
    return error.error;
  }

  /*getServerError(error){
      if (error.error instanceof Error) return error.error;
      else if (error.error instanceof ErrorEvent) return error.error.message;
      else if (typeof error.error === "string")
        return `Server returned code ${error.status} with body "${error.error}"`;
      else return error.message;
  }

  getClientError(error) {
    if (typeof error === "string" || error instanceof Error) {
      return error;
    } else return null;
  }*/
}
