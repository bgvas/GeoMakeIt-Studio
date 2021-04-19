import { TestBed } from '@angular/core/testing';

import { HideBarsService } from './hide-bars.service';

describe('HideBarsService', () => {
  let service: HideBarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideBarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
