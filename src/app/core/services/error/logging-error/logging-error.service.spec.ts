import { TestBed } from '@angular/core/testing';

import { LoggingErrorService } from './logging-error.service';

describe('LoggingErrorService', () => {
  let service: LoggingErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
