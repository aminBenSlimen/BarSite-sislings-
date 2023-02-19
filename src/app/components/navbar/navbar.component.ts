import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showMenu = false;
  scrollingTop = false;
  open = false;
  dropDownOpen = false;
  prevScrollPoint = 0;
  mobileNavopen = false;
  path = '/';
  paths = [
    'Promos',
    'Upcoming events',
    'About Us',
    'Additional Services',
    'Gallery',
    'The Menu',
    'Our Cocktails',
    'Booking',
    // 'Dj Section',
    'Contact Us',
  ];

  onScroll(event: any) {
    const verticalOffset =
      window.pageYOffset || 
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.scrollingTop =
      this.prevScrollPoint > verticalOffset || this.prevScrollPoint == 0;
    if (this.open) this.open = false;
    if (this.mobileNavopen) this.mobileNavopen = false;
    this.prevScrollPoint = verticalOffset;
  }

  changePath(p: any) {
    this.path = p;
    document.getElementById(p)?.scrollIntoView({behavior:'smooth',block:'center'})
  }
}
