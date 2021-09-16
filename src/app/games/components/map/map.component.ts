import {Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy, ViewChildren, QueryList} from '@angular/core';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {Subject} from 'rxjs';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AgmInfoWindow, AgmMarker} from '@agm/core';
import {GameSetupComponent} from '../game-setup/game-setup.component';
import {Game} from '../../models/games/game';



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
  @Input() points: Zones_model[];
  @Output() coordinates = new EventEmitter<any>();
  @Output() ChangeLocation = new EventEmitter<any>();
  @Output() pointToEdit = new EventEmitter<Zones_model>();
  @Output() returnedPoint = new EventEmitter<Zones_model>();



  constructor() {}

  ngOnInit(): void {
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
  }

  // on marker click //
  clickedMarker(point: Zones_model, index: number) {
    point.id = index;
    this.pointToEdit.emit(point); // send selected point to pointSetup //
  }

  // delete a map point //
  onDelete(index: number) {
    this.points = this.points || [];
    this.points.splice(index, 1);
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
    this.returnedPoint.emit(pointToUpdate); // send it to gameSetup for db update //
  }





}
