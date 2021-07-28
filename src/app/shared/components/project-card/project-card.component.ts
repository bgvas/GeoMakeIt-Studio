import {Component, OnInit, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GameService} from '../../../games/services/game.service';
import {NotificationsComponent} from '../notifications/notifications.component';
import {Subject} from 'rxjs';
import {FeaturesService} from '../../services/features.service';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  @Input() project: any;
  @Output() deleted = new EventEmitter();
  deleteProject: any;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();


  constructor(private service: GameService, private featureService: FeaturesService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDelete(project) {
    if (project) {
      this.deleteProject = this.featureService.project;
      this.service.deleteGame(this.deleteProject?.id).pipe(takeUntil(this.unsubscribe)).subscribe(projectDeleted => {
          this.notification.showNotification('Project deleted!', 'success');
          this.deleted.emit(true);
        },
            error => {
              console.log('Deleting project: ' + error.code + ' - ' + error.message);
              this.notification.showNotification('Can\'t delete project. Something went wrong!', 'danger');
            })
    }
  }

  projectToDelete(app) {
    this.featureService.project = app;
  }

  convertToReadableDate(date) {
    if ( date !== '') {
      const newDate =  new Date(date);
      return formatDate(newDate, 'dd/MM/yyyy', 'en-US');
    }
  }

  onClick(project) {
    sessionStorage.setItem('project', JSON.stringify(this.project));
    this.router.navigate(['games/setup']);
  }
}
