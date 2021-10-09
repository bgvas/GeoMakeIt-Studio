import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-registration-results',
  templateUrl: './registration-results.component.html',
  styleUrls: ['./registration-results.component.css']
})
export class RegistrationResultsComponent implements OnInit{

  registrationSucceedMessage: string;
  registrationErrorMessage: string;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.registrationSucceedMessage = this.service?.successMessage || null;
    this.registrationErrorMessage = this.service?.errorMessage || null;
  }

}
