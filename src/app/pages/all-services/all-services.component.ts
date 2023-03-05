import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss'],
})
export class AllServicesComponent {
  allServices:any = []
  constructor(private http: HttpService) {
    http.fetchAll('allServices', 'menus/fetch-active-services').then(() => {
      this.allServices = http.allData.allServices;
    });
  }
}
