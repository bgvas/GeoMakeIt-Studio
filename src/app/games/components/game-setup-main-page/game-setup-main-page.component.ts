import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
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
  pointsArray = new Array<ZonesEditor>();
  project: any;
  selected: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private gamePlugins: GamePluginConfigService) { }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project'));
    this.gamePlugins.getZonesFromDB(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (zones !== null) {
        this.pointsArray = zones['contents'];
      }
    })
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }




}
