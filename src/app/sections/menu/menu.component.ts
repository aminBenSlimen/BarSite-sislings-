import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu: any = [];
  menuTable1 :any= [];
  menuTable2 :any= [];
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.menu = this.http.globalData.menu;
    const middleIndex = Math.ceil(this.menu.items.length / 2);
    this.menuTable1 = this.menu.items.splice(0, middleIndex);
    this.menuTable2 = this.menu.items.splice(-middleIndex);
    
  }
  toDate(date) {
    return new Date(date);
  }
}
