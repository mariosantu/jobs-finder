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

  // currentCompanyDetails?:any;

  //test
  image = '';
  logo = '';
  landing_page ='';
  name = '';
  description = '';


  constructor(private route: ActivatedRoute, private _CompanyDetailService: CompanyDetailService) { }

  ngOnInit(): void {
    const id = this.getCompanyId();
    this._CompanyDetailService.getCompany(id).subscribe(
      (data:any) =>
      {
        // this.currentCompanyDetails = data;

        //test
        this.image = data.refs.f1_image;
        this.logo = data.refs.logo_image;
        this.landing_page = data.refs.landing_page;
        this.name = data.name;
        this.description = data.description;
        console.log(data);
      }
    )

  }

  getCompanyId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }

}
