import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class InternalJobService {

  private jobsArchive?: any;
  private currentJob?: any;  

  constructor() { }

  addJobsList(jobsList:any) { 
    this.jobsArchive = jobsList; 
    console.log('internal jobs service: ');
    console.log(this.jobsArchive);
  }


  getJob(id:number): any {
    this.jobsArchive.forEach((element:any) => {
      this.currentJob = element;
      
      if(element.id == id) {
        this.currentJob = element;
      }
    });
    return this.currentJob;
  }


}
