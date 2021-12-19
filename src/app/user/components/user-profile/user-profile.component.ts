import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from 'app/user/models/user';
import { Subject } from 'rxjs';
import {UserService} from '../../services/user.service';
import {take, takeUntil} from 'rxjs/operators';
import {UpdateUserProfileRequestModel} from '../../models/update-user-profile-request-model';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  userProfileForm: FormGroup;
  editProfile: boolean;
  profile = <User>JSON.parse(sessionStorage.getItem('user'));
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit() {
    this.editProfile = false;
    this.initializeForm();
  }

  onEdit() {
    this.editProfile = !this.editProfile;
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

  addValuesToForm() {
    this.userProfileForm.get('name').setValue(this.profile?.name);
    this.userProfileForm.get('email').setValue(this.profile?.email);
  }


  onUpdateProfile() {
    this.service.updateUser(this.userProfileForm.value, this.profile.id).pipe(take(1)).subscribe(updatedUser => {
      this.notification.display('User\'s profile, updated successfully.', 'success');
    },
        (error: ErrorResponseModel) => {
      this.notification.display('Can\'t update user\'s profile!!!', 'danger');
            console.log('error in update profile');
        })
  }

  onExit() {
    this.userProfileForm.reset();
    this.editProfile = false;
  }

}
