import { Component, OnInit } from '@angular/core';
import {Game} from '../../../games/models/games/game';
import {HttpClient} from '@angular/common/http';
import {GameService} from '../../../games/services/game.service';
import {GameRoot} from '../../../games/models/games/game-root';


@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

  projectsList: Game[];
  loadProjectsSpinner: any;

  constructor(private projectsService: GameService) { }

  ngOnInit(): void {
    this.loadProjectsSpinner = true;
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectsService.getAllGames().subscribe((projects: GameRoot) => {
      this.projectsList = projects.data;
      this.loadProjectsSpinner = false;
    },
        error => {
          this.loadProjectsSpinner = false;
          console.log('Load all projects error: ' + error.message + ' - ' + error.code)
        })
  }

  bgColor(index): string {
    if(index % 2 === 0) {
      return 'white';
    }
  }

}
