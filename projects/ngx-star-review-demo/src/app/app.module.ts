import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { NgxStarReviewModule } from 'ngx-star-review';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxStarReviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
