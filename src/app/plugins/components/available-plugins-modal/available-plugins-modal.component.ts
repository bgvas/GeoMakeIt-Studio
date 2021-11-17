import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {PluginService} from '../../services/plugin.service';
import {Subject} from 'rxjs';
import {Plugin} from '../../models/plugin';
import {PluginRelease} from '../../models/available_plugins/plugin-release';
import {UserService} from '../../../user/services/user.service';
import {User} from '../../../user/models/user';

@Component({
  selector: 'app-available-plugins-modal',
  templateUrl: './available-plugins-modal.component.html',
  styleUrls: ['./available-plugins-modal.component.css']
})
export class AvailablePluginsModalComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isSelected: boolean;
  unsubscribe = new Subject<void>();
  allAvailablePlugins?: Plugin[];
  index = Array<number>();
  defaultRelease?: PluginRelease;
  creator?: User;

  constructor(public pluginService: PluginService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllAvailablePlugins();
  }

  // on exit, unsubscribe all//
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  getAllAvailablePlugins() {
    this.isLoading = true;
    this.pluginService.getAllPlugins().pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
        this.allAvailablePlugins = projects.data; // display all available plugins//
        this.isLoading = false;
      },
      (e: ErrorResponseModel) => {
        this.isLoading = false;
        console.log(e.message, e.errors);
      })
  }

  onClose() {
    this.ngOnDestroy();
  }

  selectedRelease(release) {
    this.defaultRelease = release;
  }

  getCreator(user) {
   this.creator = user;
  }



}
