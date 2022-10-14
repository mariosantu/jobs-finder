import { TestBed } from '@angular/core/testing';

import { GetJobsService } from './get-jobs.service';
import { HttpClientModule } from '@angular/common/http';


describe('GetJobsService', () => {
  let service: GetJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GetJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
