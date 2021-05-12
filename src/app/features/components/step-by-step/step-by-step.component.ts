import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FeaturesService} from '../../services/features.service';
import {getSortHeaderNotContainedWithinSortError} from '@angular/material/sort/sort-errors';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.css']
})
export class StepByStepComponent implements OnInit {

  images: any;
  numOfImage = 1;
  firstStep = true;
  lastStep: boolean;
  constructor(private router: Router, private featuresService: FeaturesService) { }

  ngOnInit(): void {
    this.featuresService.getStepByStepImages().subscribe(image => {
      this.images = image.images;
    })
    console.log(this.numOfImage);
  }

  onPreviousClick() {
    if (this.numOfImage <= 1) {
      this.firstStep = true;
      this.lastStep = false;
      this.numOfImage = 1;
    } else {
      this.firstStep = false;
      this.lastStep = false;
      this.numOfImage = this.numOfImage - 1 ;
    }
  }

  onNextClick() {
    const values = this.images.length;
    if (this.numOfImage === values - 1 ) {
      this.firstStep = false;
      this.lastStep = true;
      this.numOfImage = values - 1 ;
    } else {
      this.firstStep = false;
      this.lastStep = false;
      this.numOfImage = this.numOfImage + 1;
    }
  }

  onReturn() {
    this.router.navigate(['home']);
  }

}
