import {Component, Input, OnInit} from '@angular/core';
import {RootDesigner} from '../../../../../classes/designers/rootDesignerClass/root-designer';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DesignerService} from '../designer.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-data-designer',
  templateUrl: './data-designer.component.html',
  styleUrls: ['./data-designer.component.css']
})
export class DataDesignerComponent implements OnInit {


  @Input() dataDesigner: any;
  @Input() dataFile: any;

  editor: RootDesigner;
  data: any;
  dataForm: FormGroup;
  dataArray: any;

  constructor(private fb: FormBuilder, private service: DesignerService, private location: Location) { }

  ngOnInit(): void {

    this.dataDesigner.subscribe(data => {
      this.editor = data;
    });
    this.dataFile.subscribe(data => {
      this.data = data;

      this.initializeForm();
      this.fillForm(data);
    })

    /*this.service.getAPi().subscribe(data => {
      console.log(data);
    })*/

  }

  initializeForm(): void {
    this.dataForm = this.fb.group({
    })
  }

  isObject(obj): boolean {
    return (obj instanceof Object);
  }

  get dataFromForm(): FormGroup {
    return this.dataForm as FormGroup;
  }

  // make the sorting in ngFor, like JSON sorting
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  fillForm(obj): void {

    for (const item in obj) {
      if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
        this.dataForm.addControl(item, this.fb.group({}));
        for (const value in obj[item]) {
          if (typeof (obj[item])[value] === 'object' && !Array.isArray((obj[item])[value])) {
            (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.group({}));
          }
          if (Array.isArray((obj[item])[value])) {
            (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.array((obj[item])[value]));
          }
          if (typeof (obj[item])[value] !== 'object') {
            (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.control(''));
            (this.dataForm.get(item) as FormGroup).get(value).setValue((obj[item])[value]);
          }
        }
      }
      if (Array.isArray(obj[item])) {
        this.dataForm.addControl(item, this.fb.array(obj[item]));
      }
      if (typeof obj[item] !== 'object') {
        this.dataForm.addControl(item, this.fb.control(''));
        (this.dataForm.get(item)).setValue(obj[item]);
      }
    }
  }


  onSubmit(): void {
    console.log(this.dataForm.controls);
  }

  removeUnderscore(str): string {
    return str.replace(/_/g, ' ');
  }

  removeStringBeforeDot(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('.') + 1;
      if ( index === 0 ) {
        return str;
      } else {  return str.substring(index, (str.length)); }
    }
  }

  isEmpty(value): boolean {
    if (value.length === 0) {
      return true;
    }
    return false;
  }

  deleteGroup(groupId): void {
    this.service.variable = groupId;
    (this.dataForm as FormGroup).removeControl(groupId);
    this.dataFromForm.removeControl(groupId);
  }

  addGroup(): void {
      const name = this.getNameForNewFormGroup(this.dataForm.controls);    // create name //
      this.dataForm.addControl(name, new FormGroup({}));      // add new formGroup to form //
      this.dataFromForm.addControl(name, new FormGroup({}));  // add new FormGroup, to display it//
  }

  // create name for the new formGroup //
  getNameForNewFormGroup(form): any {

    let name = '';
    let index = '';

    for (const item in form) {
      name = item;             // keep the name of last fromGroup
    }
    if (name === '' && this.service.variable !== '') {            // if we remove all previous group names, get from service the stored name //
      name = this.service.variable.substring(0, this.service.variable.length - 1);
      return name + 1;
    } else if (name !== '') {
      index = name.substring(name.length - 1, name.length);  // keep the number of last formGroup
      name = name.substring(0, name.length - 1);      // remove from name, the number of last FormGroup
      return name + (parseInt(index, 10) + 1);    // append number, of Last formGroup plus 1, to name //
    } else {
      return 'card_' + 1;
    }
  }

  onCancel(): void {
    this.location.back();
  }


}
