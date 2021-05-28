import {FormGroup, ValidatorFn} from '@angular/forms';

export  function passwordMatchValidator(password: string, confirm: string): ValidatorFn {
    return (control): { [key: string]: boolean } | null => {
        const passwordValue = control.get(password).value;
        const confirmValue = control.get(confirm)?.value;

        if (passwordValue !== confirmValue) {
            control.setErrors({match: true})
            control.get('confirm').setErrors({match: true})
            return {match: true}
        } else {
            return null
        }
    };
}
