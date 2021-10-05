import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamePluginsService} from '../../services/game-plugins.service';
import {GamePluginAllDataFilesModel} from '../../models/game-plugin-all-data-files-model';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';

@Component({
  selector: 'app-json-files-configuration',
  templateUrl: './json-files-configuration.component.html',
  styleUrls: ['./json-files-configuration.component.css']
})
export class JsonFilesConfigurationComponent implements OnInit, OnDestroy {

  gamePluginsArray?: GamePluginAllDataFilesModel[];
  names = new Array<string>();
  jsonFile?: any;
  nameOfJsonFile?: string;
  errorMessage = '';
  private unsubscribe = new Subject<void>();


  constructor(private gamePluginService: GamePluginsService) {
    this.gamePluginService.getUpdate().pipe(takeUntil(this.unsubscribe)).subscribe(actionSignal => {
      this.load_Button_FileTitles();
      console.log('updated');
    },
        (error: Error) => {
          this.errorMessage = error.displayed_message
          console.log('error in constructor: ' + error.message);
        })
  }

  ngOnInit(): void {
    this.load_Button_FileTitles()
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  load_Button_FileTitles() {
    const gameId = (JSON.parse(sessionStorage.getItem('project'))['id']) || 0;
    this.gamePluginService?.getAllJsonContentByGameId(gameId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(name => {
      this.gamePluginsArray = name?.data
    },
        (error: Error) => {
          this.errorMessage = 'No plugins found'
          console.log(error?.message)
        })
  }

  onButtonClick(file) {
    this.load_Button_FileTitles();
    this.jsonFile = file;
    this.nameOfJsonFile = file?.key;
  }

  saveUpdatedJsonFiles(form: FormGroup, plugin_id: number) {
    const gameId = (JSON.parse(sessionStorage.getItem('project'))['id']) || 0;
    const contentFile = {
      'game_id': gameId,
      'plugin_id': plugin_id,
      'name': this.nameOfJsonFile,
      'content': form?.value
    }
    this.gamePluginService.saveUpdatedPlugins(contentFile, gameId)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(result => {
              console.log('File updated successfully!');
    },
            (error: Error) => {
             this.errorMessage = 'Error while updating file';
              console.log('Error while updating file');
            })
  }


  clearContentOnTabChange() {
    this.jsonFile = '';
  }

}
