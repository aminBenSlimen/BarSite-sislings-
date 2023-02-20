import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent {
  contactObj = {
    subject: '',
    description: '',
    name: '',
    email: '',
    phone: null,
  };
  constructor(
    private http: HttpService,
    private messageService: MessageService
  ) {}

  contact() {
    this.http.contact(this.contactObj).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thanks for contacting us, we will contact you soon.',
        });
        this.contactObj = {
          subject: '',
          description: '',
          name: '',
          email: '',
          phone: null,
        };
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Something went wrong! Please try again later',
        });
      }
    );
  }
}
