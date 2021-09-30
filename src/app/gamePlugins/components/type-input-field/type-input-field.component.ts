import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';

@Component({
  selector: 'app-type-input-field',
  templateUrl: './type-input-field.component.html',
  styleUrls: ['./type-input-field.component.css']
})
export class TypeInputFieldComponent implements OnInit {

  @Input() type?: string;
  @Input() tooltip?: string;
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() validations?: any[];
  @Input() nameOfFormControl?: string;
  @Input() nameOfGroup?: string;
  @Input() dataForm?: FormGroup;
  @Output() returnedValueOfControl = new EventEmitter<any>();

  form: FormGroup;


  constructor(private fb: FormBuilder, private validationService: ValidationsService) { }

  ngOnInit(): void {

    // initialize form //
    this.form = this.fb.group({});
    if(typeof this.value === 'undefined') {
      this.value = '';
    }
    this.form.addControl(this.nameOfFormControl, this.fb.control('', this.validationService.set(this.validations)))
    this.form.get(this.nameOfFormControl).setValue(this.value);
  }

  // pass value and the condition of form(valid, invalid), to jsonFilesVisualization
  onChange(event) {
    if (event) {
      this.returnedValueOfControl.emit([this.form.get(this.nameOfFormControl)?.value, this.form.controls[this.nameOfFormControl].valid]);
    }
  }

}
