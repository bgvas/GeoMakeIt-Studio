import { Component, OnInit } from '@angular/core';
import {User} from '../../../user-management/models/user';
import {AdminService} from '../../services/admin.service';
import {GameService} from '../../../games/services/game.service';
import {PluginService} from '../../../plugins/services/plugin.service';
import { interval, Subscription } from 'rxjs';
import {Error} from '../../../classes/error/error';


@Component({
  selector: 'app-admin-home',
  templateUrl: './adminHome.component.html',
  styleUrls: ['./adminHome.component.css']
})
export class AdminHomeComponent implements OnInit {

  gameAuthors = [];
  pluginDevelopers = [];
  numberOfCreatedGames: number;
  numberOfUploadedPlugins: number;
  isActiveUsersSpinner: boolean;
  isActivePluginSpinner: boolean;
  isActiveProjectsSpinner: boolean;
  numberOfAllUsers: number;
  subscription: Subscription;
  errorMessage: string;


  constructor(private service: AdminService, private gameService: GameService, private pluginService: PluginService) {

  }

  ngOnInit(): void {
    // activate spinners //
    this.isActiveUsersSpinner = true;
    this.isActivePluginSpinner = true;
    this.isActiveProjectsSpinner = true;

    // run functions, to get results //
    this.getAllUsers();
    this.getPluginsData();
    this.getProjectsData();

    // every 1 minute, refresh results from functions //
    const source = interval(60000);  // 60000 = 1min
    this.subscription = source.subscribe(val => {
      this.getAllUsers();
      this.getPluginsData();
      this.getProjectsData();
    });
  }


  getAllUsers() {

    this.service.getUserOnlineStatus().subscribe(allUsers => {
      this.numberOfAllUsers = allUsers.length;  // number of all users //
      this.isActiveUsersSpinner = false; // hide spinner //
      this.gameAuthors = [];  // clear array //
      this.pluginDevelopers = [];  // clear array //
      allUsers.forEach(userStatus => {
        if (userStatus.user.role === 'game_author') {
          this.gameAuthors.push(userStatus);
        } else {
          this.pluginDevelopers.push(userStatus);
        }
      });
    },
        (error: Error) => {
          this.isActiveUsersSpinner = false; // hide spinner //
          this.errorMessage = error.displayed_message;
          console.log('Error in getAllUsers function(adminHomeComponent): ' + error.code + ' - ' + error.message);
        })
  }



  getPluginsData() {
    this.pluginService.getAvailablePlugins().subscribe(plugin => {
      this.numberOfUploadedPlugins = plugin.data?.length;
      this.isActivePluginSpinner = false;
    },
        (error: Error) => {
          this.isActivePluginSpinner = false; // hide spinner //
          this.errorMessage = error.displayed_message;
          console.log('Error in getPluginsData function(adminHomeComponent): ' + error.code + ' - ' + error.message);
        })
  }

  getProjectsData() {
    this.gameService.getAllGames().subscribe(projects => {
      this.numberOfCreatedGames = projects.data?.length;
      this.isActiveProjectsSpinner = false;
    },
        (error: Error) => {
          this.isActiveProjectsSpinner = false; // hide spinner //
          this.errorMessage = error.displayed_message;
          console.log('Error in getProjectsData function(adminHomeComponent): ' + error.code + ' - ' + error.message);
        })
  }

}
