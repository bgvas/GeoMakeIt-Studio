import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {UserService} from '../../../../user/services/user.service';
import {NotificationsComponent} from '../../../../shared/components/notifications/notifications.component';
import {Router} from '@angular/router';
import {FeaturesService} from '../../../../shared/services/features.service';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  notification = new NotificationsComponent();

  constructor(private service: AdminService, private userService: UserService, private router: Router, private sharedService: FeaturesService) { }

  ngOnInit(): void {
    this.user = this.service.storeObject;
  }

  onDelete(event, user) {
      if (event) {
        this.userService.deleteUser(user.id).subscribe(deleted => {
          this.notification.display(deleted.displayed_message, 'success')
          this.router.navigate(['admin/users']);
        },
            (error) => {
              this.notification.display(error.displayed_message, 'danger')
              this.router.navigate(['admin/users']);
              console.log('Error in delete-user' + error.message + error.code);
            })
      }
  }

    // send user to deletePopUp, ask for delete //
    onClickDelete(user) {
        this.sharedService.temporary_save = user;
    }

  onSubmit(form) {
      this.userService.updateUser(form, this.user?.id).subscribe(updated => {
        this.notification.display(updated.displayed_message, 'success')
        this.router.navigate(['admin/users']);
      },
      (error) => {
        this.notification.display('Error in update process', 'danger')
        this.router.navigate(['admin/users']);
        console.log('Error in update-user ' + error.message + ' - ' + error.code);
      })
  }

}
