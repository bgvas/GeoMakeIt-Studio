import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../../models/game-plugin-data-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AlertDialogModel} from '../../models/alert-dialog-model';
import {Subject} from 'rxjs';
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

  @Input() gamePluginArray: GamePluginDataModel[]
  alertDialogArray?: AlertDialogModel[];
  alertDialogForm: FormGroup
  gamePluginData: GamePluginDataModel;
  dialogBox: FormGroup;
  project?: Game;

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnDestroy() {
   // this.saveChangesOnExit();
  }

  ngOnChanges(changes: SimpleChanges) {
   this.gamePluginData = this.gamePluginArray.filter(e => e.name === 'alert_dialogs').pop();
   this.alertDialogArray = <AlertDialogModel[]><any>this.gamePluginArray.filter(e => e.name === 'alert_dialogs').map(k => k.contents).pop();
   this.addValuesToForm()
  }

  initializeForm() {
    this.alertDialogForm = this.fb.group({
      alertsArray: this.fb.array([])
    });
  }

  /*saveChangesOnExit() {
    const alertDialogObject = {
      [this.gamePluginData.name]: JSON.stringify(this.alertDialogForm.get('alertsArray').value)
    }
    this.gamePluginDataService.updateGamePluginData(this.project?.id, this.gamePluginData?.plugin_release_id, alertDialogObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
          console.log('alert_dialogs updated!!!');
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }*/

  addValuesToForm() {
   if(this.alertDialogArray?.length > 0) {
     for(const item of this.alertDialogArray) {
       const newBox = this.alert_dialog_box();
       newBox.get('unique_id').setValue(item?.unique_id);
       newBox.get('title').setValue(item?.title);
       newBox.get('message').setValue(item?.message);
       newBox.get('cancelable').setValue(item?.cancellable);
       newBox.get('positive_button')?.get('text').setValue(item?.positive_button?.text);
       newBox.get('positive_button')?.get('action').setValue(item?.positive_button?.action);
       newBox.get('neutral_button')?.get('text').setValue(item?.neutral_button?.text);
       newBox.get('neutral_button')?.get('action').setValue(item?.neutral_button?.action);
       newBox.get('negative_button')?.get('text').setValue(item?.negative_button?.text);
       newBox.get('negative_button')?.get('action').setValue(item?.negative_button?.action);

       (this.alertDialogForm.get('alertsArray') as FormArray).push(newBox);
     }
   }
  }

  /*addNewDialogBox() {
    (this.alertDialogForm.get('alertsArray') as FormArray).push(this.alert_dialog_box());
    this.alertDialogArray.push(this.alert_dialog_box()?.value);
  }

  removeDialogBox(index: number) {
    (this.alertDialogForm.get('alertsArray') as FormArray).removeAt(index);
    this.alertDialogArray.splice(index, 1);
  }

  get alertDialogBoxArray() {
    return (this.alertDialogForm.get('alertsArray') as FormArray)?.value;
  }*/


  alert_dialog_box(): FormGroup {
    return this.fb.group({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      cancelable: this.fb.control(''),
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
