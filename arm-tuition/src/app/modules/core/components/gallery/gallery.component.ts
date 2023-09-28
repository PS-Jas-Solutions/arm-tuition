import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public slideIndex = 1;
  ngOnInit() {
    this.showDivs(this.slideIndex);
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
}
