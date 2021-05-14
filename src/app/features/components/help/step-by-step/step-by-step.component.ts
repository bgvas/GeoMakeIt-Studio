import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FeaturesService} from '../../../services/features.service';
import {getSortHeaderNotContainedWithinSortError} from '@angular/material/sort/sort-errors';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.css']
})
export class StepByStepComponent implements OnInit {

  numOfImage = 1;
  images: any;
  firstStep = true;
  lastStep: boolean;
  constructor(private router: Router, private featuresService: FeaturesService) { }

  ngOnInit(): void {
    this.featuresService.getStepByStepImages().subscribe(image => {
      this.images = image.images;
    })
  }

  onPreviousClick() {
    if (this.numOfImage === 1) {
      this.firstStep = true;
    } else {
      this.firstStep = false;
      this.numOfImage = this.numOfImage - 1 ;
    }
    this.lastStep = false;
  }

  onNextClick() {
    const values = this.images.length;
    if (this.numOfImage === values) {
      this.lastStep = true;
    } else {
      this.lastStep = false;
      this.numOfImage = this.numOfImage + 1;
    }
    this.firstStep = false;
  }

  onReturn() {
    this.router.navigate(['home']);
  }

}
