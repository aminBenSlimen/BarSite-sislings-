import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  showMenu = false;
  scrollingTop = false;
  open = false;
  dropDownOpen = false;
  prevScrollPoint = 0;
  mobileNavopen = false;
  path = '/';
  paths = [
    'About Us',
    'Promos',
    'Upcoming events',
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
    const scroll = () =>
      document
        .getElementById(p)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (location.pathname !== '/') {
      this.router.navigate(['/']).then(() => {
        scroll();
      });
    } else scroll();
  }
}
