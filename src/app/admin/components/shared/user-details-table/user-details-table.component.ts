import {AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../../user-management/services/user.service';



@Component({
  selector: 'app-user-details-table',
  templateUrl: './user-details-table.component.html',
  styleUrls: ['./user-details-table.component.css']
})
export class UserDetailsTableComponent implements OnInit, AfterViewChecked {

  @Input() user: any;
  @Output() detailsForm = new EventEmitter();
  userDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initializeForm();
    this.addValuesToForm();
  }

  // To avoid error ExpressionChangedAfterItHasBeenChecked (implement AfterViewChecked and on constructor//
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  initializeForm() {
    this.userDetailsForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.email, Validators.required]),
      role_id: this.fb.control('')
    })
  }

  addValuesToForm() {
    this.userDetailsForm.get('name').setValue(this.user?.name);
    this.userDetailsForm.get('email').setValue(this.user?.email);
    this.userDetailsForm.get('role_id').setValue(this.user?.role_id !== undefined ? this.user?.role_id : 2);
  }

  onCancel() {
      this.router.navigate(['admin/users']);
  }

  onSubmit() {
    if (this.userDetailsForm.valid) {
      this.detailsForm.emit(this.userDetailsForm.value);
      this.router.navigate(['admin/users'])
    }
  }

  checkIfEmailExists(): boolean {
    if (this.userDetailsForm.get('email').value === this.user?.email) {
      this.userDetailsForm.get('email').setErrors(null)
      return false;
    }
    return true;
  }


}
