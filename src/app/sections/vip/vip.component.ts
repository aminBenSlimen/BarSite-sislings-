import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss'],
})
export class VipComponent implements OnInit {
  promos: Array<any> = [];
  responsiveOptions;
  width: any = 0;
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
    this.promos = this.http.globalData.promos;
    this.width = innerWidth || 0;
    if (this.width <= 782)
      this.promos = this.promos.filter((v) => v.use_custom_content);
  }
}
