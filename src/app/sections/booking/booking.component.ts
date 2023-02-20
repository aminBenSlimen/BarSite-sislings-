import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  constructor(
    private http: HttpService,
    private messageService: MessageService
  ) {}
  date;
  time;
  bookingData = {
    client_name: '',
    client_phone: '',
    client_email: '',
    persons_number: null,
    date: null,
    description: '',
  };
  makeReservation() {
    let d = new Date();
    d.setDate(this.date);
    d.setTime(this.time);

    this.http.makeReservation({ ...this.bookingData, date: d }).subscribe(
      (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thanks for booking with us, we will contact you soon.',
        });
        this.date = null;
        this.time = null;
        this.bookingData = {
          client_name: '',
          client_phone: '',
          client_email: '',
          persons_number: null,
          date: null,
          description: '',
        };
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Something went wrong! Please  try again later',
        });
      }
    );
  }
}
