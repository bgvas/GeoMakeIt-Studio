import {EventEmitter, Component, forwardRef, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  @Input() formName: FormGroup;
  @Input() controlName: string;
  @Input() groupName: string;
  @Input() type: string;
  @Input() value?: any;
  @Input() placeholder: string;
  @Input() validation: any;
  @Input() items: any;


  buttonValue = false;
  collapseText = 'Click to open...';
  arrayValues = [];

  constructor() { }

  ngOnInit() {

    this.formName.addControl(this.groupName, new FormGroup({}));
    // This initialize,  a new formArray //
    if (this.type.includes('array')) {
        (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormArray([]));
        // add values to formArray //
        this.arrayValues = this.value;
    } else {
    // This initialize,  a new formControl //
    (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormControl(''));
 }

  }

  isArray(obj): boolean {
    return (Array.isArray(obj));
  }

  changeButton(): void {
    this.buttonValue = !this.buttonValue;
    this.buttonText(this.buttonValue);
  }

  buttonText(value): string {
    if (!value) {
      return 'Click to open table...';
    }
    if (value) {
      return  'Click to close table...';
    }
  }

  deleteArrayItem(groupName, controlName, i): void {
    (this.formName.get(groupName).get(controlName) as FormArray).removeAt(i);
    this.arrayValues.splice(i, 1);

  }

  addArrayItem(groupName, controlName): void {
    if ( this.arrayValues === undefined) {
      this.arrayValues = [];
    }
    (this.formName.get(groupName).get(controlName) as FormArray).push(new FormControl(''));
    this.arrayValues.push('');
  }



}
