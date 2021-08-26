import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {GameService} from '../../services/game.service';
import {EventEmitter} from 'events';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Point} from '../../models/point/point';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {DesignerService} from '../../services/designer.service';
import {takeUntil} from 'rxjs/operators';
import {ZoneObject} from '../../../plugins/models/designer-models/zones/ZoneObject';
import {Error} from '../../../classes/error/error';


@Component({
  selector: 'app-stepper-wizard',
  templateUrl: './stepper-wizard.component.html',
  styleUrls: ['./stepper-wizard.component.css']
})
export class StepperWizardComponent implements OnInit, OnDestroy {

  sendSubmit: Subject<any> = new Subject<any>();
  project: any;
  pointsArray = new Array<ZonesEditor>();
  private unsubscribe = new Subject<void>();
  zones_array = [];


  constructor(private gameService: GameService, private router: Router, private gamePlugins: DesignerService) { }

  ngOnInit(): void {
    if (typeof this.gameService.object === 'undefined') {
      this.router.navigate(['home']);
    }
    this.project = this.gameService.object;
    this.gamePlugins.getZonesFromDB(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (zones !== null) {
        this.pointsArray = zones['contents'];
      }
    })
  }

  onNext_UpdateZones() {
    console.log('exit');
    this.updateZones();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit() {
     this.sendSubmit.next(true)
  }

  addPoint(point: ZonesEditor) {
    if (point.center.latitude !== null && point.center.longitude !== null) {
      this.pointsArray.push(point);
    }
  }

  updateArrayOfPoints(point: ZonesEditor) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
    }
  }


  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  onExit() {
    this.router.navigate(['games/setup']);
  }

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
