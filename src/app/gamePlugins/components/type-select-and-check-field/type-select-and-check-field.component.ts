import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';

@Component({
  selector: 'app-type-select-and-check-field',
  templateUrl: './type-select-and-check-field.component.html',
  styleUrls: ['./type-select-and-check-field.component.css']
})
export class TypeSelectAndCheckFieldComponent implements OnInit {

  @Input() type?: string;
  @Input() tooltip?: string;
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() validations?: any[];
  @Input() nameOfFormControl?: string;
  @Input() nameOfGroup?: string;
  @Input() dataForm?: FormGroup;
  @Input() items?: any[];
  @Output() returnedValueOfControl = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private validationService: ValidationsService) { }

  ngOnInit(): void {

    // initialize form //
    this.form = this.fb.group({});
    this.form.addControl(this.nameOfFormControl, this.fb.control('', this.validationService.set(this.validations)))
    this.form.get(this.nameOfFormControl).setValue(this.value);
  }

  // pass value to jsonFilesVisualization
  onChange(event) {
    if (event) {
     this.returnedValueOfControl.emit(event.checked);
    }
  }



}
