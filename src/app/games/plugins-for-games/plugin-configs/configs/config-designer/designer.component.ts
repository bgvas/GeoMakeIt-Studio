import {Component, OnInit, Input, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {RootDesigner} from '../../../../../classes/designers/rootDesignerClass/root-designer';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {ValidationsService} from '../../../../../validations/validations.service';
import {DeclareFormControlsService} from '../../../../../declareFormControls/declare-form-controls.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit, AfterContentChecked{

  @Input() designerFile: any;
  @Input() dataFile: any;
  @Input() error: any;


  designer: RootDesigner;
  data: any;
  dataForm: FormGroup;


  constructor(private fb: FormBuilder,
              private location: Location,
              private validationService: ValidationsService,
              private changeDetector: ChangeDetectorRef,
              private declareService: DeclareFormControlsService) {}


  ngOnInit(): void {
     this.designerFile.subscribe(data => {
         this.designer = data;
     });

     this.dataFile.subscribe(data => {
        this.data = data;

         // form creation //
        this.initializeForm();

         // add controls to form //
        this.declareService.fillForm(data, this.dataForm);
     })
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

    // make the sorting in ngFor, like in JSON-file
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  onSubmit(): void {
      if(this.dataForm?.valid) {
          console.log(this.dataForm.value);
      }
  }

  removeUnderscore(str): string {
      return str.replace(/_/g, ' ');
  }

  removeStringBeforeDot(str): string {
      if (str === '') {
          return str;
      } else {
          const index = str.indexOf('.') + 1;
          return str.substring(index, (str.length));
      }
  }

  isEmpty(value): boolean {
      return (value.length === 0);
  }

  onCancel(): void {
      this.location.back();
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



}
