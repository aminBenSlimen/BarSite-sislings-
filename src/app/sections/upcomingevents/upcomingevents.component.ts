import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.scss'],
})
export class UpcomingeventsComponent implements OnInit {
  events = [];
  responsiveOptions;

  constructor(private http: HttpService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  ngOnInit() {
    this.events = this.http.globalData.events;
  }
  toDate(date) {
    return new Date(date);
  }
}
