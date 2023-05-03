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
  private BaseUrl = 'https://min-api.cryptocompare.com/data';
  constructor(private http: HttpClient) {}
  /* fetch(source, destination) {
    let url =
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' +
      source +
      '&tsyms=' +
      destination;
    return this.http.get(url).pipe(map((d) => d['DISPLAY']));
  }*/
  coinListAll(): any {
    const url = this.BaseUrl + '/all/coinlist';
    return this.http.get(url).pipe(
      map((res) => res['Data']),
      map((d) => Object.keys(d))
    );
  }
}
