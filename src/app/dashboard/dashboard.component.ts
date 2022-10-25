import { Component, OnInit } from '@angular/core';
import { GetJobsService } from '../services/get-jobs.service';
import { InternalJobService } from '../services/internal-job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobsList?: any[];
  jobsDetail = this.jobsList;
  categoryList:string[] = ['Software Engineering'];
  defaultCategory:string = 'Software Engineering';
  userCategoryChoice:string = this.defaultCategory;


  // nel caso si volesse alimentare la lista delle categorie
  // decommentare il seguente categoryList e commentare quello
  // impostato di default.
  // categoryList:string[] = ['Software Engineering',
  //                           'Accounting',
  //                           'Sales',
  //                           'Design and UX'
  //                         ];

  levelsList = [
    {selected:true,name: "Entry Level"},
    {selected:true,name:"Mid Level"},
    {selected:true,name:"Senior Level"},
    {selected:true,name:"management"},
    {selected:true,name:"Internship"}
  ];

  constructor(private _GetJobsService:GetJobsService, private _InternalJobService:InternalJobService) { }

  ngOnInit(): void {
    // input:string (default value)

    // all'avvio dell'applicazione il dashboard component chiama il servizio _GetJobsService e con la funzione getJobsService
    // ritorna un oggetto json 

    this._GetJobsService.getJobsService(this.defaultCategory, this.levelsList).subscribe(
      data=>
      {
        this.jobsList = data.results;
        this._InternalJobService.addJobsList(this.jobsList);
      }
    )
  }

  // input:string, string[] 
  // con questa funzione l'utente inserisce un eventuale categoria e un livello di competenza 
  // e ritrona un oggetto json
  // getJobs(category:string, level:string[]): void {
  //   // console.log(category);
  //   this._GetJobsService.getJobsService(category, level).subscribe(
  //     data=>
  //     {
  //       this.jobsList = data;
  //       console.log(this.jobsList);
  //       // console.log(data);
  //     }
  //   )
  // }

  onChangeLevel($event:any) {

    const selectedLevel = $event.target.value;
    this.levelsList = this.levelsList.map((lvl) => {
      if(lvl.name == selectedLevel) {
        lvl.selected = !lvl.selected;
      }
      return lvl;
    });

  }

  getUserCategoryChoice() {
    this.userCategoryChoice;
    console.log(this.userCategoryChoice);
  }

  getUserQuery() {

    var checkVoidLevel = false;

    if(this.userCategoryChoice == undefined) {
      this.userCategoryChoice = this.defaultCategory;
    }

    this.levelsList.forEach(el => {
      if(el.selected == true) {
        checkVoidLevel = true;
      }
    });

    if(checkVoidLevel) {
      this._GetJobsService.getJobsService(this.userCategoryChoice, this.levelsList).subscribe(
        data=>
        {
          this.jobsList = data.results;
          this._InternalJobService.addJobsList(this.jobsList);
        }
      );
    } else {
      alert('check required!');
    }
  }
}
