import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BACK_END_URL = 'https://sislingsadmin.cokitana-erp.online/api/';
  globalData: any;
  allData: any = {};
  constructor(private http: HttpClient) {}

  getAllData() {
    this.http
      .get(this.BACK_END_URL + 'landing-page-data')
      .subscribe((data: any) => {
        this.globalData = data.data;
      });
  }
  contact(data) {
    return this.http.post(this.BACK_END_URL + 'contacts', data);
  }
  makeReservation(data) {
    return this.http.post(this.BACK_END_URL + 'make-reservation', data);
  }
  async fetchAll(dataPoint, path) {
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.BACK_END_URL + path).subscribe(
        (data: any) => {
          this.allData[dataPoint] = data.data;
          resolve();
        },
        (err) => reject()
      );
    });
  }
}
