import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeclareFormControlsService {

  constructor(private fb: FormBuilder) { }



  fillForm(obj, dataForm): FormGroup {

    for (const item in obj) {
      if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
        dataForm.addControl(item, this.fb.group({}));
        for (const value in obj[item]) {
          if (typeof (obj[item])[value] === 'object' && !Array.isArray((obj[item])[value])) {
            (dataForm.get(item) as FormGroup).addControl(value, this.fb.group({}));
          }
          if (Array.isArray((obj[item])[value])) {
            (dataForm.get(item) as FormGroup).addControl(value, this.fb.array((obj[item])[value]));
          }
          if (typeof (obj[item])[value] !== 'object') {
            (dataForm.get(item) as FormGroup).addControl(value, this.fb.control(''));
            (dataForm.get(item) as FormGroup).get(value).setValue((obj[item])[value]);
          }
        }
      }
      if (Array.isArray(obj[item])) {
        dataForm.addControl(item, this.fb.array(obj[item]));
      }
      if (typeof obj[item] !== 'object') {
        dataForm.addControl(item, this.fb.control(''));
        (dataForm.get(item)).setValue(obj[item]);
      }
    }

    return dataForm as FormGroup;
  }
}
