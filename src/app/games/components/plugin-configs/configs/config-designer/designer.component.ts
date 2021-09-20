import {Component, OnInit, Input, ChangeDetectorRef, AfterContentChecked, OnDestroy} from '@angular/core';
import {RootDesigner} from '../../../../models/designers/rootDesignerClass/root-designer';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {ValidationsService} from '../../../../../shared/services/validations/validations.service';
import {DeclareFormControlsService} from '../../../../../shared/services/declareFormControls/declare-form-controls.service';
import {GamePluginConfigService} from '../../../../../gamePlugins/services/gamePluginConfig.service';
import {GamePluginDataService} from '../../../../../gamePlugins/services/gamePluginData.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit, AfterContentChecked, OnDestroy {

  @Input() designerFile: any;
  @Input() dataFile: any;
  @Input() error: any;


  designer: RootDesigner;
  data: any;
  dataForm: FormGroup;
  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder,
              private location: Location,
              private validationService: ValidationsService,
              private changeDetector: ChangeDetectorRef,
              private declareService: DeclareFormControlsService,
              private designerService: GamePluginConfigService,
              private dataService: GamePluginDataService) {}


  ngOnInit(): void {
     this.designerService.getDataDefaultDesignerFile().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
         this.designer = data;
     });

     this.dataService.getDataDefaultJsonFile().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
        this.data = data;

         // form creation //
        this.initializeForm();

         // add controls to form //
        this.declareService.fillForm(data, this.dataForm);
     })
  }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
