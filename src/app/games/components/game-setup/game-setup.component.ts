import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Point} from '../../models/point/point';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  pointsArray = new Array<Point>();
  project: any;

  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.project = this.service.object;
    const aPoint = new Point();
    aPoint.lat = 38.892548108719396;
    aPoint.lng = 22.458088777351076;
    aPoint.name = 'Start Point';
    this.addPoint(aPoint);
    const bPoint = new Point();
    bPoint.lat = 38.992548108719396;
    bPoint.lng = 22.458088777351076;
    bPoint.name = 'End Point';
    this.addPoint(bPoint);
  }

  addPoint(point) {
    console.log(point);
    if (point.lng !== null && point.lat !== null) {
      this.pointsArray.push(point);
      console.log(point?.name + ' - ' + point?.lat + ' - ' + point?.lng);
    }
  }

  colorLine(index: number): boolean {
    if (index % 2 !== 0) {
      return true ;
    } else { return false }
  }




}
