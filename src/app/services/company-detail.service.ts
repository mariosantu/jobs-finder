import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  private url?: string;

  constructor(private _httpclient: HttpClient) { }

  // con questa funzione costruisco l'url della compagnia selezionata
  // dall'utente
  getCompany(id:number): any {
    // console.log(id);

    this.url = `https://www.themuse.com/api/public/companies/${id}`;
    // console.log('url = ' + this.url);

    return this._httpclient.get(this.url);
  }
}
