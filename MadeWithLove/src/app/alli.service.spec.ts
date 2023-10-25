import { TestBed } from '@angular/core/testing';

import { AlliService } from './alli.service';

describe('AlliService', () => {
  let service: AlliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
