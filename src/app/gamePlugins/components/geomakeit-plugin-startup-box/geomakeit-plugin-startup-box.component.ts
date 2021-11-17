import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Game} from '../../../games/models/games/game';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {GamePluginDataService} from '../../services/gamePluginData.service';


@Component({
  selector: 'app-geomakeit-plugin-startup-box',
  templateUrl: './geomakeit-plugin-startup-box.component.html',
  styleUrls: ['./geomakeit-plugin-startup-box.component.css']
})
export class GeomakeitPluginStartupBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePlugins = Array<any>();
  project?: Game;
  startUpArray = new Array<string>();
  startupForm?: FormGroup

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.gamePlugins?.length > 0) {
      this.loadStartupContents();
    }
  }

  ngOnDestroy() {
    this.saveChangesOnExit();
  }

  initializeForm() {
    this.startupForm = this.fb.group({
      startupFormArray: this.fb.array([])
    })
  }

  addValuesToForm() {
    for(const item of this.startUpArray) {
      (this.startupForm?.get('startupFormArray') as FormArray).push(this.fb.control(item));
    }
  }

  addNewRecordToArray() {
    (this.startupForm?.get('startupFormArray') as FormArray).push(this.fb.control(''));
    this.startUpArray.push('');
  }

  removeRecordFromArray(index) {
    (this.startupForm?.get('startupFormArray') as FormArray).removeAt(index);
    this.startUpArray.splice(index, 1);
  }

  loadStartupContents() {
      if (typeof this.gamePlugins?.filter(e => e['name'] === 'startup')?.pop() !== 'undefined') {
        this.startUpArray = (<string[]>(JSON.parse((this.gamePlugins?.filter(e => e['name'] === 'startup')?.pop()?.contents))));
        this.initializeForm();
        this.addValuesToForm();
      }
  }

  saveChangesOnExit() {
    const onStartupObject = {
      'startup': JSON.stringify(this.startupForm.get('startupFormArray').value)
    };

    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, onStartupObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

}
