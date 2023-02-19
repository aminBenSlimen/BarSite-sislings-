import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BACK_END_URL = 'https://sislingsadmin.cokitana-erp.online/api/';
  globalData: any;
  constructor(private http: HttpClient) {}

  getAllData() {
    this.http
      .get(this.BACK_END_URL + 'landing-page-data')
      .subscribe((data: any) => {
        this.globalData = data.data        
      });
  }
}
