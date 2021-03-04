import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  createGameForm: FormGroup;

  constructor(private location: Location, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createGameForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
  }


  onCancel(): void {
    this.location.back();
  }
}
