import {Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {GameService} from '../../services/game.service';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Game} from '../../models/games/game';
import {FeaturesService} from '../../../shared/services/features.service';

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


  constructor(private service: GameService, private router: Router, private sharedService: FeaturesService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // returning project from deletePopUp, if user agree to delete //
  onDelete(project) {
      this.service.deleteGame(project.id).pipe(takeUntil(this.unsubscribe)).subscribe(projectDeleted => {
          this.deleted.emit(project);
        },
            error => {
              this.deleted.emit(false);
              console.log('Deleting project error: ' + error.code + ' - ' + error.message);
            })
  }

  // send project to deletePopUp, and ask user if he want to delete //
  onClickDeleteProject(projectToDelete) {
      this.sharedService.project = projectToDelete;
  }

  // open project for setup //
  onClickOpenProject(project) {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.router.navigate(['games/setup']);
  }
}
