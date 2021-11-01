import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from 'app/user-management/models/user';
import { Subject } from 'rxjs';
import {UserService} from '../../services/user.service';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userProfileForm: FormGroup;

  profile = <User>JSON.parse(sessionStorage.getItem('user'));
  private unsubscribe = new Subject<void>();


  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.initializeForm();

    /*this.service.getUserProfile().pipe(takeUntil(this.unsubscribe)).subscribe(userProfile => {
      this.profile = userProfile;
      this.addValuesToForm(userProfile);
    })*/
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initializeForm() {
    this.userProfileForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.email, Validators.required])
    })

    this.addValuesToForm();
  }

  addValuesToForm(){
    this.userProfileForm.get('name').setValue(this.profile?.name);
    this.userProfileForm.get('email').setValue(this.profile?.email);
  }


  onUpdateProfile() {
    console.log(this.userProfileForm.controls);
  }
}
