import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {json} from 'express';

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
      (this.form.get(this.nameOfGroup) as FormGroup)
          .addControl(this.nameOfFormControl, this.fb.array([this.fb.control(this.value)]))
      // add values to array //
      this.arrayValues = this.value;
    } else {
      // This initialize,  a new formControl //
      (this.form.get(this.nameOfGroup) as FormGroup).addControl(this.nameOfFormControl, this.fb.control(this.value));
      // add values to control //
      (this.form.get(this.nameOfGroup).get(this.nameOfFormControl) as FormControl).setValue(this.value)
    }


    /*this.formDataGroup = this.fb.group({
      [this.nameOfGroup]: this.fb.group({})
    });

    // This initialize,  a new formArray //
    if (this.type.includes('array')) {
      (this.formDataGroup.get(this.nameOfGroup) as FormGroup)
          .addControl(this.nameOfFormControl, this.fb.array([this.fb.control(this.value)]))
      // add values to array //
      this.arrayValues = this.value;
    } else {
      // This initialize,  a new formControl //
      (this.formDataGroup.get(this.nameOfGroup) as FormGroup).addControl(this.nameOfFormControl, this.fb.control(this.value));
      // add values to control //
      (this.formDataGroup.get(this.nameOfGroup).get(this.nameOfFormControl) as FormControl).setValue(this.value)
    }*/
  }



  ngOnChanges(changes: SimpleChanges) {

     //this.formResults.emit(this.formDataGroup.value)
  }

  isArray(obj): boolean {
    return (Array.isArray(obj));
  }

  // get returned results from TypeOfFields and update form controls //
  getResults(value) {
    if (Array.isArray(value)) {
      (this.form.get(this.nameOfGroup).get(this.nameOfFormControl) as FormArray).setValue([this.fb.control(value)])
    } else {
      (this.form.get(this.nameOfGroup).get(this.nameOfFormControl) as FormControl).setValue(this.value)
    }
    this.formResults.emit(value)
    //console.log(this.formDataGroup.get(this.nameOfGroup).get(this.nameOfFormControl).value)
    //this.formResults.emit(this.formDataGroup.get(this.nameOfGroup).get(this.nameOfFormControl).value)
  }




}
