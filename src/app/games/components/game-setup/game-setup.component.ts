import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point/point';
import {Router} from '@angular/router';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {DesignerService} from '../../services/designer.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Error} from '../../../classes/error/error';
import {ZoneObject} from '../../../plugins/models/designer-models/zones/ZoneObject';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit, OnDestroy {

  pointsArray = new Array<ZonesEditor>();
  project: any;
  selected: boolean;
  zones_array = [];
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private gamePlugins: DesignerService,  private router: Router) { }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project'));
    this.gamePlugins.getZonesFromDB(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (zones !== null) {
        this.pointsArray = zones['contents'];
      }
    })
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

 /* onSelect(point: Point) {
    this.service.object = point;
  }*/

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  updateArrayOfPoints(point: ZonesEditor) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
    }
  }

  onClickOpen() {
    this.service.object = this.project;
    this.router.navigate(['stepper'])
  }

  // on exit from this window, update records in DB //
  updateZones() {
    for (const newZone of this.pointsArray) {
      const _zone = new ZoneObject();
      _zone.title = newZone.title;
      _zone.unique_id = newZone.unique_id;
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
