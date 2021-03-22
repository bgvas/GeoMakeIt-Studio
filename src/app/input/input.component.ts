import {ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

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

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.formName.addControl(this.groupName, new FormGroup({}));
    if (this.type.includes('array')) {
        (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormArray([]));
        this.arrayValues = this.value;
    }
    (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormControl(''));
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
    if (typeof this.arrayValues === 'undefined') {
      this.arrayValues = [];
    }
    (this.formName.get(groupName).get(controlName) as FormArray).push(new FormControl(''));
    this.arrayValues.push('');
  }


}
