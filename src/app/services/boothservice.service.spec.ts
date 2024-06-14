import { TestBed } from '@angular/core/testing';

import { BoothserviceService } from './boothservice.service';

describe('BoothserviceService', () => {
  let service: BoothserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoothserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
