import { TestBed } from '@angular/core/testing';

import { ParkservService } from './parkserv.service';

describe('ParkservService', () => {
  let service: ParkservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
