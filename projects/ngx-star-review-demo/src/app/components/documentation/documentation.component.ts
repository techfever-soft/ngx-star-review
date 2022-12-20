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

  public displayedColumns = ['name', 'type', 'default', 'description'];

  public properties = [
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
    },
    {
      name: 'minDisabled',
      type: 'boolean',
      default: false,
      description: 'If the first star is always selected and disabled',
    },
    {
      name: 'rating',
      type: 'EventEmitter',
      default: undefined,
      description: 'The event reflected on star review changed',
    },
  ];

  constructor() {}
}
