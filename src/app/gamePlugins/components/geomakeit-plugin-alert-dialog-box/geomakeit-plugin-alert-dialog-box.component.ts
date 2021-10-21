import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../../models/game-plugin-data-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AlertDialogModel} from '../../models/alert-dialog-model';

@Component({
  selector: 'app-geomakeit-plugin-alert-dialog-box',
  templateUrl: './geomakeit-plugin-alert-dialog-box.component.html',
  styleUrls: ['./geomakeit-plugin-alert-dialog-box.component.css']
})
export class GeomakeitPluginAlertDialogBoxComponent implements OnInit, OnChanges {

  @Input() gamePluginArray: GamePluginDataModel
  alertDialogArray?: AlertDialogModel[];
  alertDialogForm: FormGroup
  dialogBox: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.alertDialogArray = <any>this.gamePluginArray?.contents;
    this.addValuesToForm()
  }

  initializeForm() {
    this.alertDialogForm = this.fb.group({
      alertsArray: this.fb.array([])
    });
  }

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

  addNewDialogBox() {
    (this.alertDialogForm.get('alertsArray') as FormArray).push(this.alert_dialog_box());
    this.alertDialogArray.push(this.alert_dialog_box()?.value);
  }

  removeDialogBox(index: number) {
    (this.alertDialogForm.get('alertsArray') as FormArray).removeAt(index);
    this.alertDialogArray.splice(index, 1);
  }

  get alertDialogBoxArray() {
    return (this.alertDialogForm.get('alertsArray') as FormArray)?.value;
  }


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
