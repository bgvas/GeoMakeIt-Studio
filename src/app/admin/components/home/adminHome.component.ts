import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../user-management/models/user';
import {AdminService} from '../../services/admin.service';
import {GameService} from '../../../games/services/game.service';
import {PluginService} from '../../../plugins/services/plugin.service';
import {interval, Observable, Subject, Subscription} from 'rxjs';

import {delay, map, takeUntil} from 'rxjs/operators';
import {Error} from '../../../classes/error/error';



@Component({
  selector: 'app-admin-home',
  templateUrl: './adminHome.component.html',
  styleUrls: ['./adminHome.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy {

  gameAuthors = [];
  pluginDevelopers = [];
  numberOfCreatedGames$: any;
  numberOfUploadedPlugins$: any;
  isActiveUsersSpinner: boolean;
  isActivePluginSpinner: boolean;
  isActiveProjectsSpinner: boolean;
  numberOfAllUsers: number;
  subscription: Subscription;
  errorMessage: string;
  private unsubscribe = new Subject<void>();



  constructor(private service: AdminService, private gameService: GameService, private pluginService: PluginService) { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // activate spinners //
    this.isActiveUsersSpinner = true;
   /* this.isActivePluginSpinner = true;
    this.isActiveProjectsSpinner = true;*/

    // run functions, to get results //
    this.getUsersData();
    this.numberOfUploadedPlugins$ = this.pluginService.getNumberOfAvailablePlugins();
    this.numberOfCreatedGames$ = this.gameService.getNumberOfActiveGames();

    // every 1 minute, refresh results from functions //
    const source =  interval(60000);  // 60000 = 1min
    this.subscription = source.pipe(takeUntil(this.unsubscribe)).subscribe(val => {
      this.getUsersData();
    });
  }


  getUsersData() {

    this.service.getUserOnlineStatus().pipe(takeUntil(this.unsubscribe)).subscribe(allUsers => {
      this.numberOfAllUsers = allUsers.length;  // number of all users //
      this.isActiveUsersSpinner = false; // hide spinner //
      this.gameAuthors = [];  // clear array //
      this.pluginDevelopers = [];  // clear array //
      allUsers.forEach(userStatus => {
        if (userStatus.user.role_id === 2) {
          this.gameAuthors.push(userStatus);
        } else {
          this.pluginDevelopers.push(userStatus);
        }
      });
    },
        (error: Error) => {
          this.isActiveUsersSpinner = false; // hide spinner //
          this.errorMessage = error.message;
          console.log('Error in getAllUsers function(adminHomeComponent): ' + error.code + ' - ' + error.message);
        })
  }


}
