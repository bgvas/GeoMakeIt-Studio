import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {GameAuthenticationModel} from '../../../../games/models/gameAuthentication/GameAuthenticationModel';
import {AlertDialogModel} from '../../../models/alert-dialog-model';
import {take} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../../error-handling/error_response_model';
import {GamePluginDataService} from '../../../services/gamePluginData.service';
import {Game} from '../../../../games/models/games/game';

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
  contentChanged = false;
  providers = ['Email', 'Facebook', 'Twitter', 'GitHub', 'allow anonymous'];

  constructor(private fb: FormBuilder, private gamePluginDataService: GamePluginDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.gamePlugins?.length > 0) {
      this.loadProjectsAuthContent();
    }
  }

  ngOnDestroy() {
    if (this.contentChanged) {
      this.saveChangesOnExit();
    }
  }

  loadProjectsAuthContent() {
    if(typeof this.gamePlugins?.filter(e => e['name'] === 'config')?.pop() !== 'undefined' ) {
      this.authContent = <GameAuthenticationModel>JSON.parse(this.gamePlugins?.filter(e => e['name'] === 'config')?.pop()?.contents);
      this.authIsEnabled = this.authContent?.authentication.enabled;
      this.providersArray = this.authContent?.authentication.providers;
    }
  }


  authState(enabled) {
   this.authIsEnabled = enabled.checked;
   if (!this.authIsEnabled) {
     this.providersArray = [];
   }
   this.contentChanged = true;
  }

  updateProviders(_providers) {
   this.providersArray = _providers
   this.contentChanged = true;
  }

  saveChangesOnExit() {
    this.authContent.authentication.enabled = this.authIsEnabled;
    this.authContent.authentication.providers = this.providersArray;
    const authObject = {
      'config': JSON.stringify(this.authContent)
    };
    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, authObject)
        .pipe(take(1)).subscribe(saveUpdatedObject => {
        },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors)
        })
  }

}
