import { TestBed } from '@angular/core/testing';

import { TaxRatingService } from './tax-rating.service';

describe('TaxRatingService', () => {
  let service: TaxRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
