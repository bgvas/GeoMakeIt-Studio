import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GamePluginsService} from '../../services/game-plugins.service';
import {GamePluginAllDataFilesModel} from '../../models/game-plugin-all-data-files-model';
import {Error} from '../../../error-handling/error/error';
import {Observable, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-json-files-configuration',
  templateUrl: './json-files-configuration.component.html',
  styleUrls: ['./json-files-configuration.component.css']
})
export class JsonFilesConfigurationComponent implements OnInit, OnDestroy {

  @Input() isStepper: boolean;
  gamePluginsArray = Array<GamePluginAllDataFilesModel>();
  names = new Array<string>();
  jsonFile?: any;
  nameOfJsonFile?: string;
  errorMessage = '';
  refreshDataFile$: Subscription;
  private unsubscribe = new Subject<void>();


  constructor(private gamePluginService: GamePluginsService, private router: Router, private location: Location) {
    /*this.gamePluginService.getUpdate().pipe(takeUntil(this.unsubscribe)).subscribe(actionSignal => {
      this.load_Button_FileTitles();
      console.log('updated');
    },
        (error: Error) => {
          this.errorMessage = error.displayed_message
          console.log('error in constructor: ' + error.message);
        })*/
  }

  ngOnInit(): void {
    this.load_Button_FileTitles()
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onExit() {
      this.router.navigate(['games/map']);
  }


  load_Button_FileTitles() {
    const gameId = (JSON.parse(sessionStorage.getItem('project'))['id']) || 0;
    this.gamePluginService?.getAllJsonContentByGameId(gameId)
        .pipe(take(1))
        .subscribe(name => {
      this.gamePluginsArray = name?.data
    },
        (error: Error) => {
          //this.errorMessage = 'No plugins found'
          console.log(error?.message)
        })
  }

  onButtonClick(plugin_id: number, name: string) {
    const gameId = (JSON.parse(sessionStorage.getItem('project'))['id']) || 0;
    this.refreshDataFile$ = this.gamePluginService.getJsonContentByGameIdPluginIdAndName(gameId, plugin_id, name)
        .pipe(takeUntil(this.unsubscribe)).subscribe(file => {
            this.jsonFile = file;
            this.nameOfJsonFile = name;
    })
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
              this.load_Button_FileTitles();
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
