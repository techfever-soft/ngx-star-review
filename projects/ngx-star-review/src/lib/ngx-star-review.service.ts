import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatButtonToggle,
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
    const foundStarIndex: number = stars.findIndex(
      (star) => star.value === index
    );
    let selectedStarsArray: StarReview[] = [];

    stars.forEach((star: StarReview, index: number) => {
      star.selected = false;
      if (index <= foundStarIndex) {
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
  ): void {
    toggleGroup._buttonToggles.forEach((toggleButton: MatButtonToggle) => {
      if (toggleButton.value <= index) {
        toggleButton.checked = true;
      } else {
        toggleButton.checked = false;
      }
    });

    control.setValue(index);
  }
}
