import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  StarReview,
  StarReviewConfig,
  StarReviewIcon,
} from './ngx-star-review.interface';

import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { NgxStarReviewService } from './ngx-star-review.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-star-review',
  templateUrl: './ngx-star-review.component.html',
  styles: [],
})
export class NgxStarReviewComponent implements OnInit, OnChanges {
  @Input('starCount') public starCount?: StarReviewConfig['starCount'] = 5;
  @Input('mode') public mode?: StarReviewConfig['mode'] = 'default';
  @Input('theme') public theme?: StarReviewConfig['theme'] = 'primary';
  @Input('control') public control: FormControl = new FormControl(1);
  @Input('minDisabled') public minDisabled?: boolean = false;
  @Input('customIcon') public customIcon: StarReviewIcon = {
    icon: undefined,
    selectedIcon: undefined,
    text: 'check',
    selectedText: 'check_circle',
  };
  @Output('rating') public rating: Subject<number> = new Subject();
  public ratingStars: StarReview[] = [];
  public ratingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reviewService: NgxStarReviewService
  ) {
    this.ratingForm = this.fb.group({
      rating: [1, [Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    if (this.mode == '' || !this.mode) {
      this.mode = 'default';
    }

    this.updateStarsCount();
  }

  ngOnChanges(): void {
    this.updateStarsCount();
  }

  /**
   * Update the count of stars at each change
   * 
   * @private
   */
  private updateStarsCount() {
    this.ratingStars = this.reviewService.generateRatingStars(
      this.starCount ? this.starCount : 5
    );
  }

  /**
   * Send the clicked star to the review service to display the selected stars
   *
   * @public
   * @param number value
   */
  public onStarClick(value: number): void {
    const control: FormControl = this.ratingForm.get('rating') as FormControl;
    this.reviewService.onStarClick(
      value,
      this.ratingStars,
      this.control ? this.control : control
    );

    this.rating.next(value);
  }

  /**
   * Send the clicked star to the review service to display the selected stars
   *
   * @public
   * @param number value
   */
  public onStarToggleClick(
    value: number,
    toggleGroup: MatButtonToggleGroup
  ): void {
    const control: FormControl = this.ratingForm.get('rating') as FormControl;
    this.reviewService.onStarToggleClick(
      value,
      this.control ? this.control : control,
      toggleGroup
    );

    this.rating.next(value);
  }
}
