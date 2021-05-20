import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point/point';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  pointsArray = new Array<Point>();
  project: any;
  selected: boolean;

  constructor(private service: GameService, private router: Router) { }

  ngOnInit(): void {
    this.project = this.service.object;

    if(typeof(this.project) === 'undefined') {
     this.redirectProjectIfUndefined();
    }

    /*const aPoint = new Point();
    aPoint.lat = 38.892548108719396;
    aPoint.lng = 22.458088777351076;
    aPoint.description = 'Start Point';
    aPoint.name = 'Start Point';
    this.addPoint(aPoint);
    const bPoint = new Point();
    bPoint.lat = 38.992548108719396;
    bPoint.lng = 22.458088777351076;
    bPoint.name = 'End Point';
    bPoint.description = 'End Point';
    this.addPoint(bPoint);*/
  }

  addPoint(point) {
    if (point.lng !== null && point.lat !== null) {
      this.pointsArray.push(point);
    }
  }

  onSelect(point: Point) {
    this.service.object = point;
  }

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  updateArrayOfPoints(point: Point) {
    if (point !== null) {
      this.pointsArray[point.id].name = point.name;
      this.pointsArray[point.id].description = point.description;
      this.pointsArray[point.id].lat = point.lat;
      this.pointsArray[point.id].lng = point.lng;
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
