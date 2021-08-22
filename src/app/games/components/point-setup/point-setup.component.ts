import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ZonesEditor} from '../../../plugins/models/designer-models/zones/ZonesEditor';
import {DesignerService} from '../../services/designer.service';

@Component({
  selector: 'app-point-setup',
  templateUrl: './point-setup.component.html',
  styleUrls: ['./point-setup.component.css']
})
export class PointSetupComponent implements OnInit {

  @Input() points: ZonesEditor[];
  zonesForm: FormGroup;
  selectedPoint: ZonesEditor;

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
            radius: this.fb.control(''),
            longitude: this.fb.control(''),
            unique_id: this.fb.control(''),
            fill_color: this.fb.control(''),
            stroke_width: this.fb.control(''),
            enter_or_exit: this.fb.control(''),
            on_action: this.fb.array([]),
            image: this.fb.control(''),
            width: this.fb.control('')
    });
  }

  addValuesToForm(point: ZonesEditor) {
      this.zonesForm.get('id').setValue(point.id);
      this.zonesForm.get('title').setValue(point.title);
      this.zonesForm.get('stroke_width').setValue(point.stroke_width);
      this.zonesForm.get('latitude').setValue(point.center.latitude);
      this.zonesForm.get('longitude').setValue(point.center.longitude);
      this.zonesForm.get('radius').setValue(point.radius);
      this.zonesForm.get('fill_color').setValue(point.fill_color);
      if (point.on_enter?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_enter');
          this.zonesForm.get('on_action').setValue(point.on_enter);
      } else if (point.on_exit?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_exit');
          this.zonesForm.get('on_action').setValue(point.on_exit);
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

  onSubmit() {
     const newPoint = new ZonesEditor();
     newPoint.id = this.zonesForm.get('id').value;
     newPoint.title = this.zonesForm.get('title').value;
     newPoint.unique_id = 'zone_' + this.zonesForm.get('title').value.toLowerCase().replace(/ /g, '_'); // create unique_id from title
     newPoint.center.longitude = this.zonesForm.get('longitude').value;
     newPoint.center.latitude = this.zonesForm.get('latitude').value;
     newPoint.fill_color = this.zonesForm.get('fill_color').value;
     if (this.zonesForm.get('enter_or_exit').value === 'on_enter') {
         newPoint.on_enter = this.zonesForm.get('on_action').value;
         newPoint.on_exit = [];
     } else if (this.zonesForm.get('enter_or_exit').value === 'on_exit') {
         newPoint.on_exit = this.zonesForm.get('on_action').value;
         newPoint.on_enter = [];
     }
     newPoint.radius = this.zonesForm.get('radius').value;
     newPoint.stroke_width =  this.zonesForm.get('stroke_width').value;
     newPoint.icon.width = this.zonesForm.get('width').value;
     newPoint.icon.image = this.zonesForm.get('image').value;

     this.returnedPoint.emit(newPoint);
  }
}
