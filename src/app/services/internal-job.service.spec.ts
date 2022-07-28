import { TestBed } from '@angular/core/testing';

import { InternalJobService } from './internal-job.service';

describe('InternalJobService', () => {
  let service: InternalJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
