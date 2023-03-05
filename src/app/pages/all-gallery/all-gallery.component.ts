import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-all-gallery',
  templateUrl: './all-gallery.component.html',
  styleUrls: ['./all-gallery.component.scss']
})
export class AllGalleryComponent {
  allGallery: any = [];

  constructor(private http: HttpService) {
    http.fetchAll('allGallery', 'menus/fetch-gallery-site-images').then(() => {
      this.allGallery = http.allData.allGallery;
    });

  }

  toDate(date) {
    return new Date(date);
  }
}
