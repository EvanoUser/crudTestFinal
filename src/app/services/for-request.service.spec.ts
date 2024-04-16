import { TestBed } from '@angular/core/testing';

import { ForRequestService } from './for-request.service';

describe('ForRequestService', () => {
  let service: ForRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
