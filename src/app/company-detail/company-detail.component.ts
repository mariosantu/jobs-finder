import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { CompanyDetailService } from '../services/company-detail.service';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  currentCompanyDetails?:any;


  constructor(private route: ActivatedRoute, private _CompanyDetailService: CompanyDetailService) { }

  ngOnInit(): void {
    const id = this.getCompanyId();
    this._CompanyDetailService.getCompany(id).subscribe(
      (data:any) =>
      {
        this.currentCompanyDetails = data;
        console.log(data);
      }
    )

  }

  getCompanyId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }

}
