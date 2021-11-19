import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AlertDialogModel} from '../../models/alert-dialog-model';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {Game} from '../../../games/models/games/game';
import {AlertDialogButtonsModel} from '../../models/alert-dialog-buttons-model';


@Component({
  selector: 'app-geomakeit-plugin-alert-dialog-box',
  templateUrl: './geomakeit-plugin-alert-dialog-box.component.html',
  styleUrls: ['./geomakeit-plugin-alert-dialog-box.component.css']
})
export class GeomakeitPluginAlertDialogBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePlugins?: any[];
  alertDialogArray = Array<any>();
  alertDialogForm: FormGroup
  project?: Game;

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnDestroy() {
    this.saveChangesOnExit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.gamePlugins?.length > 0) {
      this.loadAlertDialogContents();
    }
  }

  initializeForm() {
    this.alertDialogForm = this.fb.group({
      alertsArray: this.fb.array([])
    });
  }

  loadAlertDialogContents() {
    if(typeof this.gamePlugins?.filter(e => e['name'] === 'alert_dialogs')?.pop() !== 'undefined') {
      const content = this.gamePlugins?.filter(e => e['name'] === 'alert_dialogs')?.pop()?.contents || null;
      this.alertDialogArray = <AlertDialogModel[]>JSON.parse(content);
      this.initializeForm();
      this.addValuesToForm();
    }
  }


  saveChangesOnExit() {
    const alertDialogObject = {
      'alert_dialogs': JSON.stringify(<AlertDialogModel[]>(this.alertDialogForm?.get('alertsArray').value))
    };
    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, alertDialogObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

  addValuesToForm() {
    for (const item of this.alertDialogArray) {
      const newItem = new AlertDialogModel();
      newItem.title = item?.title || '';
      newItem.unique_id = item?.unique_id || '';
      newItem.cancellable = item?.cancellable || false;
      newItem.message = item?.message || '';
      if (typeof item?.positive_button !== 'undefined') {
        newItem.positive_button = item?.positive_button
      }
      if (typeof item?.neutral_button !== 'undefined') {
        newItem.neutral_button = item?.neutral_button
      }
      if (typeof item?.negative_button !== 'undefined') {
        newItem.negative_button = item?.negative_button;
      }

      (this.alertDialogForm?.get('alertsArray') as FormArray).push(this.fb.group(newItem));
    }
  }

  returnedData(buttonForm: any, index: number) {
       if (buttonForm[0]?.positive_button !== null) {
         (((this.alertDialogForm?.get('alertsArray') as FormArray)?.at(index) as FormGroup)
             .setControl('positive_button', this.fb.group({
             text: this.fb.control(buttonForm[0]?.positive_button?.text),
             action: this.fb.control(buttonForm[0]?.positive_button?.action)
         })))
       }
       if (buttonForm[1]?.neutral_button !== null) {
        (((this.alertDialogForm?.get('alertsArray') as FormArray)?.at(index) as FormGroup)
            .setControl('neutral_button', this.fb.group({
              text: this.fb.control(buttonForm[1]?.neutral_button?.text),
              action: this.fb.control(buttonForm[1]?.neutral_button?.action)
            })))
       }
       if (buttonForm[2]?.negative_button !== null) {
         (((this.alertDialogForm?.get('alertsArray') as FormArray)?.at(index) as FormGroup)
             .setControl('negative_button', this.fb.group({
               text: this.fb.control(buttonForm[2]?.negative_button?.text),
               action: this.fb.control(buttonForm[2]?.negative_button?.action)
             })))
       }
  }

  addNewDialogBox() {
    (this.alertDialogForm?.get('alertsArray') as FormArray).push(this.alert_dialog_box());
    this.alertDialogArray.push(new AlertDialogModel());

  }

  removeDialogBox(index: number) {
    (this.alertDialogForm.get('alertsArray') as FormArray).removeAt(index);
    this.alertDialogArray.splice(index, 1);
  }


  alert_dialog_box(): FormGroup {
    return this.fb.group({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      cancellable: this.fb.control(''),
      message: this.fb.control('')
    })
  }
}
