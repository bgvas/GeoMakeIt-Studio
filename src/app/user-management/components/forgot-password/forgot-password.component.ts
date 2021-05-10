import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  emailSend: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.passwordForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  onClick() {
    this.emailSend = true;
  }

}
