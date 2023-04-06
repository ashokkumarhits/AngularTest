import { TestBed } from '@angular/core/testing';

import { ForeignkeyService } from './foreignkey.service';

describe('ForeignkeyService', () => {
  let service: ForeignkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
