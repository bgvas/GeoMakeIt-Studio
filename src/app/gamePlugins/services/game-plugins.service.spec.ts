import { TestBed } from '@angular/core/testing';

import { GamePluginsService } from './game-plugins.service';

describe('GamePluginsService', () => {
  let service: GamePluginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePluginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
