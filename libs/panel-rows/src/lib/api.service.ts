import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  private key =
    '&api_key=12a32eac0fb47d68adf90bf177b1d25218bb4041b0b6cd7939300b4ccd98e512';
  constructor(private http: HttpClient) {}
  cryptoSetList(from, to) {
    let url = this.BaseUrl + '/pricemultifull?fsyms=' + from + '&tsyms=' + to;
    url = url + this.key;
    return this.http.get(url);
  }
  news() {
    let url = this.BaseUrl + '/v2/news/?lang=EN';
    url = url + this.key;
    return this.http.get(url).pipe(
      map((res) => {
        return res['Data'];
      })
    );
  }
}
