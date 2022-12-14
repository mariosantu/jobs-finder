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

  it('addJobList should not be null', () => {
    let data = [{nome: 'mario', id :'324'},
               {nome: 'mario', id :'325'}];

    service.addJobsList(data);
    // console.log(service.jobsArchive + ' TEST');
    
    expect(service.jobsArchive).not.toBeNull();
  });

  it('getJob works' ,() => {
    let dataJob = [{nome: 'mario', id : 324},
                   {nome: 'mario', id : 325}];

    service.addJobsList(dataJob);

    let data = service.getJob(326);
    console.log('TESTING');
    console.log(data);
           
   expect(data).not.toBe(undefined);       
  });
});
