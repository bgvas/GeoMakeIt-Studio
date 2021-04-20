import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../games/services/game.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Game} from '../../../games/models/games/game';
import {Error} from '../../../classes/error/error';
import {FeaturesService} from '../../services/features.service';
import {NotificationsComponent} from '../notifications/notifications.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  projectList: Game[];
  deleteProject: any;
  displaySpinner: boolean;
  error: Error;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private featureService: FeaturesService) { }

  ngOnInit() {
      this.displaySpinner = true;
      this.loadListOfProjects();
  }

  loadListOfProjects() {
    this.service.getGamesOfSpecificUser().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
          this.projectList = data.data;
          this.displaySpinner = false;    // hide spinner
        },
        error => {
          console.log('List of Projects: ' + error.code + ' - ' + error.message);
          this.error = error;
          this.displaySpinner = false;    // hide spinner
        })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDelete(project) {
    console.log(project);
    if (project) {
      this.service.deleteGameOfSpecificUser(this.service.object.id).pipe(takeUntil(this.unsubscribe)).subscribe(projectDeleted => {
          this.loadListOfProjects();
          this.notification.showNotification('Project deleted!', 'success');
        },
        error => {
          console.log('Deleting project: ' + error.code + ' - ' + error.message);
          this.notification.showNotification('Can\'t delete project. Something went wrong!', 'danger');
        })
    }
  }

  projectToDelete(app) {
    this.featureService.project = app;
    this.deleteProject = this.featureService.project;
  }

}
