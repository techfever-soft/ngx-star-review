import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Subject } from 'rxjs';
import { StarReview, StarReviewConfig } from './ngx-star-review.interface';
import { NgxStarReviewService } from './ngx-star-review.service';

@Component({
  selector: 'ngx-star-review',
  templateUrl: './ngx-star-review.component.html',
  styles: [],
})
export class NgxStarReviewComponent implements OnInit {
  @Input('starCount') public starCount?: StarReviewConfig['starCount'] = 5;
  @Input('mode') public mode?: StarReviewConfig['mode'] = 'default';
  @Input('theme') public theme?: StarReviewConfig['theme'] = 'primary';
  @Input('control') public control: FormControl = new FormControl(1);
  @Input('minDisabled') public minDisabled?: boolean = false;
  @Input('customIcon') public customIcon: any = {
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

    this.ratingStars = this.generateRatingStars(
      this.starCount ? this.starCount : 5
    );
  }

  private generateRatingStars(starCount: number): StarReview[] {
    let stars: any[] = [];

    for (let i = 1; i <= starCount; i++) {
      stars.push({
        value: i,
        selected: i == 1 ? true : false,
      });
    }

    return stars;
  }

  public onStarClick(value: number): void {
    const control = this.ratingForm.get('rating') as FormControl;
    this.reviewService.onStarClick(
      value,
      this.ratingStars,
      this.control ? this.control : control
    );
    this.rating.next(value);
  }

  public onStarToggleClick(
    value: number,
    toggleGroup: MatButtonToggleGroup
  ): void {
    const control = this.ratingForm.get('rating') as FormControl;
    this.reviewService.onStarToggleClick(
      value,
      this.control ? this.control : control,
      toggleGroup
    );
    this.rating.next(value);
  }

}
