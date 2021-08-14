import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Error} from '../../../classes/error/error';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})


export class ActivateAccountComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.activateAccount({'token': params['token']}).subscribe(userActivated => {
            this.service.element = userActivated['displayed_message'];
            this.router.navigate(['login']);
          },
          (error: Error) => {
            this.service.element = error.displayed_message;
            console.log('Error in user activation: ' + error.message);
            this.router.navigate(['login']);
          })
    });
  }

}
