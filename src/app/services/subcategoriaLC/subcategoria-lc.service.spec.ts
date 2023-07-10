import { TestBed } from '@angular/core/testing';

import { SubcategoriaLCService } from './subcategoria-lc.service';

describe('SubcategoriaLCService', () => {
  let service: SubcategoriaLCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoriaLCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
