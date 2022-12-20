import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { StarReview } from './ngx-star-review.interface';

@Injectable({
  providedIn: 'root',
})
export class NgxStarReviewService {
  constructor() {}

  public onStarClick(
    index: number,
    stars: StarReview[],
    control: FormControl
  ): void {
    const foundStar = stars.findIndex((star) => star.value === index);
    let selectedStarsArray = [];

    stars.forEach((star, index) => {
      star.selected = false;
      if (index <= foundStar) {
        star.selected = true;
        selectedStarsArray.push(star);
      }
    });

    control.setValue(index);
  }

  public onStarToggleClick(
    index: number,
    control: FormControl,
    toggleGroup: MatButtonToggleGroup
  ) {
      toggleGroup._buttonToggles.forEach(toggleButton => {
        if (toggleButton.value <= index) {
          toggleButton.checked = true;
        } else {
          toggleButton.checked = false;
        }
      })

    control.setValue(index);
  }
}
