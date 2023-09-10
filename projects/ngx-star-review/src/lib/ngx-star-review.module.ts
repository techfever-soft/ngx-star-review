import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgxStarReviewComponent } from './ngx-star-review.component';

@NgModule({
  declarations: [NgxStarReviewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  exports: [NgxStarReviewComponent],
})
export class NgxStarReviewModule {}
