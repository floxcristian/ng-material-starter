// Angular
import { FormGroup } from '@angular/forms';

export class CustomValidators {

    /**
     * Custom validator to check that two fields match.
     * @param controlName 
     * @param matchingControlName 
     */
    static mustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if(control.errors) return;

            // if another validator has already found an error on the matchingControl
            if (matchingControl.errors && !matchingControl.errors.mustMatch) return;

            if(matchingControl.value == '') 
                matchingControl.setErrors({ required: true });
            else if (control.value !== matchingControl.value)
                matchingControl.setErrors({ mustMatch: true });
            else
                matchingControl.setErrors(null);
        };
    }

}