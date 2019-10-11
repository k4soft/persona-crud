import { TestBed } from '@angular/core/testing';

import { TipoDocumentoService } from './tipo-documento.service';

describe('TipoDocumentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDocumentoService = TestBed.get(TipoDocumentoService);
    expect(service).toBeTruthy();
  });
});
