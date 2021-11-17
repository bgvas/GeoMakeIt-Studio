import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FeaturesService} from '../../../shared/services/features.service';
import {Game} from '../../models/games/game';
import {GameRelease} from '../../models/game-release/game-release';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';
import {take} from 'rxjs/operators';
import {BuildGameRequestModel} from '../../models/build-game-request-model';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  isBuilding: boolean;
  project = <Game>JSON.parse(sessionStorage.getItem('project'));
  errorMessage = new NotificationsComponent();

  constructor(config: NgbModalConfig, private modalService: NgbModal, private featuresService: FeaturesService,
              private router: Router, private gameService: GameService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'custom'});
  }

  onExit() {
    this.modalService.dismissAll()
  }

  onStartBuilding() {
    this.isBuilding = true;
    const gameToBuild  = new BuildGameRequestModel();
    gameToBuild.game_id = this.project?.id;

    this.gameService.buildGame(gameToBuild).pipe(take(1)).subscribe((gameUnderConstruction: GameRelease) => {
      this.featuresService.temporary_save = {'building': true, 'project': this.project, 'version': gameUnderConstruction['data']?.name};
      this.modalService.dismissAll();
      this.router.navigate(['home']);
      this.isBuilding = false;
    },
        (error: ErrorResponseModel) => {
           if (error['code'] === 422) {
             this.isBuilding = false;
             this.modalService.dismissAll();
             this.errorMessage.display('Game build in progress....', 'danger');
           }
        })

  }
}
