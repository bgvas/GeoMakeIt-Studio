import { TestBed } from '@angular/core/testing';

import { DeclareFormControlsService } from './declare-form-controls.service';

describe('DeclareFormControlsService', () => {
  let service: DeclareFormControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareFormControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
