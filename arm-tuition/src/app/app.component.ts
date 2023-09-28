import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arm-tuition';
  public videos: any[] = [];
  constructor() { }
  ngOnInit() { }
}