import { TestBed } from '@angular/core/testing';

import { NgxStarReviewService } from './ngx-star-review.service';

describe('NgxStarReviewService', () => {
  let service: NgxStarReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStarReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
