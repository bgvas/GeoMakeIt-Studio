import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AlertDialogModel} from '../../models/alert-dialog-model';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {Game} from '../../../games/models/games/game';


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
    if (typeof this.gamePlugins?.filter(e => e['name'] === 'alert_dialogs')?.pop()?.contents !== 'undefined') {
      const content = this.gamePlugins?.filter(e => e['name'] === 'alert_dialogs')?.pop()?.contents || '';
      this.alertDialogArray = <AlertDialogModel[]>JSON.parse(content) || [];
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
          console.log('alert_dialogs updated!!!');
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
      (this.alertDialogForm?.get('alertsArray') as FormArray).push(this.fb.group(newItem));
    }
  }

  returnedData(buttonForm: any, index: number) {
    ((this.alertDialogForm?.get('alertsArray') as FormArray)?.
      at(index)?.get('positive_button') as FormGroup).setValue(buttonForm?.positive_button);
    ((this.alertDialogForm?.get('alertsArray') as FormArray)?.
      at(index)?.get('neutral_button') as FormGroup).setValue(buttonForm?.neutral_button);
    ((this.alertDialogForm?.get('alertsArray') as FormArray)?.
      at(index)?.get('negative_button') as FormGroup).setValue(buttonForm?.negative_button);
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
      message: this.fb.control(''),
      positive_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      }),
      neutral_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      }),
      negative_button: this.fb.group({
        text: this.fb.control(''),
        action: this.fb.control('')
      })
    })
  }
}
