import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point/point';
import {Router} from '@angular/router';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {DesignerService} from '../../services/designer.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit, OnDestroy {

  pointsArray = new Array<ZonesEditor>();
  project: any;
  selected: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private service: GameService, private gamePlugins: DesignerService,  private router: Router) { }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project'));
    this.gamePlugins.getZonesFromDB(this.project.id).pipe(takeUntil(this.unsubscribe)).subscribe(zones => {
      if (zones !== null) {
        this.pointsArray = zones
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addPoint(point: ZonesEditor) {
    if (point.center.longitude !== null && point.center.latitude !== null) {
      this.pointsArray.push(point);
    }
  }

  onSelect(point: Point) {
    this.service.object = point;
  }

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  updateArrayOfPoints(point: ZonesEditor) {
    if (point !== null) {
      this.pointsArray[point.id] = point;
    }
  }

  redirectProjectIfUndefined() {
      this.router.navigate(['home']);
  }

  onClickOpen() {
    this.service.object = this.project;
    this.router.navigate(['stepper'])
  }





}
