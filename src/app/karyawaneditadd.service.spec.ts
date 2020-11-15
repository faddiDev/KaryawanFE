import { TestBed } from '@angular/core/testing';

import { KaryawaneditaddService } from './karyawaneditadd.service';

describe('KaryawaneditaddService', () => {
  let service: KaryawaneditaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaryawaneditaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
