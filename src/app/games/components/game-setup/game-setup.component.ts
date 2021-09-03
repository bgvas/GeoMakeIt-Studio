import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {GamePluginConfigService} from '../../services/gamePlugin/gamePluginConfig.service';
import {Subject} from 'rxjs';
import {Error} from '../../../classes/error/error';
import {ZoneObject} from '../../../plugins/models/designer-models/zones/ZoneObject';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit, OnDestroy {

  @Input() pointsArray: ZonesEditor[];
  project: any;
  selected: boolean;
  zones_array = [];
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private gamePlugins: GamePluginConfigService, private router: Router) { }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project'));
  }

  ngOnDestroy() {
    this.updateZones();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addPoint(point: ZonesEditor) {
    if (point.center.longitude !== null && point.center.latitude !== null) {
      this.pointsArray.push(point);
    }
  }


  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  updateArrayOfPoints(point: ZonesEditor) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
      console.log(point);
    }
  }

  onClickOpenStepper() {
    this.service.object = this.project;
    this.router.navigate(['stepper'])
  }

  // on exit from this window, update records in DB //
  updateZones() {
    let fight = 1;
    let question = 1;
    let locked = 1;
    
    for (const newZone of this.pointsArray) {
      const _zone = new ZoneObject();
      _zone.title = newZone.title;
      if (newZone.unique_id === 'zone_fight') {
        _zone.unique_id = newZone.unique_id + '_' + fight;
        fight++;
      } else if (newZone.unique_id === 'zone_question') {
        _zone.unique_id = newZone.unique_id + '_' + question;
        question++;
      } else if (newZone.unique_id === 'zone_locked') {
        _zone.unique_id = newZone.unique_id + '_' + locked;
        locked++;
      } else {
        _zone.unique_id = newZone.unique_id;
      }
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
              console.log(result)
            },
            (error: Error) => {
              console.log(error.displayed_message);
            });
  }
}
