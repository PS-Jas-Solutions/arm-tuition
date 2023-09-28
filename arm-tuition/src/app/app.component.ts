import { Component } from '@angular/core';
import { Subject, Subscription, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arm-tuition';
  public subscriptions$ = new Subscription();
  constructor(
    private readonly router: Router
  ) { }
  ngOnInit() { 
    this.moduleLoader();
  }
  private moduleLoader(): void {
    this.subscriptions$.add(
      this.router.events
        .pipe(
          filter(
            event =>
              event instanceof NavigationStart ||
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel ||
              event instanceof NavigationError
          )
        )
        .subscribe(event => {
          // If it's the start of navigation, `add` a loading indicator
          // if (event instanceof NavigationStart) {
          //   this.showModuleLoader = true;
          //   return;
          // }

          /**
           * Check user type
           */
          this.checkUserType();

          // Else navigation has ended, so `remove` a loading indicator
          // this.showModuleLoader = false;
        })
    );
  }
  private checkUserType(): void {
    const logged_user_type = localStorage.getItem('logged_in_arm_user_type');
    // if(logged_user_type === null) {
    //   this.router.navigate(['']);
    // } else if(logged_user_type === 'user_guest') {
    //   this.router.navigate(['core']);
    // } else if(logged_user_type === 'user_student') {
    //   this.router.navigate(['student']);
    // } else if(logged_user_type === 'user_admin') {
    //   this.router.navigate(['admin']);
    // }
    console.log(localStorage.getItem('logged_in_arm_user_type'));
  }
}