import {ChangeDetectorRef, Component, Input, OnInit, AfterContentChecked} from '@angular/core';
import {RootDesigner} from '../../../../../models/designers/rootDesignerClass/root-designer';
import {AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DesignerService} from '../../../../../services/designer.service';
import {Location} from '@angular/common';
import {ValidationsService} from '../../../../../../shared/services/validations/validations.service';
import {DeclareFormControlsService} from '../../../../../../shared/services/declareFormControls/declare-form-controls.service';

@Component({
  selector: 'app-data-designer',
  templateUrl: './data-designer.component.html',
  styleUrls: ['./data-designer.component.css']
})
export class DataDesignerComponent implements OnInit, AfterContentChecked {


  @Input() dataDesigner: any;
  @Input() dataFile: any;

  editor: RootDesigner;
  data: any;
  dataForm: FormGroup;
  dataArray: any;

  constructor(private fb: FormBuilder, private service: DesignerService,
              private location: Location,
              private validationService: ValidationsService,
              private changeDetector: ChangeDetectorRef,
              private declareService: DeclareFormControlsService) { }

  ngOnInit(): void {

    this.dataDesigner.subscribe(data => {
      this.editor = data;
    });

    // form creation //
    this.initializeForm();
    this.loadDataFile();
  }

  // wait child, to detect form changes first //
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  // setting-up form //
  initializeForm(): void {
    this.dataForm = this.fb.group({
    })
  }

  isObject(obj): boolean {
    return (obj instanceof Object);
  }

  // get values from form //
  get dataFromForm(): FormGroup {
    return this.dataForm as FormGroup;
  }

  // make the sorting in ngFor, like in JSON-file
  asIsOrderInPipe(a, b): any {
    return 1;
  }


  onSubmit(): void {
    console.log(this.dataForm.valid);
    console.log(this.dataForm.controls);
    console.log(this.dataForm.value);
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


  // delete  a formGroup //
  deleteGroup(groupId): void {
    this.service.storagedObject = groupId;
    (this.dataForm as FormGroup).removeControl(groupId);
    this.dataFromForm.removeControl(groupId);
  }

  // create a new formGroup //
  addGroup(): void {
    const name = this.createNameForNewFormGroup(this.dataForm.controls);    // create name //
    (this.dataFromForm as FormGroup)?.addControl(name, new FormGroup({}));  // display new FormGroup//
    (this.dataForm as FormGroup).addControl(name, new FormGroup({}));      // add new formGroup, to form //
  }


  // create name for the new formGroup //
  createNameForNewFormGroup(form): any {

    let name = '';
    let index = '';
    for (const item in form) {
      name = item;             // keep the name of last fromGroup
    }
    if (name === '' && this.service.storagedObject !== '') {            // if we remove all previous group names, get from service the stored name //
      name = this.service.storagedObject.substring(0, this.service.storagedObject.length - 1);
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

  // send array-values to child-component //
  passValueToChild(value): any {
    if(Array.isArray(value) && value.length > 0) {
      return value;
    }

  }

  // setting-up, form validations //
  declareValidators(validation, formGroupName, formControlName){
    let validators = [];
    if (Array.isArray(validation) && validation !== null) {
      validators = this.validationService.set(validation);
      if((this.dataForm.get(formGroupName).get(formControlName) as FormControl)?.value === undefined) {
        (this.dataForm.get(formGroupName).get(formControlName) as FormControl)?.setValue('');
      }
      (this.dataForm.get(formGroupName).get(formControlName) as FormControl)?.setValidators(validators);
    }
  }

  loadDataFile(): void {
    this.dataFile.subscribe(data => {
      this.declareService.fillForm(data, this.dataForm);
    })
  }


}
