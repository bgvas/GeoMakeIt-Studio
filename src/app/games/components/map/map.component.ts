import {Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy, ViewChildren, QueryList} from '@angular/core';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {Subject} from 'rxjs';
import {GameSetupComponent} from '../game-setup/game-setup.component';
import {GameService} from '../../services/game.service';
import {GamePluginsService} from '../../../gamePlugins/services/game-plugins.service';
import {TableWithSelectedPointsComponent} from '../table-with-selected-points/table-with-selected-points.component';
import Table = WebAssembly.Table;
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {PublicService} from '../../../public.service';
import {Game} from '../../models/games/game';
import {takeUntil} from 'rxjs/operators';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnDestroy  {

  selectedLat: number;
  selectedLng: number;
  arrayOfCoordinates: Zones_model[];
  marker = 'assets/img/note2.png' // default marker image //
  private unsubscribe = new Subject<void>();
  points: Zones_model[];
  @Output() coordinates = new EventEmitter<any>();
  @Output() ChangeLocation = new EventEmitter<any>();
  @Output() pointToEdit = new EventEmitter<Zones_model>();
  @Output() returnedPoint = new EventEmitter<Zones_model>();
  @Output() pointForDelete = new EventEmitter<number>();
  project?: Game;

  constructor(private gameService: GameService, private activatedRoute: ActivatedRoute,
              private router: Router, private publicService: PublicService, private gamePluginService: GamePluginsService) {
  }

  ngOnInit(): void {
    this.project = JSON.parse(sessionStorage.getItem('project')) || null;
    if(this.project === null) {
      this.router.navigate(['home']);
    }

    this.gamePluginService.getGamePluginDataOfMainPlugin(this.project?.id, 'zones').pipe(takeUntil(this.unsubscribe)).subscribe(allZones => {
      this.points = <Zones_model[]>JSON.parse(allZones?.data?.contents);
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
    this.publicService.arrayOfPoints = this.points;
  }

  // on marker click //
  clickedMarker(point: Zones_model, index: number) {
    point.id = index;
    this.pointToEdit.emit(point); // send selected point to pointSetup //
  }

  // delete a map point //
  onDelete(index: number) {
     this.points.splice(index, 1);
     // this.pointForDelete.emit(index)
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
    this.returnedPoint.emit(pointToUpdate); // send it to gameSetup for db update //
  }
}
