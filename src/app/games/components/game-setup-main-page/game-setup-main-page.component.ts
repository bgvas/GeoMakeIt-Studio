import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {Subject} from 'rxjs';
import {GamePluginConfigService} from '../../services/gamePlugin/gamePluginConfig.service';
import {GameSetupComponent} from '../game-setup/game-setup.component';


@Component({
  selector: 'app-game-setup-main-page',
  templateUrl: './game-setup-main-page.component.html',
  styleUrls: ['./game-setup-main-page.component.css']
})
export class GameSetupMainPageComponent implements OnInit, OnDestroy {

  @ViewChild(GameSetupComponent) gameSetup: GameSetupComponent;
  pointsArray = new Array<Zones_model>();
  project: any;
  selected: boolean;
  private unsubscribe = new Subject<void>();


  constructor(private gamePlugins: GamePluginConfigService) { }

  ngOnInit(): void {

    this.project = JSON.parse(sessionStorage.getItem('project'));
    this.gamePlugins.getZonesFromDB(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (typeof zones['contents']?.length !== 'undefined') {
        this.pointsArray = zones['contents'];
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
