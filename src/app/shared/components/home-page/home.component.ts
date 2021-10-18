import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Subject} from 'rxjs';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../error-handling/error/error';
import {NotificationsComponent} from '../notifications/notifications.component';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';
import {AppService} from '../../../app.service';
import {takeUntil} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';



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


  constructor(private gameService: GameService, private pluginService: PluginService, private appService: AppService) { }

  ngOnInit() {
      sessionStorage.removeItem('project');
      localStorage.removeItem('release');
      this.loadListOfProjects();
      if (this.isPluginDeveloper()) {
          this.loadListOfPlugins();
      }
  }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
  }

  loadListOfProjects() {
      this.displaySpinnerForProject = true;
      this.gameService.getAllGamesByUser(this.appService.currentUser().id).pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
          console.log(projects);
          this.projectList = projects?.data || [];
          this.displaySpinnerForProject = false;    // hide spinner
      },
          (error: ErrorResponseModel) => {
              console.log(error.message + ' - ' + error.errors);
              this.errorFromProjectSubscribe = error.message;
              this.displaySpinnerForProject = false;    // hide spinner
          }
      )
  }

   loadListOfPlugins() {
       this.displaySpinnerForPlugins = true;
       this.pluginService?.getAllPluginsOfUser(this.appService.currentUser().id).pipe(takeUntil(this.unsubscribe)).subscribe(plugins => {
             this.pluginList = plugins.data || [];
             this.displaySpinnerForPlugins = false;    // hide spinner
          },
           (error: ErrorResponseModel) => {
                   console.log(error.message + ' - ' + error.errors);
                   this.errorFromPluginSubscribe = error.message;
                   this.displaySpinnerForPlugins = false;    // hide spinner
           }
       )
   }


  onCreateProject(newProject) {
      if (typeof newProject !== 'undefined') {
          this.projectList.push(newProject);
          this.loadListOfProjects();
      }
  }

  onCreatePlugin(newPlugin) {
      if (typeof newPlugin !== 'undefined') {
          this.pluginList.push(newPlugin);
          this.loadListOfPlugins();
      }
  }

  // the deletion of the temporary_save, will be done in Project-Card-Component //
  onDeleteProject(deletedProject: any) {
    if (!deletedProject) {
        this.notification.display('Can\'t delete project. Something went wrong!', 'danger');
    }  else {
        this.notification.display('Project deleted successfully!', 'success');
         this.projectList.splice(this.projectList.indexOf(deletedProject), 1);
      if (this.projectList?.length === 0) {
          this.projectList = new Array<Game>();
      } else {
          this.loadListOfProjects();
      }
    }
  }

  isPluginDeveloper(): boolean {
      return (localStorage.getItem('role_id') === '2');
  }

    // the deletion of the plugin, will be done in Plugin-Card-Component //
    onDeletePlugin(deletedPlugin: any) {
        if (!deletedPlugin) {
            this.notification.display('Can\'t delete plugin. Something went wrong!', 'danger');
        } else {
            this.notification.display('Plugin deleted successfully!', 'success');
            this.pluginList.splice(this.pluginList.indexOf(deletedPlugin), 1);
            if (this.pluginList.length === 0) {
                this.pluginList = new Array<Plugin>();
            } else {
                this.loadListOfPlugins();
            }
        }
    }




}
