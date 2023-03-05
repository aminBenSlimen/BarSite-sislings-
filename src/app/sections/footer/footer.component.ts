import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  data ;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.data = {...this.http.globalData.settings,social_medias:this.http.globalData.social_medias};
  }
}
