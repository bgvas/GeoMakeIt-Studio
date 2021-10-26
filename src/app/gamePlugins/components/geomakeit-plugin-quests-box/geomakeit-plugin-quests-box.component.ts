import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../../models/game-plugin-data-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MarkerModel} from '../../models/marker-model';
import {Subject} from 'rxjs';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {Game} from '../../../games/models/games/game';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {QuestsModel} from '../../models/quests-model';

@Component({
  selector: 'app-geomakeit-plugin-quests-box',
  templateUrl: './geomakeit-plugin-quests-box.component.html',
  styleUrls: ['./geomakeit-plugin-quests-box.component.css']
})
export class GeomakeitPluginQuestsBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePluginArray: GamePluginDataModel[]
  questsArray?: QuestsModel[];
  questsForm: FormGroup
  questsValuesArray: QuestsModel[];
  onFirstJoinValuesArray = Array<string>();
  gamePluginData: GamePluginDataModel;
  project?: Game;

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) {
  }

  ngOnInit(): void {
    /*this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();*/
  }

  ngOnDestroy() {
   // this.saveChangesOnExit()
  }

  ngOnChanges(changes: SimpleChanges) {
   /* this.gamePluginData = this.gamePlugins.filter(e => e.name === 'quests').pop();
    this.questsArray = <QuestsModel[]><any>this.gamePlugins.filter(e => e.name === 'quests').map(k => k.contents).pop();
    this.addValuesToForm()*/
  }

  initializeForm() {
    this.questsForm = this.fb.group({
      on_first_join: this.fb.array([]),
      quests: this.fb.array([])
    });
  }

  saveChangesOnExit() {
    const questsObject = {
      [this.gamePluginData.name]: JSON.stringify(this.questsForm.get('quests').value)
    }
    this.gamePluginDataService.updateGamePluginData(this.project?.id, this.gamePluginData?.plugin_release_id, questsObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
          console.log('quests updated!!!');
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

  addValuesToForm() {
    if(this.questsArray?.length > 0) {
      for(const item of this.questsArray) {
        const newBox = this.quests_box();
        newBox.get('unique_id').setValue(item?.unique_id);
        newBox.get('title').setValue(item?.title);
        newBox.get('description').setValue(item?.description);
        newBox.get('on_assignment').setValue(item?.on_assignment);
        newBox.get('actions').setValue(item?.actions);
        newBox.get('on_complete').setValue(item?.on_complete);

        (this.questsForm.get('quests') as FormArray).push(newBox);
      }
    }
    /*(this.questsForm?.get('on_first_join') as FormArray)?.setValue(this.gamePluginData?.contents['on_first_join']);
    Array<string>(this.gamePluginData?.contents['on_first_join']).forEach(value => this.onFirstJoinValuesArray.push(value))
    console.log(this.gamePluginData?.contents['on_first_join']);
    console.log(this.onFirstJoinValuesArray);*/
  }

  addNewDialogBox() {
    (this.questsForm.get('quests') as FormArray).push(this.quests_box());
    this.questsArray.push(this.quests_box()?.value);
  }

  removeQuestsBox(index: number) {
    (this.questsForm.get('quests') as FormArray).removeAt(index);
    this.questsArray.splice(index, 1);
  }

  get questBoxArray() {
    return (this.questsForm.get('quests') as FormArray)?.value;
  }


  quests_box(): FormGroup {
    return this.fb.group({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      description: this.fb.control(''),
      on_assignment: this.fb.control(''),
      actions: this.fb.array([]),
      on_complete: this.fb.array([])
      })
  }

}
