import { TestBed } from '@angular/core/testing';

import { InstalledPluginsService } from './installed-plugins.service';

describe('InstalledPluginsService', () => {
  let service: InstalledPluginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstalledPluginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
