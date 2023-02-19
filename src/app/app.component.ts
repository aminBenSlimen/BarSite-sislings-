import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { HttpService } from './services/http/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'barSite';
  bigBall;
  smallBall;
  innerWidth;
  hoverables;
  constructor(public http:HttpService){
    http.getAllData()
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
