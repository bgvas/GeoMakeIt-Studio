import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Subject} from 'rxjs';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../classes/error/error';
import {NotificationsComponent} from '../notifications/notifications.component';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {AppService} from '../../../app.service';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  projectList = new Array<Game>();
  pluginList = new Array<Plugin>();
  displaySpinnerForProject: boolean;
  displaySpinnerForPlugins: boolean;
  errorFromProjectSubscribe: any;
  errorFromPluginSubscribe: any;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();
  projects = [];


  constructor(private gameService: GameService, private pluginService: PluginService, private appService: AppService) { }

  ngOnInit() {
      this.displaySpinnerForProject = true;
      this.loadListOfProjects();

      if (this.isPluginDeveloper()) {
          this.displaySpinnerForPlugins = true;
          this.loadListOfPlugins();
      }

  }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

  loadListOfProjects() {

      this.gameService.getAllGamesByUserId(this.appService.GetCurrentUser().id).pipe(takeUntil(this.unsubscribe)).subscribe( projects => {
          this.projectList = projects['games'];
          this.displaySpinnerForProject = false;    // hide spinner
      },
          (error: Error) => {
              console.log('List of Projects: ' + error.code + ' - ' + error.message);
              this.errorFromProjectSubscribe = error.displayed_message;
              this.displaySpinnerForProject = false;    // hide spinner
          }
      )
  }

   loadListOfPlugins() {
       this.pluginService.getAllPluginsOfUser(this.appService.GetCurrentUser().id).pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
             this.pluginList = projects['plugins'];
             this.displaySpinnerForPlugins = false;    // hide spinner
          },
           (error: Error) => {
                   console.log('List of Plugins: ' + error.code + ' - ' + error.message);
                   this.errorFromPluginSubscribe = error.displayed_message;
                   this.displaySpinnerForPlugins = false;    // hide spinner
           }
       )
   }

  onUpdate(event) {
      if (event) {
          this.loadListOfPlugins();
      }
  }

  onCreateProject(project) {
      if (typeof project !== 'undefined') {
          this.projectList.push(project);
          this.loadListOfProjects();
      }
  }

  onCreatePlugin(plugin) {
      if (typeof plugin !== 'undefined') {
          this.pluginList.push(plugin);
          this.loadListOfPlugins();
      }
  }

  // the deletion of the project, will be done in Project-Card-Component //
  onDeleteProject(project) {
    if (typeof project !== 'undefined') {
       this.projectList.splice(this.projectList.indexOf(project), 1);
      if (this.projectList.length === 0) {
          this.projectList = new Array<Game>();
      } else {
          this.loadListOfProjects();
      }
    }
  }

  isPluginDeveloper(): boolean {
      return (localStorage.getItem('role_id') === '3');
  }

    // the deletion of the plugin, will be done in Plugin-Card-Component //
    onDeletePlugin(plugin) {
        if (typeof plugin !== 'undefined') {
            this.pluginList.splice(this.pluginList.indexOf(plugin), 1);
            if (this.pluginList.length === 0) {
                this.pluginList = new Array<Plugin>();
            } else {
                this.loadListOfPlugins();
            }
        }
    }


}
