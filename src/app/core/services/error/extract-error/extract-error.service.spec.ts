import { TestBed } from '@angular/core/testing';

import { ExtractErrorService } from './extract-error.service';

describe('ExtractErrorService', () => {
  let service: ExtractErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
