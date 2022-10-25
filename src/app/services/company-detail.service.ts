import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  private url?: string;

  constructor(private _httpclient: HttpClient) { }

  getCompany(id:number): any {
    console.log(id);
    //faccio la chiamata
    // e ritorno in currentcompany
    this.url = `https://www.themuse.com/api/public/companies/${id}`;
    console.log('url = ' + this.url);
    return this._httpclient.get(this.url);
  }
}
