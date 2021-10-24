import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GamePluginDataModel} from '../../models/game-plugin-data-model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MarkerModel} from '../../models/marker-model';
import {Subject} from 'rxjs';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {Game} from '../../../games/models/games/game';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';

@Component({
  selector: 'app-geomakeit-plugin-markers-box',
  templateUrl: './geomakeit-plugin-markers-box.component.html',
  styleUrls: ['./geomakeit-plugin-markers-box.component.css']
})
export class GeomakeitPluginMarkersBoxComponent implements OnInit, OnChanges, OnDestroy {

  @Input() gamePluginArray: GamePluginDataModel[]
  markersArray?: MarkerModel[];
  markersForm: FormGroup
  markerGroup: FormGroup;
  gamePluginData: GamePluginDataModel;
  project?: Game;

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
    this.project = <Game>JSON.parse(sessionStorage.getItem('project'));
    this.initializeForm();
  }

  ngOnDestroy() {
    this.saveChangesOnExit()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.gamePluginData = this.gamePluginArray.filter(e => e.name === 'markers').pop();
    this.markersArray = <MarkerModel[]><any>this.gamePluginArray.filter(e => e.name === 'markers').map(k => k.contents).pop();
    this.addValuesToForm()
  }

  initializeForm() {
    this.markersForm = this.fb.group({
      markersFormArray: this.fb.array([])
    });
  }

  saveChangesOnExit() {
    const markersObject = {
      [this.gamePluginData.name]: JSON.stringify(this.markersForm.get('markersFormArray').value)
    }
    this.gamePluginDataService.updateGamePluginData(this.project?.id, this.gamePluginData?.plugin_release_id, markersObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
          console.log('markers updated!!!');
    },
        (error: ErrorResponseModel) => {
            console.log(error.message, error.errors)
        })
  }

  addValuesToForm() {
    if(this.markersArray?.length > 0) {
      for(const item of this.markersArray) {
        const newBox = this.markers_box();
        newBox.get('unique_id').setValue(item?.unique_id);
        newBox.get('title').setValue(item?.title);
        newBox.get('position').get('latitude').setValue(item?.position.latitude);
        newBox.get('position').get('longitude').setValue(item?.position.longitude);
        (this.markersForm.get('markersFormArray') as FormArray).push(newBox);
      }
    }
  }

  addNewDialogBox() {
    (this.markersForm.get('markersFormArray') as FormArray).push(this.markers_box());
    this.markersArray.push(this.markers_box()?.value);
  }

  removeMarkerBox(index: number) {
    (this.markersForm.get('markersFormArray') as FormArray).removeAt(index);
    this.markersArray.splice(index, 1);
  }

  get markerBoxArray() {
    return (this.markersForm.get('markersFormArray') as FormArray)?.value;
  }


  markers_box(): FormGroup {
    return this.fb.group({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      position: this.fb.group({
        latitude: this.fb.control(''),
        longitude: this.fb.control('')
      })
    })
  }

}
