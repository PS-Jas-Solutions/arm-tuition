import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arm-tuition';
  // public selected_user_type = 'user_guest';
  // public showUserChoice = true;
  // constructor(private readonly router: Router) {}
  ngOnInit() {}
  // public onUserChange(event: Event) {
  //   this.selected_user_type = (event.target as any).id;
  // }
  // public gotoHomePage() {
  //   console.log(this.selected_user_type);
  //   this.showUserChoice = false;
  //   if(this.selected_user_type === 'user_guest') {
  //     this.router.navigate(['core'])
  //   }
  // }
}
