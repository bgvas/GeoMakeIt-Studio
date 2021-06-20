import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../classes/error/error';
import {FeaturesService} from '../../services/features.service';
import {NotificationsComponent} from '../notifications/notifications.component';
import {PluginService} from '../../../plugins/services/plugin.service';
import {Plugin} from '../../../plugins/models/plugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  projectList: Game[];
  pluginList: Plugin[];
  displaySpinnerForProject: boolean;
  displaySpinnerForPlugins: boolean;
  errorFromProjectSubscribe: Error;
  errorFromPluginSubscribe: Error;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private pluginService: PluginService) { }

  ngOnInit() {
      this.displaySpinnerForProject = true;
      this.loadListOfProjects();
      if (localStorage.getItem('role') === 'plugin_developer') {
          this.displaySpinnerForPlugins = true;
          this.loadListOfPlugins();
      }
  }

  loadListOfProjects() {
      this.service.getGamesOfSpecificUser().subscribe(data => {
            this.projectList = data.data;
            this.displaySpinnerForProject = false;    // hide spinner
          },
          error => {
            console.log('List of Projects: ' + error.code + ' - ' + error.message);
            this.errorFromProjectSubscribe = error;
            this.displaySpinnerForProject = false;    // hide spinner
          }
      )
  }

    loadListOfPlugins() {
        this.pluginService.getAllPluginsOfUser().subscribe(data => {
                this.pluginList = data.data;
                this.displaySpinnerForPlugins = false;    // hide spinner
            },
            error => {
                console.log('List of Plugins: ' + error.code + ' - ' + error.message);
                this.errorFromPluginSubscribe = error;
                this.displaySpinnerForPlugins = false;    // hide spinner
            }
        )
    }

  // on exit, unsubscribe //
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
      return (localStorage.getItem('role') === 'plugin_developer');
  }

    // the deletion of the plugin, will be done in Plugin-Card-Component //
    onDeletePlugin(event) {
        if (event) {
            this.loadListOfPlugins();  // load again the plugins-list, after deletion //
        }
    }


}
