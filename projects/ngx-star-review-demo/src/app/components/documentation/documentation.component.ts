import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent {
  public getPackageCode = `npm i -s ngx-star-review`;

  public moduleCode = `
import { NgModule } from '@angular/core';
import { NgxStarReviewModule } from 'ngx-star-review';

@NgModule({
  declarations: [AppModule],
  imports: [
    BrowserModule,
    // ...
    NgxStarReviewModule
  ]
})
export class AppModule {
  // ...
}
`;

  public usageCode = `<ngx-star-review></ngx-star-review>`;

  private rawProperties = [
    {
      name: 'starCount',
      type: 'number',
      default: 5,
      description: 'The number of stars you desire',
    },
    {
      name: 'mode',
      type: 'string',
      default: 'default',
      description: 'The mode of star rating used',
      accepted: ['default', 'material', 'material-toggle'],
    },
    {
      name: 'control',
      type: 'FormControl',
      default: undefined,
      description: 'The control you want to connect',
    },
    {
      name: 'customIcon',
      type: 'any',
      default: undefined,
      description: 'The custom stars you want to use',
      accepted: [
        'icon?: any',
        'selectedIcon?: any',
        'text?: string',
        'selectedText?: string',
      ],
    },
    {
      name: 'minDisabled',
      type: 'boolean',
      default: false,
      description: 'If the first star is always selected and disabled',
    },
    {
      name: 'theme',
      type: 'string',
      default: 'primary',
      description: 'Angular Material theme (primary or accent)',
      accepted: ['primary', 'accent'],
    },
    {
      name: 'rating',
      type: 'Subject<number>',
      default: undefined,
      description: 'The event reflected on star review changed',
    },
  ];

  public rawInterfaces = [
    {
      name: 'StarReviewConfig',
      properties: [
        {
          name: 'mode',
          type: "string | 'default' | 'material' | 'material-toggle'",
        },
        {
          name: 'theme',
          type: "string | 'primary' | 'accent'",
        },
        {
          name: 'starCount',
          type: 'number',
        },
        {
          name: 'customIcon',
          type: 'StarReviewIcon',
        },
      ],
    },
    {
      name: 'StarReview',
      properties: [
        {
          name: 'value',
          type: 'number',
        },
        {
          name: 'selected',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'StarReviewIcon',
      properties: [
        {
          name: 'text',
          type: 'string',
        },
        {
          name: 'selectedText',
          type: 'string',
        },
        {
          name: 'icon',
          type: 'any | IconDefinition | IconProp',
        },
        {
          name: 'selectedIcon',
          type: 'any | IconDefinition | IconProp',
        },
      ],
    },
  ];

  constructor() {}

  public get properties(): any[] {
    return this.rawProperties.sort((one, two) =>
      one.name > two.name ? 1 : -1
    );
  }

  public get interfaces(): any[] {
    let newInterfaces: any[] = [];

    this.rawInterfaces.forEach((i) => {
      i.properties = i.properties.sort((one, two) =>
        one.name > two.name ? 1 : -1
      );
      newInterfaces.push(i);
    });

    return newInterfaces.sort((one, two) => (one.name > two.name ? 1 : -1));
  }
}
