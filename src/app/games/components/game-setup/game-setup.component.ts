import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {GamePluginConfigService} from '../../../gamePlugins/services/gamePluginConfig.service';
import {Subject} from 'rxjs';
import {Error} from '../../../error-handling/error/error';
import {ZoneObject} from '../../../plugins/models/designer-models/zones/ZoneObject';
import {GameRelease} from '../../models/game-release/game-release';
import {Game} from '../../models/games/game';


@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit, OnDestroy {

  @Input() pointsArray: Zones_model[];
  project?: Game;
  selected: boolean;
  projectRelease?: GameRelease;
  zones_array = [];
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private gamePlugins: GamePluginConfigService, private router: Router) { }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project'));
    this.projectRelease = JSON.parse(localStorage.getItem('release')) || null;
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // save a new point from map //
  addPoint(point: Zones_model) {
    if (point.center.longitude !== null && point.center.latitude !== null) {
      this.pointsArray.push(point);
    }
  }

  openGameSettings() {
    this.router.navigate(['games/setup/settings'])
  }

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
    this.updateZones();
  }

  // update after pointSetup //
  updateArrayOfPoints(point: Zones_model) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
      this.updateZones();
    }

  }

  // on click open stepper wizard //
  onClickOpenStepper() {
    this.service.save_temporary = this.project;
    this.router.navigate(['stepper'])
  }

  // on window destroy, update records in DB //
  updateZones() {

     if(typeof this.pointsArray !== 'undefined') {
       this.zones_array = [];
         for (const newZone of this.pointsArray) {
           const _zone = new ZoneObject();
           _zone.title = newZone.title;
           _zone.unique_id = newZone.unique_id
           _zone.fill_color = newZone.fill_color;
           _zone.center = newZone.center;
           _zone.on_enter = newZone.on_enter;
           _zone.on_exit = newZone.on_exit;
           _zone.icon = newZone.icon;
           _zone.radius = newZone.radius;
           _zone.stroke_width = newZone.stroke_width;

           this.zones_array.push(_zone);

         }
         this.gamePlugins.updateZones(this.project.id, this.zones_array)
             .subscribe(result => {
                   if (result !== null) {
                     console.log(result?.displayed_message);
                   }
                 },
                 (error: Error) => {
                   if (error !== null) {
                     console.log(error?.message);
                   }
                 });
     } else {
       console.log('can\'t update zones');
     }
  }

  onMainConfigurationClick() {
    this.router.navigate(['games/setup/main-configurations'])
  }
}
