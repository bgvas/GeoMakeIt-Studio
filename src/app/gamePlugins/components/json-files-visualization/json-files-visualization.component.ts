import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
    Output, SimpleChanges } from '@angular/core';
import {GamePluginsService} from '../../services/game-plugins.service';
import {Subject} from 'rxjs';
import {DesignerModel} from '../../models/designer-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ValidationsService} from '../../../shared/services/validations/validations.service';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../error-handling/error/error';
import {ReturningResultsService} from '../../services/returning-results.service';



@Component({
  selector: 'app-json-files-visualization',
  templateUrl: './json-files-visualization.component.html',
  styleUrls: ['./json-files-visualization.component.css']
})
export class JsonFilesVisualizationComponent implements OnInit, OnChanges, OnDestroy {


  @Input() dataFile?: any;
  @Output() formResults = new EventEmitter<FormGroup>();
  jsonDataFile?: any;
  designerFile?: DesignerModel;
  dataForm?: FormGroup;
  arrayForTypeDataFiles = new Array<any>();
  isLoading: boolean;
  changesAreSaved = true;
  errorMessage = '';
  designer_type: string;
  private unsubscribe = new Subject<void>();

  constructor(private gamePluginService: GamePluginsService, private fb: FormBuilder ,
              private validationService: ValidationsService, private changeDetector: ChangeDetectorRef,
              private returningResultsService: ReturningResultsService) {
  }

  // while button clicked in main configuration screen, selecting the specific designer //
  ngOnChanges(changes: SimpleChanges): void {

    if (typeof this.dataFile?.value !== 'undefined') {
        this.jsonDataFile = this.dataFile?.value?.content;
        this.isLoading = true;
    }
    this.initializeForm();
    this.designer_type = this.dataFile?.value?.designer_type || null;   // declare the type of designer
        this.gamePluginService?.getDesignerFile(this.dataFile?.key) // (name of data file)//
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(selectedDesigner => {
                console.log('designer');
                this.designerFile = selectedDesigner;  // this is the designer file //
                if (typeof this.designerFile !== 'undefined') {
                    this.isLoading = false;
                    if (this.designer_type === 'config') {
                        this.gamePluginService.addControlsToConfigTypeForm(this.dataForm, this.jsonDataFile, this.designerFile)
                    }
                    if (this.designer_type === 'data') {
                        this.gamePluginService.addControlsToDataTypeForm(this.dataForm, this.jsonDataFile, this.designerFile);
                        this.createArrayForTypeDatafile(this.dataFile?.value?.content)
                    }
                } else {
                    this.designerFile = null;
                }
            },
                (error: Error) => {
                this.errorMessage = 'Error. Can\'t create configuration menus';
                  this.isLoading = false;
            })
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  // setting-up form //
  initializeForm(): void {
      this.dataForm = this.fb.group({ })
  }

  // make sorting in ngFor, same as JSON-file
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  onSubmit(): void {
    this.formResults.emit(this.dataForm)
    this.changesAreSaved = true;
  }

  stringAfterDot(str): string {
      return this.gamePluginService.stringAfterDot(str);
  }

  stringBeforeDot(str): string {
      return this.gamePluginService.stringBeforeDot(str);
  }

  stringBeforeUnderscore(str): string {
      return this.gamePluginService.stringBeforeUnderscore(str);
  }

  // get changed values from typeOfFields components //
  getResults(value, formGroup, formControl): void {
    this.dataForm = this.returningResultsService.get(this.dataForm, formGroup, formControl, value, this.designer_type, this.dataFile?.key);
    this.changesAreSaved = false;   // when receive value-changes, display message and ask from user to save
  }

  // create an array, with data-type-values, in order to display them in UI//
  createArrayForTypeDatafile(dataFile): void {
     for(const items in dataFile) {
       for(const item in dataFile[items]) {
         this.arrayForTypeDataFiles.push(dataFile[items][item])
       }
     }
  }

  addNewItemToTypeDataFile(): void {
      const component = this.designerFile?.designer;
      const newGroup = new FormGroup({})
      for(const item in component) {
          for (const title in component[item].components) {
              if ((component[item].components)[title].type.includes('array') ) {
                  newGroup.addControl(title, this.fb.array([]))
              } else {
                  newGroup.addControl(title, this.fb.control(''))
              }
          }
      }
      if((this.dataForm.get(this.designerFile?.file) as FormArray) === null) {
          this.dataForm.addControl(this.designerFile.file, new FormArray([]));
      }
     // add a new control into form //
     (this.dataForm.get(this.designerFile?.file) as FormArray).push(newGroup)
     // add a new record into array //
     this.arrayForTypeDataFiles.push({});
  }

  deleteItem(index: number) {
     // remove record from array //
      this.arrayForTypeDataFiles.splice(index, 1);
      // remove control from Form //
      (this.dataForm.get(this.designerFile?.file) as FormArray).removeAt(index);
      if((this.dataForm.get(this.designerFile.file) as FormArray)?.length === 0) {
          this.changesAreSaved = null;
      }
  }

  sendData(dataFile, componentItemTitle) {
      if(Object.keys(dataFile)?.length > 0 ) {
          return dataFile[this.stringBeforeDot(componentItemTitle)][this.stringAfterDot(componentItemTitle)];
      } else {
          return '';
      }
  }

}
