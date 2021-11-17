import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {UserService} from '../../user/services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Directive({
  selector: '[appEmailExists]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailExistsValidatorDirective, multi: true}]
})
export class EmailExistsValidatorDirective implements AsyncValidator {

  constructor(private userService: UserService) { }

  validate (control: AbstractControl): Observable<ValidationErrors | null> {
    return this.userService.checkIfEmailExists(control?.value).pipe(map(
        email => {
          return email['exists'] ? {'emailExists': true} : null;
        }
    ))
  }


}
