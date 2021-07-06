import { Component, OnInit } from '@angular/core';
import {User} from '../../../user-management/models/user';
import {AdminService} from '../../services/admin.service';
import {GameService} from '../../../games/services/game.service';
import {PluginService} from '../../../plugins/services/plugin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './adminHome.component.html',
  styleUrls: ['./adminHome.component.css']
})
export class AdminHomeComponent implements OnInit {

  allGameAuthors: User[];
  allPluginDevelopers: User[];
  usersChartValues = [];
  usersChartTitles = ['Game Author', 'Plugin Developer'];
  createdGamesValues: number;
  createdGamesTitle = ['Games/Apps'];
  uploadedPluginsValues: number;
  uploadedPluginsTitles = ['Plugins'];
  chartSize = 0.6;
  isActiveUsersSpinner: boolean;
  isActivePluginSpinner: boolean;
  isActiveProjectsSpinner: boolean;
  numberOfAllUsers: number;


  constructor(private service: AdminService, private gameService: GameService, private pluginService: PluginService) { }

  ngOnInit(): void {
    this.isActiveUsersSpinner = true;
    this.isActivePluginSpinner = true;
    this.isActiveProjectsSpinner = true;
    this.getUsers();
    this.getPluginsData();
    this.getProjectsData();
  }

  getUsers() {
    this.service.getAllUsers().subscribe(allUsers => {
      this.numberOfAllUsers = allUsers.length;
      this.isActiveUsersSpinner = false;
    })

    this.service.getGameAuthorsFromAllUsers().subscribe(gameAuthors => {
      this.allGameAuthors = gameAuthors;
      this.usersChartValues[0] = gameAuthors?.length;
      this.isActiveProjectsSpinner = false;
    })
    this.service.getPluginDevelopersFromAllUsers().subscribe(pluginDevelopers => {
      this.allPluginDevelopers = pluginDevelopers;
      this.usersChartValues[1] = pluginDevelopers?.length;
      this.isActivePluginSpinner = false;
    })
  }

  getPluginsData() {
    this.pluginService.getAvailablePlugins().subscribe(plugin => {
      this.uploadedPluginsValues = plugin.data?.length;
      this.isActivePluginSpinner = false;
    })
  }

  getProjectsData() {
    this.gameService.getAllGames().subscribe(projects => {
      this.createdGamesValues = projects.data?.length;
      this.isActiveProjectsSpinner = false;
    })
  }

}
