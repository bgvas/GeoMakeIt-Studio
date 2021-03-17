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
  @Input() value: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.formName.addControl(this.groupName, new FormGroup({}));
    if (this.type.includes('array')) {
        (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormArray([]));
    };
    (this.formName.get(this.groupName) as FormGroup).addControl(this.controlName, new FormControl(''));
  }

  isArray(obj): boolean {
    return (Array.isArray(obj));
  }




}
