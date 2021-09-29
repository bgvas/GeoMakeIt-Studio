import { Injectable } from '@angular/core';
import {isArray} from 'rxjs/internal-compatibility';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ReturningResultsService {

  constructor(private fb: FormBuilder) { }


  public get(form: FormGroup, formGroup: any, control: string, value: any, designer_type: string, dataFileTitle: string) {
    console.log(form);
    if(designer_type === 'config') {
      if (isArray(value[0])) {
        // if returned control is invalid, set as invalid the whole form //

        (form?.get(formGroup)?.get(control) as FormArray)?.setValue([this.fb.control(value[0])]);
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
        (((form?.get(dataFileTitle) as FormArray)?.at(formGroup) as FormGroup)?.
        get(control) as FormArray)?.setValue([this.fb.control(value[0])]);
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
