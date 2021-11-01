import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {GameAuthenticationModel} from '../../../games/models/gameAuthentication/GameAuthenticationModel';
import {AlertDialogModel} from '../../models/alert-dialog-model';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {GamePluginDataService} from '../../services/gamePluginData.service';
import {Game} from '../../../games/models/games/game';

@Component({
  selector: 'app-geomakeit-plugins-project-auth-box',
  templateUrl: './geomakeit-plugins-project-auth-box.component.html',
  styleUrls: ['./geomakeit-plugins-project-auth-box.component.css']
})
export class GeomakeitPluginsProjectAuthBoxComponent implements OnInit, OnChanges, OnDestroy{

  @Input() gamePlugins?: any[];
  authForm: FormGroup;
  authContent?: GameAuthenticationModel;
  authIsEnabled: boolean;
  providersArray = new Array<string>();
  project = <Game>JSON.parse(sessionStorage.getItem('project'));

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.gamePlugins?.length > 0) {
      this.loadProjectsAuthContent();
    }
  }

  ngOnDestroy() {
    this.saveChangesOnExit();
  }

  loadProjectsAuthContent() {
    if(this.gamePlugins?.length > 0 && typeof this.gamePlugins?.filter(e => e['name'] === 'config')?.pop() !== 'undefined' ) {
      this.authContent = <GameAuthenticationModel>JSON.parse(this.gamePlugins?.filter(e => e['name'] === 'config')?.pop()?.contents) || null;
      this.providersArray = this.authContent?.providers || [];
      this.authIsEnabled = this.authContent?.enabled || false;
      this.initializeForm();
      this.addValuesToForm();
    }
  }

  initializeForm() {
    this.authForm = this.fb.group({
      enabled: this.fb.control(''),
      providers: this.fb.array([])
    })
  }

  addValuesToForm() {
    this.authForm?.get('enabled').setValue(this.authIsEnabled);
    for (const item of this.providersArray) {
      (this.authForm?.get('providers') as FormArray).push(this.fb.control(item));
    }
  }

  authState(enabled) {
   this.authIsEnabled = enabled.checked;
  }

  addProvider() {
    (this.authForm?.get('providers') as FormArray).push(this.fb.control(''));
   this.providersArray.push('');
  }

  removeProvider(index: number) {
    (this.authForm?.get('providers') as FormArray).removeAt(index);
   this.providersArray.splice(index, 1);
  }

  saveChangesOnExit() {
    const authObject = {
      'config': JSON.stringify(<GameAuthenticationModel>(this.authForm?.value))
    };
    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, authObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
          console.log('config updated!!!');
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }
}
