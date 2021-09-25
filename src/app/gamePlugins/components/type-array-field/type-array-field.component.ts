import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {fromArray} from 'rxjs-compat/observable/fromArray';

@Component({
  selector: 'app-type-array-field',
  templateUrl: './type-array-field.component.html',
  styleUrls: ['./type-array-field.component.css']
})
export class TypeArrayFieldComponent implements OnInit {

  @Input() type?: string;
  @Input() tooltip?: string;
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() validations?: any[];
  @Input() nameOfFormControl?: any;
  @Input() nameOfGroup?: any;
  @Input() dataForm?: FormGroup;
  @Input() items?: any[];
  @Output() returnedValueOfControl = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private validationService: ValidationsService) { }

  ngOnInit(): void {
    // initialize form //
    this.form = this.fb.group({
      [this.nameOfFormControl]: this.fb.array([], this.validationService.set(this.validations))
    });
    // push values in form //
    for(const item of this.value) {
      (this.form.get(this.nameOfFormControl) as FormArray).push(this.fb.control(item));
    }
  }

  get formArrayData() {
    return (this.form.get(this.nameOfFormControl) as FormArray);
  }

  // pass form to jsonFilesVisualization
  onChange(event) {
    if (event) {
      this.returnedValueOfControl.emit(this.form.get(this.nameOfFormControl).value);
    }
  }

  deleteArrayItem(i): void {
    (this.form.get(this.nameOfFormControl) as FormArray).removeAt(i);
  }

  addArrayItem(): void {
    (this.form.get(this.nameOfFormControl) as FormArray).push(new FormControl(''));
  }

}


