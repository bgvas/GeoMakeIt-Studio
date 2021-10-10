import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {GamePluginConfigService} from '../../../gamePlugins/services/gamePluginConfig.service';
import {takeUntil} from 'rxjs/operators';
import {ZoneObject} from '../../../plugins/models/designer-models/zones/ZoneObject';
import {Error} from '../../../error-handling/error/error';



@Component({
  selector: 'app-stepper-wizard',
  templateUrl: './stepper-wizard.component.html',
  styleUrls: ['./stepper-wizard.component.css']
})

export class StepperWizardComponent implements OnInit, OnDestroy {

  sendSubmit: Subject<any> = new Subject<any>();
  project: any;
  pointsArray = new Array<Zones_model>();
  private unsubscribe = new Subject<void>();
  zones_array = [];


  constructor(private gameService: GameService, private router: Router, private gamePlugins: GamePluginConfigService) { }

  ngOnInit(): void {
    if (typeof this.gameService.save_temporary === 'undefined') {
      this.router.navigate(['home']);
    }
    this.project = this.gameService.save_temporary;
    this.gamePlugins.getZonesFromDB(this.project?.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (typeof zones['contents'] !== 'undefined') {
        this.pointsArray = zones['contents'];
      }
    })
  }

  // on click 'next' button, update zones //
 /* onNext_UpdateZones() {
    this.updateZones();
  }*/

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit() {
     this.sendSubmit.next(true)
  }

  // add a new point from map //
  addPoint(point: Zones_model) {
    if (point.center.latitude !== null && point.center.longitude !== null) {
      this.pointsArray.push(point);
    }
  }

  // update point, after edit in pointSetup //
  updateArrayOfPoints(point: Zones_model) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
      this.updateZones();
    }

  }

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
    this.updateZones();
  }

  onExit() {
    this.router.navigate(['games/setup']);
  }

  // on component destroy, update zones in DB //
  updateZones() {

      this.zones_array = [];
      if(typeof this.pointsArray !== 'undefined') {
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
          this.gamePlugins.updateZones(this.project?.id, this.zones_array)
              .subscribe(result => {   // can't unsubscribe //
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
        console.log('Can\'t update zones');
      }
  }

}
