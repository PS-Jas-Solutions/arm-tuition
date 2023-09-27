import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent {
  public goToLink(url: string) {
    window.open(url, "_blank");
  }
}
