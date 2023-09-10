import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStarReviewComponent } from './ngx-star-review.component';

describe('NgxStarReviewComponent', () => {
  let component: NgxStarReviewComponent;
  let fixture: ComponentFixture<NgxStarReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxStarReviewComponent]
    });
    fixture = TestBed.createComponent(NgxStarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
