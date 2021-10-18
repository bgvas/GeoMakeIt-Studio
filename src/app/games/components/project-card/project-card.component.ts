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
import {PluginRelease} from '../../../plugins/models/available_plugins/plugin-release';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  @Input() project?: Game;
  @Output() deleted = new EventEmitter();
  gameRelease: GameRelease;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();
  gameReleasesArray = new Array<GameRelease>();
  default_selected_game_release = new GameRelease();


  constructor(private service: GameService, private router: Router, private sharedService: FeaturesService) { }

  ngOnInit(): void {
      this.service.getAllGameReleases(this.project?.id).pipe(takeUntil(this.unsubscribe)).subscribe(releases => {
          this.gameReleasesArray = releases.data;

          if(this.gameReleasesArray.length === 0) {
            this.default_selected_game_release.name = 'create your first release';
            this.gameRelease = null;
          } else {
            this.default_selected_game_release = releases.data[releases.data.length - 1];
            this.gameRelease = this.default_selected_game_release;
          }
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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

  onSelectRelease(release) {
      this.gameRelease = release.value;
  }

  // open temporary_save for setup //
  onClickOpenProject(project: Game) {
    sessionStorage.setItem('project', JSON.stringify(project));
    if(this.gameRelease !== null) {
        localStorage.setItem('release', JSON.stringify(this.gameRelease));
    }
    this.router.navigate(['games/map']);
  }
}
