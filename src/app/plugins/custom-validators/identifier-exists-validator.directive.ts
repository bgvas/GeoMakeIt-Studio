import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {PluginService} from '../services/plugin.service';

@Directive({
  selector: '[appIdentifierExists]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: IdentifierExistsValidatorDirective, multi: true}]
})

export class IdentifierExistsValidatorDirective implements AsyncValidator {

  constructor(private pluginService: PluginService) { }

  validate (control: AbstractControl): Observable<ValidationErrors | null> {
    return this.pluginService.checkIfIdentifierExists(control.value).pipe(take(1)).pipe(map(
        identifier => {
          return identifier['exists'] ? {'identifierExists': true} : null;
        }
    ))
  }
}
