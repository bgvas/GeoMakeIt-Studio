import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {Subject} from 'rxjs';
import {GameService} from '../../services/game.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicService} from '../../../public.service';
import {Game} from '../../models/games/game';
import {take, takeUntil} from 'rxjs/operators';
import {GamePluginDataService} from '../../../gamePlugins/services/gamePluginData.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnDestroy  {


  marker = 'assets/img/note2.png' // default marker image //
  private unsubscribe = new Subject<void>();
  points: Zones_model[];
  @Output() coordinates = new EventEmitter<any>();
  @Output() ChangeLocation = new EventEmitter<any>();
  @Output() pointToEdit = new EventEmitter<Zones_model>();
  @Output() returnedPoint = new EventEmitter<Zones_model>();
  @Output() pointForDelete = new EventEmitter<number>();
  project = <Game>JSON.parse(sessionStorage.getItem('project')) || null;
  current_latitude?: number;
  current_longitude?: number;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute,
              private router: Router, private publicService: PublicService, private gamePluginService: GamePluginsService,
              private gamePluginDataService: GamePluginDataService) {
  }

  ngOnInit(): void {
    if(this.project === null) {
      this.router.navigate(['home']);

    }

    this.gameService.getCurrentPosition().pipe(take(1)).subscribe((pos: Position) => {
      this.current_latitude = pos?.coords?.latitude;
      this.current_longitude = pos?.coords?.longitude;
    })

    this.gamePluginDataService.getGamePluginDataOfMainPlugin(this.project?.id)
        .pipe(takeUntil(this.unsubscribe)).subscribe(allGamePlugins => {
         this.points = <Zones_model[]>JSON.parse(allGamePlugins.data.filter(e => e.name === 'zones').pop().contents);
    },
        (error: ErrorResponseModel) => {
          this.points = [];
          console.log(error.message, error.errors)
        })
  }

  ngOnDestroy() {
    this.savePointsOnExit();
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('exit');
  }

  // add a new point to map //
  onMapClick(clickedPoint) {
    this.points = this.points || [];
    const newPoint = new Zones_model();
    newPoint.center.latitude = clickedPoint?.coords.lat;
    newPoint.center.longitude = clickedPoint?.coords.lng;
    newPoint.title = 'point';
    newPoint.unique_id = 'zone_point';
    newPoint.radius = 60; // default radius
    this.points.push(newPoint);
  }

  // on marker click //
  clickedMarker(point: Zones_model, index: number) {
    point.id = index;
    this.pointToEdit.emit(point); // send selected point to pointSetup for edit //
  }

  // delete a map point //
  onDelete(index: number) {
     this.points.splice(index, 1);
     // this.pointForDelete.emit(index) // send it to gameSetup for delete
  }

  // on change location, update point //
  onChangeLocation(change: any, index: number) {
    this.points[index].center.latitude = change?.coords.lat;
    this.points[index].center.longitude = change?.coords.lng;
  }

  // on change radius, update point //
  onRadiusChange(changedRadius: number, index: number) {
    this.points[index].radius = Math.round(changedRadius);
  }

  // on point return, from pointSetup //
  onPointReturn(pointToUpdate: Zones_model) {
    this.gameService.save_temporary = pointToUpdate;
    this.points[pointToUpdate.id] = pointToUpdate;
  }

  savePointsOnExit() {
    const zonesObject = {
      'zones': JSON.stringify(this.points)
    }
    this.gamePluginDataService.updateGamePluginData(this.project?.id, 1, zonesObject)
        .pipe(take(1)).subscribe(updateResult => {
        console.log('zones updated!');
    },
        (error: ErrorResponseModel) => {
          console.log(error.message, error.errors);
        })
  }
}
