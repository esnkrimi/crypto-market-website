import { Component, OnInit } from '@angular/core';
import { apiService } from './api.service';

@Component({
  selector: 'nx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent implements OnInit {
  data;
  loading = true;
  fields = ['Country', 'Event', 'Date', 'Importance'];
  constructor(private service: apiService) {}

  async getApi() {
    this.loading = true;
    this.service.calendar().subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
  }
  ngOnInit(): void {
    this.getApi();
  }
}
