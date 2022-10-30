import { TestBed } from '@angular/core/testing';

import { AuxServiceService } from './aux-service.service';

describe('AuxServiceService', () => {
  let service: AuxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
