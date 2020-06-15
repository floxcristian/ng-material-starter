// Angular
import { Injectable } from "@angular/core";
// Material
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  showSuccess(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  showError(message: string) {}
}
