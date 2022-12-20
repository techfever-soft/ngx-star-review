export interface StarReviewConfig {
  mode: string | 'default' | 'material' | 'material-toggle';
  theme: string | 'primary' | 'accent';
  starCount: number;
}

export interface StarReview {
  value: number;
  selected: boolean;
}
