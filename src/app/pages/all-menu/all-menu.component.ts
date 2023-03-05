import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-all-menu',
  templateUrl: './all-menu.component.html',
  styleUrls: ['./all-menu.component.scss'],
})
export class AllMenuComponent implements OnInit {
  allMenu: any = [];
  menuTable1: any = [];
  menuTable2: any = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.fetchAll('allMenu', 'menus/fetch-signature-menus').then(() => {
      this.allMenu = this.http.allData.allMenu;

      const middleIndex = Math.ceil(this.allMenu.items.length / 2);
      this.menuTable1 = this.allMenu.items.splice(0, middleIndex);
      this.menuTable2 = this.allMenu.items.splice(-middleIndex);
    });
  }
}
