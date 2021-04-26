import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Point} from '../../models/point/point';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-point-setup',
  templateUrl: './point-setup.component.html',
  styleUrls: ['./point-setup.component.css']
})
export class PointSetupComponent implements OnInit {

  @Input() points: Point[];
  pointForm: FormGroup;
  selectedPoint: Point;

  @Output() pointForDelete = new EventEmitter();
  @Output() returnedPoint = new EventEmitter<Point>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.pointForm = this.fb.group({
    });

    this.pointForm.addControl('id' ,  new FormControl(''));
    this.pointForm.addControl('name' ,  new FormControl('', Validators.required));
    this.pointForm.addControl('description' ,  new FormControl(''));
    this.pointForm.addControl('lat' ,  new FormControl(''));
    this.pointForm.addControl('lng' ,  new FormControl(''));
  }

  onSelect(point: Point, index: number) {
    this.selectedPoint = point;
    this.selectedPoint.id = index;
    this.pointForm.get('name').setValue(point?.name);
    this.pointForm.get('description').setValue(point?.description);
    this.pointForm.get('lat').setValue(point?.lat);
    this.pointForm.get('lng').setValue(point?.lng);
    this.pointForm.get('id').setValue(index);
  }

  onDelete(index: number) {
    this.pointForDelete.emit(index);
  }

  onSubmit() {
    const point: Point = <Point>this.pointForm.value;
    this.points[point.id] = point;
    this.returnedPoint.emit(point);
  }



}
