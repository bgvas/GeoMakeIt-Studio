import {Component,  OnInit, Output} from '@angular/core';
import {GameService} from '../../services/game.service';
import {EventEmitter} from 'events';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {Point} from '../../models/point/point';


@Component({
  selector: 'app-stepper-wizard',
  templateUrl: './stepper-wizard.component.html',
  styleUrls: ['./stepper-wizard.component.css']
})
export class StepperWizardComponent implements OnInit {

  sendSubmit: Subject<any> = new Subject<any>();
  project: any;
  pointsArray = new Array<Point>();

  constructor(private projectService: GameService, private router: Router) { }

  ngOnInit(): void {
    if (typeof this.projectService.object === 'undefined') {
      this.router.navigate(['home']);
    }
    this.project = this.projectService.object;
    console.log(this.project);
  }

  onSubmit() {
     this.sendSubmit.next(true)
  }

  addPoint(point) {
    if (point.lng !== null && point.lat !== null) {
      this.pointsArray.push(point);
    }
  }

  updateArrayOfPoints(point: Point) {
    if (point !== null) {
      this.pointsArray[point.id].name = point.name;
      this.pointsArray[point.id].description = point.description;
      this.pointsArray[point.id].lat = point.lat;
      this.pointsArray[point.id].lng = point.lng;
    }
  }

  onDelete(index: number) {
    this.pointsArray.splice(index, 1);
  }

  onCancel() {
    this.router.navigate(['games/setup']);

    /*localStorage.setItem('project', JSON.stringify(this.project));
    const obj = localStorage.getItem('project');
    console.log(JSON.parse(obj));*/
  }

}
