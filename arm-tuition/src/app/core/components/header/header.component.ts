import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public mobileMenuOpened = false;
  public toggleSidebar() {
    this.mobileMenuOpened = !this.mobileMenuOpened;
    document.getElementById('sidebar_overlay_id')?.classList.toggle('anim');
    
  }
  public scrollToElement(elementId: string) {
    const scrollElement = document.getElementById(elementId);
    window.scrollTo((scrollElement as HTMLElement).offsetLeft, (scrollElement as HTMLElement).offsetTop - 64);
  }
}
