import { TestBed } from '@angular/core/testing';

import { ObjRetenidosService } from './obj-retenidos.service';

describe('ObjRetenidosService', () => {
  let service: ObjRetenidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjRetenidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
