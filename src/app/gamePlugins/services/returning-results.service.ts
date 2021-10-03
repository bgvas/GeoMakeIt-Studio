import { Injectable } from '@angular/core';
import {isArray} from 'rxjs/internal-compatibility';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ReturningResultsService {

  constructor(private fb: FormBuilder) { }


  public get(form: FormGroup, formGroup: any, control: string, value: any, designer_type: string, dataFileTitle: string) {

    if(designer_type === 'config') {
      if (isArray(value[0])) {
        (form?.get(formGroup)?.get(control) as FormArray)?.clear();
        for (const item of value[0]) {
          (form?.get(formGroup)?.get(control) as FormArray)?.push(this.fb.control(item));
        }
        // if returned control is invalid, set as invalid the whole form //
        if (!value[1]) {
          (form?.get(formGroup)?.get(control) as FormControl)?.setErrors({'invalid': true});
          // if returned control is valid, remove validation errors from form //
        } else {
          (form?.get(formGroup)?.get(control) as FormControl)?.clearValidators()
        }
      } else {
        form?.get(formGroup)?.get(control)?.setValue(value[0]);
        // if returned control is invalid, set as invalid the whole form //
        if (!value[1]) {
          (form?.get(formGroup)?.get(control) as FormControl)?.setErrors({'invalid': true});
          // if returned control is valid, remove validation errors from form //
        } else {
          (form?.get(formGroup)?.get(control) as FormControl)?.clearValidators()
        }
      }
    } else if (designer_type === 'data') {
      if (isArray(value[0])) {

       if(typeof ((form?.get(dataFileTitle) as FormArray)?.at(formGroup)?.get(control) as FormArray) !== 'undefined' ||
         ((form?.get(dataFileTitle) as FormArray)?.at(formGroup)?.get(control) as FormArray) !== null ||
         typeof ((form?.get(dataFileTitle) as FormArray)?.at(formGroup)?.get(control) as FormArray)?.value !== 'undefined') {

         ((form?.get(dataFileTitle) as FormArray)?.at(formGroup)?.get(control) as FormArray).clear();
       }
        for(const item of value[0]) {
          ((form?.get(dataFileTitle) as FormArray)?.at(formGroup)?.get(control) as FormArray)?.push(this.fb.control(item));
       }

       ((form?.get(dataFileTitle) as FormArray).at(formGroup).get(control) as FormArray).setValue(value[0]);
        // if returned control is invalid, set as invalid the whole form //
        if (!value[1]) {
          (((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
          get(control) as FormControl)?.setErrors({'invalid': true});
          // if returned control is valid, remove validation errors from form //
        } else {
          (((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
          get(control) as FormControl)?.clearValidators();
        }
      } else {
        ((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
        get(control)?.setValue(value[0]);
        // if returned control is invalid, set as invalid the whole form //
        if (!value[1]) {
          (((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
          get(control) as FormControl)?.setErrors({'invalid': true});
          // if returned control is valid, remove validation errors from form //
        } else {
          (((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
          get(control) as FormControl)?.clearValidators();
        }
      }
    }
    return form;
  }



}
