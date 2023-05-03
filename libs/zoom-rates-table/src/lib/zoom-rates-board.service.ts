import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZoomRatesBoardService {
  constructor(private http: HttpClient) {}

  fetch(source, destination) {
    let url =
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' +
      source +
      '&tsyms=' +
      destination;
    return this.http.get(url).pipe(map((d) => d['DISPLAY']));
  }
}
