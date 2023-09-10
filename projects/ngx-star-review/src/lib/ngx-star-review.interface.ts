import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface StarReviewConfig {
  /**
   * The mode of star review.
   *
   * @type string | 'default' | 'material' | 'material-toggle';
   * @default default
   */
  mode: string | 'default' | 'material' | 'material-toggle';
  /**
   * The theme used by Angular Material
   *
   * @type string | 'primary' | 'accent'
   * @default primary
   */
  theme: string | 'primary' | 'accent';
  /**
   * The count of stars you want to display
   *
   * @type number
   * @default 5
   */
  starCount: number;

  /**
   * The custom icons you want to use. Use text and selectedText
   * properties to customize the icons with <mat-icon>.
   * If you want to use FontAwesome, you must use
   * icon and SelectedIcon properties.
   *
   * @type StarReviewIcon
   * @default { text: 'check', selectedText: 'check_circle' }
   */
  customIcon: StarReviewIcon;
}

export interface StarReview {
  /**
   * The value of the star
   *
   * @type number
   */
  value: number;

  /**
   * Defines if the star is selected
   *
   * @type boolean
   */
  selected: boolean;
}

export interface StarReviewIcon {
  /**
   *  Defines the text icon for <mat-icon>
   *
   * @type ?string
   * @default check
   */
  text?: string;

  /**
   * Defines the text icon when selected for <mat-icon>
   *
   * @type ?string
   * @default check_circle
   */
  selectedText?: string;

  /**
   * Defines the icon for <fa-icon>
   *
   * @type ?any | IconDefinition | IconProp
   */
  icon?: any | IconDefinition;

  /**
   * Defines the icon when selected for <fa-icon>
   *
   * @type ?any | IconDefinition | IconProp
   */
  selectedIcon?: any | IconDefinition;
}
