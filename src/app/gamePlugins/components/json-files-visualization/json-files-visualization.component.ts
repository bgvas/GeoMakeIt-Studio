import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {GamePluginsService} from '../../services/game-plugins.service';
import {Observable, Subject} from 'rxjs';
import {ConfigDesignerModel} from '../../models/config-designer-model';
import {RootDesigner} from '../../../games/models/designers/rootDesignerClass/root-designer';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {DeclareFormControlsService} from '../../../shared/services/declareFormControls/declare-form-controls.service';
import {GamePluginConfigService} from '../../services/gamePluginConfig.service';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {takeUntil} from 'rxjs/operators';
import {Routes} from '@angular/router';
import {Error} from '../../../error-handling/error/error';
import {isArray} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-json-files-visualization',
  templateUrl: './json-files-visualization.component.html',
  styleUrls: ['./json-files-visualization.component.css']
})
export class JsonFilesVisualizationComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {


  @Input() dataFile?: any;
  @Output() formResults = new EventEmitter<FormGroup>();
  jsonDataFile?: any;
  designerFile?: ConfigDesignerModel;
  dataForm?: FormGroup;
  isLoading: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private gamePluginService: GamePluginsService, private fb: FormBuilder , private changeDetector: ChangeDetectorRef) {
  }

  // while button clicked in main configuration screen, select the specific designer //
  ngOnChanges(changes: SimpleChanges) {
    this.isLoading = true;
      this.jsonDataFile = this.dataFile?.value;   // this is the data file //
    if(typeof this.dataFile?.key !== 'undefined')
      this.gamePluginService?.getConfigDesignerFile(this.dataFile?.key + '_config_designer.json')
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(selectedDesigner => {
        this.designerFile = selectedDesigner;  // this is the designer file //
            this.isLoading = false;
            this.initializeForm();
            this.addControlsToForm();
      },
              (error: Error) => {
                this.isLoading = false;
                  console.log(error?.message)
              })
  }



  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // wait child, to detect form changes first //
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }

  // setting-up form //
  initializeForm(): void {
    this.dataForm = this.fb.group({ })
  }

  isObject(obj): boolean {
    return (obj instanceof Object);
  }

  // make the sorting in ngFor, like in JSON-file
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  onSubmit(): void {
    console.log(this.dataForm.controls)
  }

  addControlsToForm() {
    for (const field in this.jsonDataFile ) {
      this.dataForm.addControl(field , this.fb.group({}));
      for (const fieldItem in this.jsonDataFile[field]) {
        if (typeof this.jsonDataFile[field][fieldItem] !== 'object') {
          (this.dataForm.get(field) as FormGroup).addControl(fieldItem, this.fb.control(this.jsonDataFile[field][fieldItem]))
        }
        if (typeof this.jsonDataFile[field][fieldItem] === 'object' && Array.isArray(this.jsonDataFile[field][fieldItem])) {
          (this.dataForm.get(field) as FormGroup).addControl(fieldItem, this.fb.array([this.fb.control(this.jsonDataFile[field][fieldItem])]))
        }
      }
    }
  }

  stringAfterDot(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('.') + 1;
      return str.substring(index, (str.length));
    }
  }

  stringBeforeDot(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('.');
      return str.substring(0, index);
    }
  }

  isEmpty(value): boolean {
    return (value.length === 0);
  }

  /*onCancel(): void {
    this.location.back();
  }*/



  getResults(value, formGroup, formControl) {

      if (isArray(value)) {
        (this.dataForm.get(formGroup).get(formControl) as FormArray).setValue([this.fb.control(value)]);
      } else {
      //this.dataForm.get(formGroup).get(formControl).setValue(this.fb.control(value));
     }
    this.formResults.emit(this.dataForm);
  }
}
