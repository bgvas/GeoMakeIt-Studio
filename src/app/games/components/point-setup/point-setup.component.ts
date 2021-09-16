import {Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Zones_model} from '../../../plugins/models/designer-models/zones/Zones_model';
import {Observable, Subject} from 'rxjs';
import {Error} from '../../../error-handling/error/error';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-point-setup',
  templateUrl: './point-setup.component.html',
  styleUrls: ['./point-setup.component.css']
})
export class PointSetupComponent implements OnInit, OnDestroy {


  point: Zones_model;
  zonesForm: FormGroup;
  actionsArray = new FormArray([]);
  closeResult: string;
  private unsubscribe = new Subject<void>();
  @Output() pointForDelete = new EventEmitter<number>();
  @Output() returnedPoint = new EventEmitter<Zones_model>();
  @Input() selectedPoint: Observable<Zones_model>;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.initializeForm();
      this.selectedPoint?.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
          this.point = data
          this.addValuesToForm(data);
      },
          (error: Error) => {
                console.log('error from selectedPoint: ' + error.message);
          })
  }

  ngOnDestroy() {
     this.unsubscribe.next();
     this.unsubscribe.complete();
  }

  initializeForm() {
    this.zonesForm = this.fb.group({
            id: this.fb.control(''),
            title: this.fb.control('', Validators.required),
            latitude: this.fb.control(''),
            // type_of_zone: this.fb.control(''),
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

  addValuesToForm(point: Zones_model) {
      this.zonesForm.get('id').setValue(point.id);
      this.zonesForm.get('title').setValue(point.title);
      this.zonesForm.get('unique_id').setValue(point?.unique_id);
      this.zonesForm.get('stroke_width').setValue(point.stroke_width);
      this.zonesForm.get('latitude').setValue(point.center.latitude);
      this.zonesForm.get('longitude').setValue(point.center.longitude);
      this.zonesForm.get('radius').setValue(point.radius);
      this.zonesForm.get('fill_color').setValue(point.fill_color);
      this.zonesForm.get('image').setValue(point.icon.image);
      this.zonesForm.get('width').setValue(point.icon.width);
      if (point.on_enter?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_enter');
          point.on_enter.forEach(p => {
              this.actionsArray.push(this.fb.control(p));
          })
      } else if (point.on_exit?.length > 0) {
          this.zonesForm.get('enter_or_exit').setValue('on_exit');
          point.on_exit.forEach(p => {
              this.actionsArray.push(this.fb.control(p))
          })
      }
  }


  onDelete(index: number) {
    this.pointForDelete.emit(index); // send this to gameSetup for delete //
  }

  onCancel() {
      this.actionsArray.clear();
  }

  onSubmit() {
     const newPoint = new Zones_model();
     newPoint.id = this.zonesForm.get('id').value;
     newPoint.title = this.zonesForm.get('title').value;
     newPoint.unique_id = (this.zonesForm.get('title').value).toString().toLowerCase();
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

     this.returnedPoint.emit(newPoint);  // return updated point  //
     this.actionsArray.clear();
  }
}
