import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public first_name = '';
  public last_name = '';
  public phone_number = '';
  public class = '';
  public email = '';
  public comment = '';
}
