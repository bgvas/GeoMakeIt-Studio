import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onHomeClick() {
    this.router.navigate(['home']);
  }

  onHelpClick() {
    this.router.navigate(['']);
  }

  onUserClick() {
    this.router.navigate(['']);
  }




}
