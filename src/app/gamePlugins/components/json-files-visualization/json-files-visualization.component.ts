import {
  AfterContentChecked,
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
import {Subject} from 'rxjs';
import {designerModel} from '../../models/designer-model';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../error-handling/error/error';
import {isArray} from 'rxjs/internal-compatibility';
import {fromArray} from 'rxjs-compat/observable/fromArray';
import {ReturningResultsService} from '../../services/returning-results.service';
import {newArray} from '@angular/compiler/src/util';


@Component({
  selector: 'app-json-files-visualization',
  templateUrl: './json-files-visualization.component.html',
  styleUrls: ['./json-files-visualization.component.css']
})
export class JsonFilesVisualizationComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked {


  @Input() dataFile?: any;
  @Output() formResults = new EventEmitter<FormGroup>();
  jsonDataFile?: any;
  designerFile?: designerModel;
  dataForm?: FormGroup;
  arrayForTypeDataFiles = new Array<any>();
  isLoading: boolean;
  changesAreSaved = true;
  designer_type: string;
  private unsubscribe = new Subject<void>();

  constructor(private gamePluginService: GamePluginsService, private fb: FormBuilder ,
              private validationService: ValidationsService, private changeDetector: ChangeDetectorRef,
              private returningResultsService: ReturningResultsService) {
  }

  // while button clicked in main configuration screen, selecting the specific designer //
  ngOnChanges(changes: SimpleChanges) {
    this.isLoading = true;
    this.jsonDataFile = this.dataFile?.value?.content || null;   // this is the data-file //
    this.initializeForm();
    this.designer_type = this.dataFile?.value?.designer_type || null;   // declare the type of designer

      if (this.dataFile?.key !== null) {
        this.gamePluginService?.getDesignerFile(this.dataFile?.key , this.dataFile?.value?.designer_type) // (name of file, designer type) //
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(selectedDesigner => {
              this.arrayForTypeDataFiles = [];
                  this.designerFile = selectedDesigner;  // this is the designer file //
                  this.isLoading = false;
                  if(this.designer_type === 'config') {
                    this.addControlsToConfigTypeForm();
                  }
                  if(this.designer_type === 'data') {
                    this.createArrayForTypeDatafile(this.dataFile?.value?.content)
                    this.addControlsToDataTypeForm();
                  }
                },
                (error: Error) => {
                  this.isLoading = false;
                  console.log(error?.message)
                })
      }
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // detect form changes //
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }

  // setting-up form //
  initializeForm(): void {
      this.dataForm = this.fb.group({ })
  }

  // make the sorting in ngFor, like in JSON-file
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  onSubmit(): void {
    this.formResults.emit(this.dataForm)
    this.changesAreSaved = true;
  }


  addControlsToConfigTypeForm() {
    for (const field in this.jsonDataFile ) {
      this.dataForm.addControl(field , this.fb.group({}));
      for (const fieldItem in this.jsonDataFile[field]) {
        if (typeof this.jsonDataFile[field][fieldItem] !== 'object') {
          (this.dataForm.get(field) as FormGroup)
              .addControl(fieldItem, this.fb.control(this.jsonDataFile[field][fieldItem], this.validationService.set(['Required'])))
        }
        if (typeof this.jsonDataFile[field][fieldItem] === 'object' && isArray(this.jsonDataFile[field][fieldItem])) {
          (this.dataForm.get(field) as FormGroup)
              .addControl(fieldItem, this.fb.array([this.fb.control(this.jsonDataFile[field][fieldItem])]))
        }
      }
    }
  }

  addControlsToDataTypeForm() {
      for (const title in this.jsonDataFile) {
          this.dataForm.addControl(title, this.fb.array([]))
          for (const item in this.jsonDataFile[title]) {
              const newGroup = new FormGroup({});
              for(const value in this.jsonDataFile[title][item]) {
                  if (isArray(this.jsonDataFile[title][item][value])) {
                    newGroup.addControl(value, this.fb.array([this.fb.control(this.jsonDataFile[title][item][value])]))
                  } else {
                    newGroup.addControl(value, this.fb.control(this.jsonDataFile[title][item][value], this.validationService.set(['Required'])))
                  }
              }
            (this.dataForm.get(title) as FormArray).push(newGroup)
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

  stringBeforeUnderscore(str): string {
    if (str === '') {
      return str;
    } else {
      const index = str.indexOf('_');
      return str.substring(0, index);
    }
  }

  // get changed values from typeOfFields components //
  getResults(value, formGroup, formControl) {
    this.dataForm = this.returningResultsService.get(this.dataForm, formGroup, formControl, value, this.designer_type, this.dataFile?.key);
    this.changesAreSaved = false;   // when receive values changes, ask from user to save
  }

  createArrayForTypeDatafile(dataFile) {
     for(const items in dataFile) {
       for(const item in dataFile[items]) {
         this.arrayForTypeDataFiles.push(dataFile[items][item])
       }
     }
  }


  addNewItemToTypeDataFile() {
      const component = this.designerFile?.designer;
      const newGroup = new FormGroup({})
      for(const item in component) {
        for (const title in component[item].components) {
        if ((component[item].components)[title].type.includes('array') ) {
            newGroup.addControl(title, this.fb.array(['']))
        } else {
            newGroup.addControl(title, this.fb.control(''))
          }
        }

      }
    (this.dataForm.get(this.designerFile?.file) as FormArray).push(newGroup)
      this.arrayForTypeDataFiles.push({});
  }

}
