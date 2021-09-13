import {Component, OnInit, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GameService} from '../../services/game.service';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Game} from '../../models/games/game';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  @Input() project: Game;
  @Output() deleted = new EventEmitter();
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();


  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onDelete(clicked, projectToDelete) {
    if (clicked) {
      this.service.deleteGame(projectToDelete?.id).pipe(takeUntil(this.unsubscribe)).subscribe(projectDeleted => {
          this.notification.showNotification('Project deleted successfully!', 'success');
          this.deleted.emit(clicked);
        },
            error => {
              console.log('Deleting project error: ' + error.code + ' - ' + error.message);
              this.notification.showNotification('Can\'t delete project. Something went wrong!', 'danger');
            })
    }
  }

  onClickOpenProject(project) {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.router.navigate(['games/setup']);
  }
}
