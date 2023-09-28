import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public ps_apiKey: string = 'AIzaSyDGvKPMDRODhLCkSPFlSCIHXydragJl2po';
  public armChannelID: string = 'UCn3LhDJaWyExNbt8z-sGmfg';
  public maxResults: number = 50;

  constructor(public http: HttpClient) { }

  getVideosForChanel(): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.ps_apiKey + '&channelId=' + this.armChannelID + '&order=date&part=snippet &type=video,id&maxResults=' + this.maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  // this.videos = [];
  //   this.youTubeService
  //     .getVideosForChanel()
  //     // .pipe()
  //     .subscribe((list: any) => {
  //       this.videos = [...list["items"]];
  //       // for (let element of list["items"]) {
  //       //   this.videos.push(element)
  //       // }
  //     });
  // }

//   <div *ngFor="let video of videos" class="col-xl-3 col-md-6 mb-4">
//   <div class="card border-0 shadow vh-50">
//       <a href="https://www.youtube.com/watch?v={{video.id.videoId}}" target="_blank">
//           <img [src]="video.snippet.thumbnails.medium.url" class="card-img-top" alt="..."></a>
//       <div class="card-body text-center" style="display: flex">
//           <h5 class="card-title mb-0">
//               <a href="https://www.youtube.com/watch?v={{video.id.videoId}}">{{video.snippet.title}}
//               </a>
//           </h5>
//           <div class="card-text text-black-50">{{video.snippet.description.slice(0, 100)}}</div>
//           <p class="card-text">{{video.snippet.description}}</p>
//       </div>
//   </div>
// </div>
}