import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private http: HttpClient) {}
  signup(name, lname, mobile, email, pass) {
    let url =
      'http://burjcrown.com/drm/web/index.php?id=81&name=' +
      name +
      '&lname=' +
      lname +
      '&mobile=' +
      mobile +
      '&email=' +
      email +
      '&pass=' +
      pass;
    //console.log(url);
    return this.http.get(url);
  }

  login(user, pass) {
    let url =
      'http://burjcrown.com/drm/web/index.php?id=1&mobile=' +
      user +
      '&pass=' +
      pass;
    return this.http.get(url);
  }
}
