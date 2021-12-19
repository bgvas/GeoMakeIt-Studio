import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../../../models/game-plugin-data-model';
import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {GamePluginDataService} from '../../../services/gamePluginData.service';
import {Game} from '../../../../games/models/games/game';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../../error-handling/error_response_model';
import {QuestsModel} from '../../../models/quests-model';

@Component({
  selector: 'app-geomakeit-plugin-quests-box',
  templateUrl: './geomakeit-plugin-quests-box.component.html',
  styleUrls: ['./geomakeit-plugin-quests-box.component.css']
})
export class GeomakeitPluginQuestsBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePlugins?: any;
  questsForm?: FormGroup
  questsValuesArray = Array<QuestsModel>();
  onFirstJoinValuesArray = Array<string>();
  project?: Game;
  selected = -1;
  selectedQuest?: QuestsModel;

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) {
  }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnDestroy() {
   this.saveChangesOnExit()
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.gamePlugins?.length > 0) {
      this.loadQuestContents();
    }
  }

  initializeForm() {
    this.questsForm = this.fb.group({
      on_first_join: this.fb.array([]),
      quests: this.fb.array([])
    });
  }

  loadQuestContents() {
    if (typeof this.gamePlugins?.filter(e => e['name'] === 'quests')?.pop() !== 'undefined' ) {
      const contents = this.gamePlugins?.filter(e => e['name'] === 'quests')?.pop()?.contents || null;
      this.questsValuesArray = <QuestsModel[]>JSON.parse(contents)?.quests;
      this.onFirstJoinValuesArray = JSON.parse(contents)?.on_first_join;
      this.initializeForm();
      this.addValuesToForm();
    }
  }

  saveChangesOnExit() {
    const questsObject = {
      'quests': JSON.stringify(this.questsForm?.value)
    }

    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, questsObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

  addNewFirstJoinRecord() {
    (this.questsForm.get('on_first_join') as FormArray).push(this.fb.control(''));
    this.onFirstJoinValuesArray.push('');
  }

  removeRecordFromFirstJoin(index: number) {
    (this.questsForm.get('on_first_join') as FormArray).removeAt(index);
    this.onFirstJoinValuesArray.splice(index, 1);
  }

  addValuesToForm() {
    if(this.questsValuesArray?.length > 0) {
      for(const item of this.questsValuesArray) {
        const newQuestBox = this.quests_box();
        newQuestBox.get('unique_id').setValue(item.unique_id);
        newQuestBox.get('title').setValue(item.title);
        newQuestBox.get('description').setValue(item.description);
        for (const action of item.actions) {
          (newQuestBox.get('actions') as FormArray).push(this.fb.control(action));
        }
        for (const action of item.on_assignment) {
          (newQuestBox.get('on_assignment') as FormArray).push(this.fb.control(action));
        }
        for (const action of item.on_complete) {
          (newQuestBox.get('on_complete') as FormArray).push(this.fb.control(action));
        }
        (this.questsForm.get('quests') as FormArray).push(newQuestBox);
      }
    }

    if(this.onFirstJoinValuesArray?.length > 0) {
      for (const item of this.onFirstJoinValuesArray) {
        (this.questsForm.get('on_first_join') as FormArray).push(this.fb.control(item));
      }
    }
  }

  addNewQuestsBox() {
    (this.questsForm.get('quests') as FormArray).push(this.quests_box());
    this.questsValuesArray.push(this.quests_box()?.value);
  }

  onClickQuest(x) {
    this.selectedQuest = this.questsValuesArray[x];
    this.selected = x;
  }

  removeQuestsBox(index: number) {
    (this.questsForm.get('quests') as FormArray).removeAt(index);
    this.questsValuesArray.splice(index, 1);
    this.selectedQuest = this.questsValuesArray[index - 1] || null;
    this.selected = index - 1;
  }

  get questBoxArray() {
    return (this.questsForm.get('quests') as FormArray)?.value;
  }

  addNewRecordToArray(index, name, selectedQuestArray) {
    ((this.questsForm.get('quests') as FormArray).at(index).get(name) as FormArray).push(this.fb.control(''));
    selectedQuestArray.push('');
  }

  removeRecordFromArray(index, name, selectedQuestArray, x) {
    ((this.questsForm.get('quests') as FormArray).at(index).get(name) as FormArray).removeAt(x);
    selectedQuestArray.splice(x, 1);
  }


  quests_box(): FormGroup {
    return this.fb.group({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      description: this.fb.control(''),
      on_assignment: this.fb.array([]),
      actions: this.fb.array([]),
      on_complete: this.fb.array([])
      })
  }

}
