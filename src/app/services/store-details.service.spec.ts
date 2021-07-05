import { TestBed } from '@angular/core/testing';

import { StoreDetailsService } from './store-details.service';

describe('StoreDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDetailsService = TestBed.get(StoreDetailsService);
    expect(service).toBeTruthy();
  });
});
