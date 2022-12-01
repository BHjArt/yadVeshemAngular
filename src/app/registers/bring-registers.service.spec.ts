import { TestBed } from '@angular/core/testing';

import { BringRegistersService } from './bring-registers.service';

describe('BringRegistersService', () => {
  let service: BringRegistersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BringRegistersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
