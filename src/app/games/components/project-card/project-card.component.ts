import {Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild} from '@angular/core';
import {take, takeUntil} from 'rxjs/operators';
import {GameService} from '../../services/game.service';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Game} from '../../models/games/game';
import {FeaturesService} from '../../../shared/services/features.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {GameRelease} from '../../models/game-release/game-release';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  @Input() project?: Game;
  @Output() deleted = new EventEmitter();
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();
  gameReleasesArray = new Array<GameRelease>();
  defaultSelected = new GameRelease();


  constructor(private service: GameService, private router: Router, private sharedService: FeaturesService) { }

  ngOnInit(): void {
      this.service.getAllGameReleases(this.project?.id).pipe(takeUntil(this.unsubscribe)).subscribe(releases => {
          this.gameReleasesArray = releases.data;
          if(this.gameReleasesArray.length === 0) {
            this.defaultSelected.name = 'no releases';
          } else {
            this.defaultSelected = this.gameReleasesArray[this.gameReleasesArray.length - 1] ;
          }
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    sessionStorage.removeItem('project');
  }

  // returning temporary_save from deletePopUp, if user agree to delete //
  onDelete(project) {
      this.service.deleteGame(project.id).pipe(take(1)).pipe(takeUntil(this.unsubscribe)).subscribe(projectDeleted => {
          this.deleted.emit(project);
        },
          (error: ErrorResponseModel) => {
              this.deleted.emit(false);
              console.log(error.message, error.errors);
            })
  }

  // send temporary_save to deletePopUp, and ask user if he want to delete //
  onClickDeleteProject(projectToDelete: Game) {
      this.sharedService.temporary_save = projectToDelete;
  }

  // open temporary_save for setup //
  onClickOpenProject(project) {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.router.navigate(['games/setup']);
  }
}
