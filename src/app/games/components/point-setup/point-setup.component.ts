import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Point} from '../../models/point/point';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../../services/game.service';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';

@Component({
  selector: 'app-point-setup',
  templateUrl: './point-setup.component.html',
  styleUrls: ['./point-setup.component.css']
})
export class PointSetupComponent implements OnInit {

  @Input() points: ZonesEditor[];
  zonesForm: FormGroup;
  selectedPoint: ZonesEditor;

  @Output() pointForDelete = new EventEmitter();
  @Output() returnedPoint = new EventEmitter<ZonesEditor>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.zonesForm = this.fb.group({
            title: this.fb.control('', Validators.required),
            latitude: this.fb.control(''),
            longitude: this.fb.control(''),
            unique_id: this.fb.control('', Validators.required),
            fill_color: this.fb.control(''),
            stroke_width: this.fb.control(''),
            enter_or_exit: this.fb.control(''),
            on_action: this.fb.array([]),
            image: this.fb.control(''),
            width: this.fb.control('')
    });
  }

  onSelect(point: ZonesEditor, index: number) {
    this.selectedPoint = point;
  }

  onDelete(index: number) {
    this.pointForDelete.emit(index);
  }

  onSubmit() {
    /*const point: Point = <Point>this.zonesForm.value;
    this.points[point.id] = point;
    this.returnedPoint.emit(point);*/
  }

  background(i: number) {
    if (i % 2 === 0) {
      return 'bg-light'
    }
  }

  onColorSelection(event) {
      this.zonesForm.get('fill_color').setValue(event);
  }
}
