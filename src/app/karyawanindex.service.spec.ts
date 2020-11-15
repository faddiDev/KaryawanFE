import { TestBed } from '@angular/core/testing';

import { KaryawanindexService } from './karyawanindex.service';

describe('KaryawanindexService', () => {
  let service: KaryawanindexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaryawanindexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
