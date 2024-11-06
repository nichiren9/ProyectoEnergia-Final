import { TestBed } from '@angular/core/testing';

import { ConsumoDepartamentosService } from './consumo-departamentos.service';

describe('ConsumoDepartamentosService', () => {
  let service: ConsumoDepartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoDepartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
