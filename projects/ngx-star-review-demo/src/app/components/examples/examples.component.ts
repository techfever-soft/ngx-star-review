import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import {
  faStar as outlineStar,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  public reviewForm: FormGroup;
  public faStarOutline: IconDefinition = outlineStar;
  public faStarSolid: IconDefinition = solidStar;

  public defaultReviewCodeShowed: boolean = false;
  public iconButtonsReviewCodeShowed: boolean = false;
  public buttonsToggleReviewCodeShowed: boolean = false;

  public firstReviewHTMLCode = `
<ngx-star-review
  [starCount]="5"
  [control]="review"
  [customIcon]="{
    icon: faStarOutline,
    selectedIcon: faStarSolid
  }"
  [minDisabled]="true"
  (rating)="changeReview($event)"
  mode="default"
  class="mx-auto"
></ngx-star-review>
  `;

  public firstReviewTSCode = `
import { faStar as outlineStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

export class AppComponent {
  public reviewForm: FormGroup;
  public faStarOutline = outlineStar;
  public faStarSolid = solidStar;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      review: [1],
    })
  }

  public get review(): FormControl {
    return this.reviewForm.get('review') as FormControl;
  }
  
  public changeReview(starCount: number) {
    this.review.patchValue(starCount);
  }

}
`;

  public secondReviewHTMLCode = `
<ngx-star-review
  [starCount]="5"
  [control]="review"
  (rating)="changeReview($event)"
  [minDisabled]="true"
  [customIcon]="{
    text: 'check',
    selectedText: 'check_circle'
  }"
  mode="material"
></ngx-star-review>
  `;

  public secondReviewTSCode = `
export class AppComponent {
  public reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      review: [1],
    })
  }

  public get review(): FormControl {
    return this.reviewForm.get('review') as FormControl;
  }
  
  public changeReview(starCount: number) {
    this.review.patchValue(starCount);
  }

}
`;

  public thirdReviewHTMLCode = `
<ngx-star-review
  [starCount]="5"
  [control]="reviewToggle"
  [minDisabled]="false"
  [customIcon]="{
    text: 'favorite',
    selectedText: 'favorite'
  }"
  (rating)="changeReviewToggle($event)"
  theme="accent"
  mode="material-toggle"
></ngx-star-review>
`;

  constructor(
    private fb: FormBuilder,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) {
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

  public copyCodeSnippet(content: string) {
    this.clipboard.copy(content);
    this.snackBar.open('Code copied to your clipboard', 'OK', {
      duration: 2000,
    });
  }
}
