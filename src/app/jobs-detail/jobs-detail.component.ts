import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternalJobService } from '../services/internal-job.service';




@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.scss']
})
export class JobsDetailComponent implements OnInit {

  data?:any;


  constructor(
    private route: ActivatedRoute,
    private _InternalJobService:InternalJobService
  ) { }


  ngOnInit(): void {
    
    const id = this.getJobId();
    // attraverso il servizio andiamo a prendere i dati del lavoro 
    // corrente in data
    this.data = this._InternalJobService.getJob(id);
    // console.log('current job: ');
    // console.log(this.data); 

    
  }

  // questa funzione si occupa di registrare l'id del 
  // lavoro selezionato dall'utente attraverso il routing
  getJobId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }
}
