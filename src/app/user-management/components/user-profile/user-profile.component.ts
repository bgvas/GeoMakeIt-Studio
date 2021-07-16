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
  profile: User;
  private unsubscribe = new Subject<void>();


  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.initializeForm();
    this.service.getUserProfile().pipe(takeUntil(this.unsubscribe)).subscribe(userProfile =>{
      this.profile = userProfile;
      this.addValuesToForm(userProfile);
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initializeForm() {
    this.userProfileForm = this.fb.group({
      lname: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.email, Validators.required])
     /* photo: this.fb.control('')*/
    })
  }

  addValuesToForm(value){
    this.userProfileForm.get('lname').setValue(value.name);
    this.userProfileForm.get('email').setValue(value.email);
  }


  onUpdateProfile() {
    console.log(this.userProfileForm.controls);
  }
}
