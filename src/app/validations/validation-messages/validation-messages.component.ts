import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() formName: FormGroup;
  @Input() groupName: string;
  @Input() controlName: string;
  @Input() validation: any;


  constructor() { }

  ngOnInit(): void {

  }

  isArray(obj): boolean {
    return Array.isArray(obj);
  }

  isEmpty(obj): boolean{
    return ((obj as FormArray).length === 0);
  }

}
