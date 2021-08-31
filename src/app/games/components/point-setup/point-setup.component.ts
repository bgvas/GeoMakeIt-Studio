import {Component, Input, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  actionsArray = new FormArray([]);
  isStartingPoint = false;

  @Output() pointForDelete = new EventEmitter<number>();
  @Output() returnedPoint = new EventEmitter<ZonesEditor>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.initializeForm();
  }

  initializeForm() {
    this.zonesForm = this.fb.group({
            id: this.fb.control(''),
            title: this.fb.control('', Validators.required),
            latitude: this.fb.control(''),
            type_of_zone: this.fb.control(''),
            radius: this.fb.control(''),
            longitude: this.fb.control(''),
            unique_id: this.fb.control(''),
            fill_color: this.fb.control(''),
            stroke_width: this.fb.control(''),
            enter_or_exit: this.fb.control(''),
            on_action: this.fb.array([this.fb.control('')]),
            image: this.fb.control(''),
            width: this.fb.control('')
    });
  }

 addAction() {
      this.actionsArray.push(this.fb.control(''))
 }

 deleteAction(index: number) {
      this.actionsArray.removeAt(index);
 }

  addValuesToForm(point: ZonesEditor) {
      this.zonesForm.get('id').setValue(point.id);
      this.zonesForm.get('title').setValue(point.title);
      if (point.unique_id !== 'zone_regen') {
          this.zonesForm.get('type_of_zone').setValue(point?.unique_id.substring(0, point?.unique_id.length - 2));
      } else {
          this.zonesForm.get('type_of_zone').setValue(point?.unique_id);
      }
      this.zonesForm.get('stroke_width').setValue(point.stroke_width);
      this.zonesForm.get('latitude').setValue(point.center.latitude);
      this.zonesForm.get('longitude').setValue(point.center.longitude);
      this.zonesForm.get('radius').setValue(point.radius);
      this.zonesForm.get('fill_color').setValue(point.fill_color);
      this.zonesForm.get('image').setValue(point.icon.image);
      this.zonesForm.get('width').setValue(point.icon.width);
      if (point.on_enter?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_enter');
          point.on_enter.forEach(p => {this.actionsArray.push(this.fb.control(p))})
      } else if (point.on_exit?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_exit');
          point.on_exit.forEach(p => {this.actionsArray.push(this.fb.control(p))})
      }
  }



  onSelect(point: ZonesEditor, index: number) {
    point.id = index;
    this.selectedPoint = point;
    this.addValuesToForm(point);
  }

  onDelete(index: number) {
    this.pointForDelete.emit(index);
  }

  onCancel() {
      this.actionsArray.clear();
  }

  onSubmit() {
     const newPoint = new ZonesEditor();
     console.log()
     newPoint.id = this.zonesForm.get('id').value;
     newPoint.title = this.zonesForm.get('title').value;
     newPoint.unique_id = this.zonesForm.get('type_of_zone').value;
     newPoint.center.longitude = this.zonesForm.get('longitude').value;
     newPoint.center.latitude = this.zonesForm.get('latitude').value;
     newPoint.fill_color = this.zonesForm.get('fill_color').value;
     if (this.zonesForm.get('enter_or_exit').value === 'on_enter') {
         newPoint.on_enter = this.actionsArray.value;
         newPoint.on_exit = [];
     } else if (this.zonesForm.get('enter_or_exit').value === 'on_exit') {
         newPoint.on_exit = this.actionsArray.value;
         newPoint.on_enter = [];
     }
     newPoint.radius = this.zonesForm.get('radius').value;
     newPoint.stroke_width =  this.zonesForm.get('stroke_width').value;
     newPoint.icon.width = this.zonesForm.get('width').value;
     newPoint.icon.image = this.zonesForm.get('image').value;

     this.returnedPoint.emit(newPoint);
     this.actionsArray.clear();
  }
}
