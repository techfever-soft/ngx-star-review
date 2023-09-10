import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  IconDefinition,
  faStar as outlineStar,
} from '@fortawesome/free-regular-svg-icons';

import { Component } from '@angular/core';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public reviewForm: FormGroup;
  public faStarOutline = outlineStar;
  public faStarSolid = solidStar;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      firstReview: [1],
      secondReview: [1],
      thirdReview: [1],
    });
  }

  public changeFirstReview(starCount: number): void {
    this.firstReview.patchValue(starCount);
  }

  public changeSecondReview(starCount: number): void {
    this.secondReview.patchValue(starCount);
  }

  public changeThirdReview(starCount: number): void {
    this.thirdReview.patchValue(starCount);
  }

  public get firstReview(): FormControl {
    return this.reviewForm.get('firstReview') as FormControl;
  }

  public get secondReview(): FormControl {
    return this.reviewForm.get('secondReview') as FormControl;
  }

  public get thirdReview(): FormControl {
    return this.reviewForm.get('thirdReview') as FormControl;
  }
}
