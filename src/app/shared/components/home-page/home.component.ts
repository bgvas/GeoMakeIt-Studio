import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Observable, Subject} from 'rxjs';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../classes/error/error';
import {NotificationsComponent} from '../notifications/notifications.component';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {AppService} from '../../../app.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  projectList: Game[];
  pluginList: Plugin[];
  displaySpinnerForProject: boolean;
  displaySpinnerForPlugins: boolean;
  errorFromProjectSubscribe: Error;
  errorFromPluginSubscribe: Error;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();
  projects = [];


  constructor(private gameService: GameService, private pluginService: PluginService, private appService: AppService) { }

  ngOnInit() {
      this.loadListOfProjects();
      this.displaySpinnerForProject = true;
      if (this.isPluginDeveloper()) {
          this.displaySpinnerForPlugins = true;
          this.loadListOfPlugins();
      }
  }

  loadListOfProjects() {
      this.gameService.getAllGamesByUserId(this.appService.GetCurrentUser().id).subscribe( projects => {
          this.projectList = projects['games'];
          this.displaySpinnerForProject = false;    // hide spinner
      },
          (error: Error) => {
          if (error.code === 404) {
              this.projectList = [];
          } else {
              console.log('List of Projects: ' + error.code + ' - ' + error.message);
              this.errorFromProjectSubscribe = error;
          }
            this.displaySpinnerForProject = false;    // hide spinner
          }
      )
  }

   loadListOfPlugins() {
       this.pluginService.getAllPluginsOfUser(this.appService.GetCurrentUser().id).subscribe(plugins => {
             this.pluginList = plugins.data;
             this.displaySpinnerForPlugins = false;    // hide spinner
          },
           (error: Error) => {
               if (error.code === 404) {
                   this.pluginList = [];
               } else {
                   console.log('List of Plugins: ' + error.code + ' - ' + error.message);
                   this.errorFromPluginSubscribe = error;
               }
               this.displaySpinnerForPlugins = false;    // hide spinner
           }
       )
   }



  onCreateProject(event) {
     this.loadListOfProjects();
  }

  onCreatePlugin(event) {
     this.loadListOfPlugins();
  }

  // the deletion of the project, will be done in Project-Card-Component //
  onDeleteProject(event) {
    if (event) {
        this.loadListOfProjects();  // load again the project-list, after deletion //
    }
  }

  isPluginDeveloper(): boolean {
      return (localStorage.getItem('role_id') === '3');
  }

    // the deletion of the plugin, will be done in Plugin-Card-Component //
    onDeletePlugin(event) {
        if (event) {
            this.loadListOfPlugins();  // load again the plugins-list, after deletion //
        }
    }


}
