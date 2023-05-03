import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  wishlist(uid) {
    let url =
      'https://burjcrown.com/drm/web/index.php?time=19&id=83&uid=' + uid;
    return this.http.get(url);
  }
  wishlistAction(uid, crypto) {
    let url =
      'https://burjcrown.com/drm/web/index.php?id=82&uid=' +
      uid +
      '&crypto=' +
      crypto;
    return this.http.get(url);
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
