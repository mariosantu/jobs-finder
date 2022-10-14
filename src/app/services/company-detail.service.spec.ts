import { TestBed } from '@angular/core/testing';

import { CompanyDetailService } from './company-detail.service';
import { HttpClientModule } from '@angular/common/http';


describe('CompanyDetailService', () => {
  let service: CompanyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CompanyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
