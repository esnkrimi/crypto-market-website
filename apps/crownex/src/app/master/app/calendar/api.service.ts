import { catchError, delay, filter, map, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface news {
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class apiService {
  timestamp: any;
  constructor(private http: HttpClient) {}

  calendar() {
    let url =
      'https://api.tradingeconomics.com/calendar?c=guest:guest&format=json';
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
