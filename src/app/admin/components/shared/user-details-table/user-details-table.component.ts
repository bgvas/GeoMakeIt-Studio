import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-details-table',
  templateUrl: './user-details-table.component.html',
  styleUrls: ['./user-details-table.component.css']
})
export class UserDetailsTableComponent implements OnInit {

  @Input() user: any;
  @Output() detailsForm = new EventEmitter();
  userDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.addValuesToForm();
  }

  initializeForm() {
    this.userDetailsForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.email, Validators.required]),
      fname: this.fb.control('', Validators.required),
      lname: this.fb.control('', Validators.required),
      isActive: this.fb.control(''),
      role: this.fb.control('')
    })
  }

  addValuesToForm() {
    this.userDetailsForm.get('username').setValue(this.user?.username);
    this.userDetailsForm.get('fname').setValue(this.user?.fname);
    this.userDetailsForm.get('lname').setValue(this.user?.lname);
    this.userDetailsForm.get('email').setValue(this.user?.email);
    this.userDetailsForm.get('isActive').setValue(this.user?.isActive === 1);
    this.userDetailsForm.get('role').setValue(this.user?.role);
  }

  onCancel() {

  }

  onSubmit() {
    if(this.userDetailsForm.valid) {
      this.detailsForm.emit(this.userDetailsForm.value);
    }
  }
}
