import { Injectable } from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  set(validations): any {
      const validators = [];
      for (const values in validations) {
          for(const validator in validations[values]) {
                if (validator === 'Required' && (validations[values])[validator] === true) {
                    validators.push(Validators.required);
                }
                if (validator === 'Max') {
                    validators.push(Validators.max((validations[values])[validator]));
                }
                if (validator === 'Min') {
                    validators.push(Validators.min((validations[values])[validator]));
                }
                if (validator === 'Regular Expression') {
                    validators.push(Validators.pattern((validations[values])[validator]));
                }
                if (validator === 'Email') {
                    validators.push(Validators.email);
                }
          }
      }
      return validators;
  }
}
