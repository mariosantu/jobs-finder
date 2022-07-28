import { Component, Input, OnInit } from '@angular/core';
import { GetJobsService } from '../services/get-jobs.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InternalJobService } from '../services/internal-job.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.scss']
})
export class JobsDetailComponent implements OnInit {

  data?:any;


  constructor(
    private route: ActivatedRoute,
    private GetJobsService: GetJobsService,
    private location: Location,
    private router: Router,
    private _InternalJobService:InternalJobService
  ) { }


  ngOnInit(): void {
    // inserire il servizio interno per ottenere job 
    // this._InternalJobService.getJobsArchive().subscribe(
    //   data => {console.log(data);}
    // );

    // this._InternalJobService.getJobsArchiveDue();

    const id = this.getJobId();
    this.data = this._InternalJobService.getJob(id);
    console.log('current job: ');
    console.log(this.data); 

    
  }

  getJobId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }
}
