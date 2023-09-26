import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arm-tuition';

  firebaseConfig = {
    apiKey: "AIzaSyDFxTjSKbDt1Mpw8NRpHbcycpYDixSacHs",
    authDomain: "arm-classes-1ee0f.firebaseapp.com",
    projectId: "arm-classes-1ee0f",
    storageBucket: "arm-classes-1ee0f.appspot.com",
    messagingSenderId: "259608793257",
    appId: "1:259608793257:web:c21f3a5e775a52460499b8",
    measurementId: "G-EM5WGJJM4C"
  };

  public mobileMenuOpened = false;
  public toggleSidebar() {
    this.mobileMenuOpened = !this.mobileMenuOpened;
    document.getElementById('sidebar_overlay_id')?.classList.toggle('anim')
  }

  public slideIndex = 1;
  ngOnInit() {
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
    this.showDivs(this.slideIndex);
    // setInterval(() => {
    //   this.showDivs(++this.slideIndex);
    // }, 5000)
  }

  plusDivs(count: number) {
    this.showDivs(this.slideIndex += count);
  }

  currentDiv(count: number) {
    this.showDivs(this.slideIndex = count);
  }

  showDivs(count: number) {
    var i;
    var x = document.getElementsByClassName("carousel-image");
    var dots = document.getElementsByClassName("slider-thumb");
    if (count > x.length) { this.slideIndex = 1 }
    if (count < 1) { this.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    (x[this.slideIndex - 1] as HTMLElement).style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  public goToLink(url: string) {
    window.open(url, "_blank");
  }
  public scrollToElement(elementId: string) {
    const scrollElement = document.getElementById(elementId);
    window.scrollTo((scrollElement as HTMLElement).offsetLeft, (scrollElement as HTMLElement).offsetTop - 64);
  }
  // npm ci && npm run build
}