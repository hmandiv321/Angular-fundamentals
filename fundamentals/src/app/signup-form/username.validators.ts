import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl ): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true };
        } else {
            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            /**
             * using set time out to mock server call
             */
            setTimeout(() => {
                if (control.value === 'HR') {
                    console.log('if');
                    resolve ({shouldBeUnique: true});
                } else {
                    console.log('else');
                    resolve (null);
                }
            }, 2000);
        });
    }
}
