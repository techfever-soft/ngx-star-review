import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';

import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StarReview } from './ngx-star-review.interface';

@Injectable({
  providedIn: 'root',
})
export class NgxStarReviewService {
  constructor() {}

  /**
   * Generates an array of stars to use in your component
   *
   * @public
   * @param number starCount
   * @returns StarReview[]
   */
  public generateRatingStars(starCount: number): StarReview[] {
    let stars: StarReview[] = [];

    for (let i = 1; i <= starCount; i++) {
      const newStar: StarReview = {
        value: i,
        selected: i == 1 ? true : false,
      };
      stars.push(newStar);
    }

    return stars;
  }

  /**
   *  When the user clicks on a star, all the stars will be selected
   *
   * @public
   * @param number index
   * @param StarReview[] stars
   * @param FormControl control
   */
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

  
  /**
   * When the user clicks on a star, all the stars will be checked
   *
   * @public
   * @param number index
   * @param FormControl control
   * @param MatButtonToggleGroup toggleGroup
   */
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
