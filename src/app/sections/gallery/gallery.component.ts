import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  events: any = [];
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.events = this.http.globalData.galleries;
  }
  toDate(date) {
    return new Date(date);
  }
}
