import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public gotoFacebookPage() {
    this.goToLink('https://www.facebook.com/armclasses/photos');
  }
  public gotoInstagramPage() {
    this.goToLink('https://www.instagram.com/antonyrajumathclasses/');
  }
  public gotoGmail() {
    this.goToLink('https://mail.google.com/mail/u/0/#inbox?compose=new');
  }
  public gotoWhatsapp() {
    this.goToLink('https://www.whatsapp.com/');
  }
  public gotoYoutubeChannel() {
    this.goToLink('https://www.youtube.com/@ANTONYRAJUMATHCLASSESARM');
  }
  public goToLink(url: string) {
    window.open(url, "_blank");
  }
}
