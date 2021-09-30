import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {json} from 'express';
import {isArray} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-designer-type-of-fields',
  templateUrl: './designer-type-of-fields.component.html',
  styleUrls: ['./designer-type-of-fields.component.css']
})
export class DesignerTypeOfFieldsComponent implements OnInit, OnChanges {


  @Input() type?: string;
  @Input() tooltip?: string;
  @Input() placeholder?: string;
  @Input() value?: any;
  @Input() validations?: string[];
  @Input() items?: any[];
  @Input() formDataGroup?: FormGroup;
  @Input() nameOfFormControl?: any;
  @Input() nameOfGroup?: any;
  @Output() formResults = new EventEmitter<any>();
  arrayValues = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    //console.log(this.formDataGroup.value)

    this.form = this.fb.group({
      [this.nameOfGroup]: this.fb.group({})
    });

    // This initialize,  a new formArray //
    if (this.type.includes('array')) {
      if(typeof this.value === 'undefined') {
        this.value = [];
      }
      (this.form.get(this.nameOfGroup) as FormGroup)
          .addControl(this.nameOfFormControl, this.fb.array([this.fb.control(this.value)]))
    } else {
      if(typeof this.value === 'undefined') {
        this.value = '';
      }
      // This initialize,  a new formControl //
      (this.form.get(this.nameOfGroup) as FormGroup).addControl(this.nameOfFormControl, this.fb.control(this.value));
      // add values to control //
     (this.form.get(this.nameOfGroup).get(this.nameOfFormControl) as FormControl).setValue(this.value)
    }
  }



  ngOnChanges(changes: SimpleChanges) {
  }


  // get returned results from TypeOfFields and update form controls //
  getResults(value) {
    if (isArray(value[0])) {
      (this.form.get(this.nameOfGroup).get(this.nameOfFormControl) as FormArray).setValue([this.fb.control(value[0])])
    } else {
      this.form.get(this.nameOfGroup).get(this.nameOfFormControl).setValue(value[0])
    }

    this.formResults.emit(value)
  }




}
