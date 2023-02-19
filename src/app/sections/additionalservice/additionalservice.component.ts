import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-additionalservice',
  templateUrl: './additionalservice.component.html',
  styleUrls: ['./additionalservice.component.scss']
})
export class AdditionalserviceComponent {
  services: any = [];
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.services = this.http.globalData.services;
  }
}
