export interface StarReviewConfig {
  mode: string | 'default' | 'material' | 'material-toggle';
  theme: string | 'primary' | 'accent';
  starCount: number;
  customIcon: {
    text?: string;
    selectedText?: string;
    icon?: any;
    selectedIcon?: any;
  };
}

export interface StarReview {
  value: number;
  selected: boolean;
}
