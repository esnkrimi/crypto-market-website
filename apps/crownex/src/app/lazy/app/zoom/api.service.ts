import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private http: HttpClient) {}
  news(cat: string) {
    let BaseUrl = 'https://min-api.cryptocompare.com/data/v2/news/?categories=';

    let url = BaseUrl + cat;
    return this.http.get(url).pipe(
      map((res) => {
        return res['Data'];
      })
    );
  }
  fetch(source, destination) {
    let url =
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' +
      source +
      '&tsyms=' +
      destination;
    return this.http.get(url).pipe(map((d) => d['DISPLAY']));
  }
}
