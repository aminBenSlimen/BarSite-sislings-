import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {

  data ;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.data = this.http.globalData.settings;
  }
}
