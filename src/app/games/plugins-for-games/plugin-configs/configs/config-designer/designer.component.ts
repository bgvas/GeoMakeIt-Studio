import {Component, Input, OnInit} from '@angular/core';
import {RootDesigner} from '../../../../../classes/designers/rootDesignerClass/root-designer';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  @Input() designerFile: any;
  @Input() dataFile: any;
  @Input() error: any;

  designer: RootDesigner;
  data: any;
  dataForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
   this.designerFile.subscribe(data => {
       this.designer = data;
   });
    this.dataFile.subscribe(data => {
      this.data = data;
      this.initializeForm();
      this.fillForm(data);
    })
  }

  get dataFormGroup(): FormGroup {
      return this.dataForm as FormGroup;
  }

  initializeForm(): void {
    this.dataForm = this.fb.group({
    })
  }

  isObject(obj): boolean {
    return (obj instanceof Object);
  }

  // make the sorting in ngFor, like JSON sorting
  asIsOrderInPipe(a, b): any {
    return 1;
  }

  fillForm(obj): void {

      for (const item in obj) {
          if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
              this.dataForm.addControl(item, this.fb.group({}));
              for (const value in obj[item]) {
                  if (typeof (obj[item])[value] === 'object' && !Array.isArray((obj[item])[value])) {
                      (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.group({}));
                  }
                  if (Array.isArray((obj[item])[value])) {
                      (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.array((obj[item])[value]));
                  }
                  if (typeof (obj[item])[value] !== 'object') {
                      (this.dataForm.get(item) as FormGroup).addControl(value, this.fb.control(''));
                      (this.dataForm.get(item) as FormGroup).get(value).setValue((obj[item])[value]);
                  }
              }
          }
          if (Array.isArray(obj[item])) {
              this.dataForm.addControl(item, this.fb.array(obj[item]));
          }
          if (typeof obj[item] !== 'object') {
              this.dataForm.addControl(item, this.fb.control(''));
              (this.dataForm.get(item)).setValue(obj[item]);
          }
      }
  }

  onSubmit(): void {
      console.log(JSON.stringify(this.dataForm.value));
  }

  removeUnderscore(str): string {
      return str.replace(/_/g, ' ');
  }

  removeStringBeforeDot(str): string {
      if (str === '') {
          return str;
      } else {
          const index = str.indexOf('.') + 1;
          return str.substring(index, (str.length));
      }
  }

  isEmpty(value): boolean {
      if (value.length === 0) {
          return true;
      }
      return false;

  }



}
