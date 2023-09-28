import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.scss']
})
export class ChooseUserComponent {
  public selected_user_type = 'user_guest';
  public showUserChoice = true;
  constructor(private readonly router: Router) {}
  ngOnInit() {
    localStorage.removeItem('logged_in_arm_user_type')
  }
  public onUserChange(event: Event) {
    this.selected_user_type = (event.target as any).id;
  }
  public gotoHomePage() {
    this.showUserChoice = false;
    localStorage.setItem('logged_in_arm_user_type', this.selected_user_type)
    if(this.selected_user_type === 'user_guest') {
      this.router.navigate(['core'])
    } else if(this.selected_user_type === 'user_student') {
      this.router.navigate(['student'])
    } else if(this.selected_user_type === 'user_admin') {
      this.router.navigate(['admin'])
    } 
  }
}
