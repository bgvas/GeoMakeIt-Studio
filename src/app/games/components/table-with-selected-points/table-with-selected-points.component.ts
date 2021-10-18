import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {GameService} from '../../services/game.service';
import {PublicService} from '../../../public.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {Router} from '@angular/router';
import {Game} from '../../models/games/game';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';

@Component({
  selector: 'app-table-with-selected-points',
  templateUrl: './table-with-selected-points.component.html',
  styleUrls: ['./table-with-selected-points.components.css']
})
export class TableWithSelectedPointsComponent implements OnInit, OnDestroy  {



  points: Zones_model[];
  @Input() isStepper: boolean;
  @Output() pointForDelete = new EventEmitter<number>();
  @Output() pointToEdit = new EventEmitter<Zones_model>();
  @Output() pointToUpdate = new EventEmitter<Zones_model>();
  @Input() data?: any;
  arrayOfPoints = new Array<Zones_model>();
  selectedPoints = new Array<Zones_model>();
  private unsubscribe = new Subject<void>();
  project = <Game>JSON.parse(sessionStorage.getItem('project')) || null;


  constructor(private gamePluginService: GamePluginsService, private router: Router) {

    if(this.project === null) {
      this.router.navigate(['home']);
    }
      // load all selected points from db, if exists //
    this.gamePluginService.getGamePluginDataOfMainPlugin(this.project?.id, 'zones')
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(allPoints => {
            this.selectedPoints = <Zones_model[]>JSON.parse(allPoints?.data?.contents);
    },
            (error: ErrorResponseModel) => {
                console.log(error.message, error.errors)
            })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  // send selected point to gameSetup for delete //
  onDelete(index: number) {
      this.selectedPoints.splice(index, 1);
     // this.pointForDelete.emit(index)
  }

  // return point from pointSetup //
  fromPointSetup(point: Zones_model) {
    this.pointToUpdate.emit(point); // send point to gameSetup for db update//
  }

  // point from points-table //
  onSelect(point: Zones_model, index: number) {
    point.id = index;
    this.pointToEdit.emit(point); // send point to pointSetup for edit //
  }


}
