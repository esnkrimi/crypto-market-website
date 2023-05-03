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
  private BaseUrl =
    'https://min-api.cryptocompare.com/data/v2/news/?categories=';

  constructor(private http: HttpClient) {}
  news(cat: string) {
    let url = this.BaseUrl + cat;
    // url = url + this.key;
    return this.http.get(url).pipe(
      map((res) => {
        return res['Data'];
      })
    );
  }
}
