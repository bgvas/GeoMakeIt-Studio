import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})


export class ActivateAccountComponent implements OnInit {

  tokenElement: any;

  constructor(private activatedRoute: ActivatedRoute, private service: AuthService, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.activateAccount({'token': params['token']}).subscribe(userActivated => {
        this.service._element = userActivated.message;
        this.router.navigate(['login']);
      },
          (error: Error) => {
            this.service._element = error.message
            console.log('Error in user activation: ' + error.message);
          })
    });
  }

  ngOnInit(): void {
  }

}
