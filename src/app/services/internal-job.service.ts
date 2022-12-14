import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class InternalJobService {

  public jobsArchive?: any;
  public currentJob?: any;  

  constructor() { }

  // con questa funzione andiamo ad immagazzinare 
  // la lista dei lavori trovati dall'utente rendendola 
  // fruibile attraverso il servizio in tutta l'app
  addJobsList(jobsList:any) { 
    this.jobsArchive = jobsList; 
    // console.log('internal jobs service: ');
    // console.log(this.jobsArchive);
  }


  // con questa funzione prendo il lavoro corrente 
  // selezionato dall'utente
  getJob(id:number): any {
    let found = false;
    this.jobsArchive.forEach((element:any) => {
      this.currentJob = element;

      if(element.id == id) {
        found = true;
        this.currentJob = element;
      }
    });

    if(found) {
      return this.currentJob;
    } else {
      return null;
    }
  }


}
