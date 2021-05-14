import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-stepper-wizard',
  templateUrl: './stepper-wizard.component.html',
  styleUrls: ['./stepper-wizard.component.css']
})
export class StepperWizardComponent implements OnInit {

  isEditable: true;
  project: any;

  constructor(private projectService: GameService) { }

  ngOnInit(): void {
    this.project = this.projectService.object;
  }

}
