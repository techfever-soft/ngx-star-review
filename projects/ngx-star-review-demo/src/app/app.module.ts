import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStarReviewModule } from 'ngx-star-review';

import { AppComponent } from './app.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ExamplesComponent } from './components/examples/examples.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

@NgModule({
  declarations: [AppComponent, ExamplesComponent, DocumentationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxStarReviewModule,
    HighlightModule,

    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
