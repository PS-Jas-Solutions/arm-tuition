import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoverComponent } from './components/cover/cover.component';
import { StatsComponent } from './components/stats/stats.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateUpdateStudentComponent } from './components/create-update-student/create-update-student.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    StatsComponent,
    AboutComponent,
    FeatureCardComponent,
    YoutubeVideoComponent,
    GalleryComponent,
    ContactUsComponent,
    CreateUpdateStudentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    StatsComponent,
    AboutComponent,
    FeatureCardComponent,
    YoutubeVideoComponent,
    GalleryComponent,
    ContactUsComponent,
    CreateUpdateStudentComponent
  ]
})
export class CoreModule { }
