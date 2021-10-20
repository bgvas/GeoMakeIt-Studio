import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../models/game-plugin-data-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AlertDialogModel} from '../models/alert-dialog-model';

@Component({
  selector: 'app-geomakeit-plugin-alert-dialog-box',
  templateUrl: './geomakeit-plugin-alert-dialog-box.component.html',
  styleUrls: ['./geomakeit-plugin-alert-dialog-box.component.css']
})
export class GeomakeitPluginAlertDialogBoxComponent implements OnInit, OnChanges {

  @Input() gamePluginArray?: GamePluginDataModel[]
  alertDialogForm: FormGroup
  dialogBox: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
   if(typeof this.gamePluginArray !== 'undefined') {
     this.addValuesToForm();
   }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.addValuesToForm()
  }

  initializeForm() {
    this.alertDialogForm = this.fb.group({
      alertsArray: this.fb.array([])
    });

  }

  onSubmit() {
  }

  addValuesToForm() {
   if(this.gamePluginArray.length > 0) {
     for(const item of this.gamePluginArray[0]?.contents) {
       const alertDialog = <AlertDialogModel>Object(item);
       const newBox = this.alert_dialog_box();
       newBox.get('unique_id').setValue(alertDialog.unique_id);
       newBox.get('title').setValue(alertDialog.title);
       newBox.get('message').setValue(alertDialog.message);
       newBox.get('cancelable').setValue(alertDialog.cancellable);
       newBox.get('positive_button')?.get('text').setValue(alertDialog?.positive_button?.text);
       newBox.get('positive_button')?.get('action').setValue(alertDialog?.positive_button?.action);
       newBox.get('neutral_button')?.get('text').setValue(alertDialog?.neutral_button?.text);
       newBox.get('neutral_button')?.get('action').setValue(alertDialog?.neutral_button?.action);
       newBox.get('negative_button')?.get('text').setValue(alertDialog?.negative_button?.text);
       newBox.get('negative_button')?.get('action').setValue(alertDialog?.negative_button?.action);

       (this.alertDialogForm.get('alertsArray') as FormArray).push(newBox);
     }
     console.log(this.alertDialogForm);
     console.log(this.gamePluginArray)
   }

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
