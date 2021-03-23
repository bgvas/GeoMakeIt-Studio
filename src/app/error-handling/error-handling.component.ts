import {Component, Input, OnInit} from '@angular/core';
import {Error} from '../classes/error/error';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  @Input() errorCode: Error;

  constructor() { }

  ngOnInit(): void {

  }

  errorResponse() {
    return this.errorCode?.message;
  }



}
