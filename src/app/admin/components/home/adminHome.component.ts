import { Component, OnInit } from '@angular/core';
import {User} from '../../../user-management/models/user';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './adminHome.component.html',
  styleUrls: ['./adminHome.component.css']
})
export class AdminHomeComponent implements OnInit {

  allGameAuthors: User[];
  allPluginDevelopers: User[];
  usersChartValues = [2, 2];
  usersChartTitles = ['Game Author', 'Plugin Developer'];
  createdGamesValues = [3];
  createdGamesTitle = ['Games/Apps'];
  uploadedPluginsValues = [2];
  uploadedPluginsTitles = ['Plugins'];
  chartSize = 0.6;


  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.getGameAuthorsFromAllUsers().subscribe(gameAuthors => {
      this.allGameAuthors = gameAuthors;
    });

    this.service.getPluginDevelopersFromAllUsers().subscribe(pluginDevelopers => {
      this.allPluginDevelopers = pluginDevelopers;
    })
  }

}
