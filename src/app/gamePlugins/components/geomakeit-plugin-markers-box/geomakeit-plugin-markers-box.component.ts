import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MarkerModel} from '../../models/marker-model';
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

  @Input() gamePlugins: any;
  markersArray?: MarkerModel[];
  markersForm: FormGroup
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
    this.loadMarkerContents();
    this.initializeForm();
    this.addValuesToForm();
  }

  initializeForm() {
    this.markersForm = this.fb.group({
      markersFormArray: this.fb.array([])
    });
  }

  loadMarkerContents() {
    const contents = this.gamePlugins?.filter(e => e['name'] === 'markers')?.pop()?.contents || null;
    this.markersArray = <MarkerModel[]>JSON.parse(contents);
  }

  saveChangesOnExit() {
    const markersObject = {
      'markers': JSON.stringify(this.markersForm.get('markersFormArray').value)
    }
    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, markersObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
          console.log('markers updated!!!');
    },
        (error: ErrorResponseModel) => {
            console.log(error.message, error.errors)
        })
  }

  addValuesToForm() {
    if(this.markersArray?.length > 0) {
      console.log(this.markersArray);
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

  addNewMarkerBox() {
   this.markersArray.push(this.markers_box().value);
   (this.markersForm.get('markersFormArray') as FormArray).push(this.markers_box());

  }

  removeMarkerBox(index: number) {
    (this.markersForm.get('markersFormArray') as FormArray).removeAt(index);
    this.markersArray.splice(index, 1);
  }

  get markerBoxArray() {
    return (this.markersForm.get('markersFormArray') as FormArray);
  }


  markers_box(): FormGroup {
    return new FormGroup({
      unique_id: this.fb.control(''),
      title: this.fb.control(''),
      position: this.fb.group({
        latitude: this.fb.control(''),
        longitude: this.fb.control('')
      })
    })
  }

}
