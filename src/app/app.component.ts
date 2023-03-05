import { Component, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import gsap from 'gsap';
import { Carousel } from 'primeng/carousel';
import { HttpService } from './services/http/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  bigBall;
  smallBall;
  innerWidth;
  hoverables;
  constructor(
    private meta: Meta,
    private title: Title,
    public http: HttpService
  ) {
    http.getAllData();
    
    Carousel.prototype.onTouchMove = (): void => undefined;
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Welcome to our bar lounge, located in the heart of the vibrant nightlife scene in the Netherlands. As a cocktail bar and wine bar, we specialize in crafting the perfect drink for any occasion, whether it's a happy hour with friends or a romantic evening for two. Our extensive selection of craft beer and local beer is sure to impress any beer connoisseur, while our delicious bar snacks will satisfy any craving. With live music and a DJ playing the latest hits, our dance floor is the perfect spot to let loose and enjoy a night out. For a more intimate experience, our lounge area offers comfortable seating and a relaxed ambiance, while our outdoor seating and rooftop bar provide stunning views of the city. Whether you're planning a party, corporate event, or private gathering, we are the perfect party venue to make your event unforgettable. Come experience the best cocktails in the Netherlands at our trendy and romantic bar.",
      },
      { name: 'author', content: 'Cokitana' },
      {
        name: 'keywords',
        content:
          'Bar lounge, Nightlife in the Netherlands, Cocktail bar, Wine bar, Happy hour, Bar snacks, Craft beer, Live music, DJ, Dance floor, Lounge area, Outdoor seating, Rooftop bar, Best cocktails in the Netherlands, Local beer, Party venue, Private events, Corporate events, Romantic bar, Trendy bar',
      },
    ]);
    this.title.setTitle('Sislings');
  }
  ngAfterViewInit() {
    this.innerWidth = window.innerWidth;

    document.body.addEventListener('mousemove', this.onMouseMove);
    this.bigBall = document.querySelector('.cursor__ball--big');

    this.smallBall = document.querySelector('.cursor__ball--small');
    this.hoverables = document.querySelectorAll('.hoverable'); // Listeners

    setTimeout(() => {
      for (let i = 0; i < this.hoverables.length; i++) {
        this.hoverables[i].addEventListener('mouseenter', this.onMouseHover);
        this.hoverables[i].addEventListener('mouseleave', this.onMouseHoverOut);
      }
    }, 0);
  }

  // Move the cursor
  onMouseMove(e) {
    if (this.bigBall && this.smallBall) {
      gsap.to(this.bigBall, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      gsap.to(this.smallBall, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7,
      });
    } else {
      // this.init();
      this.bigBall = document.querySelector('.cursor__ball--big');
      this.smallBall = document.querySelector('.cursor__ball--small');
      this.hoverables = document.querySelectorAll('.hoverable');
    }
  }

  // Hover an element
  onMouseHover() {
    if (this.bigBall)
      gsap.to(this.bigBall, 0.3, {
        scale: 4,
      });
    else {
      this.bigBall = document.querySelector('.cursor__ball--big');
      this.smallBall = document.querySelector('.cursor__ball--small');
      this.hoverables = document.querySelectorAll('.hoverable');
    }
  }
  onMouseHoverOut() {
    if (this.bigBall)
      gsap.to(this.bigBall, 0.3, {
        scale: 1,
      });
    else {
      this.bigBall = document.querySelector('.cursor__ball--big');
      this.smallBall = document.querySelector('.cursor__ball--small');
      this.hoverables = document.querySelectorAll('.hoverable');
    }
  }
}
