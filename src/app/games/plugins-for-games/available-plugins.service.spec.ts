import { TestBed } from '@angular/core/testing';

import { AvailablePluginsService } from './available-plugins.service';

describe('AvailablePluginsService', () => {
  let service: AvailablePluginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailablePluginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
