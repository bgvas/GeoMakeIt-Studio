import { Component, OnInit } from '@angular/core';
import {User} from '../../../../user-management/models/user';
import {UserService} from '../../../../user-management/services/user.service';
import {NotificationsComponent} from '../../../../shared/components/notifications/notifications.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  notification = new NotificationsComponent();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: User) {
   form.password = 'test';
   this.userService.newUser(form).subscribe(newUser => {
      this.notification.display('User created successfully.', 'success');
      this.router.navigate(['admin/users']);
     },
       (error) => {
          this.notification.display(error.displayed_message, 'danger');
          this.router.navigate(['admin/users']);
          console.log(error.message);
       })
  }

}
