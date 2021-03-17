import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-plugin',
  templateUrl: './create-plugin.component.html',
  styleUrls: ['./create-plugin.component.css']
})
export class CreatePluginComponent implements OnInit {

  createPluginForm: FormGroup;


  constructor(private location: Location, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createPluginForm = this.fb.group({
      identifier: this.fb.control('',
          [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32),
            Validators.pattern('^[a-z]{1}[a-z0-9_]{2,31}$')])
    })
  }


  onCancel(): void {
    this.location.back();
  }

  change(char: string): string {
      return char.toLowerCase();
  }
}
