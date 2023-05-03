import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EsnSignupLoginService {
  constructor(private http: HttpClient) { }
  signup(api, formLoginData) {
    let data = JSON.stringify(formLoginData);
    data = this.replaceAll(data, '{', '&');
    data = this.replaceAll(data, '}', '');
    data = this.replaceAll(data, '"', '');
    data = this.replaceAll(data, ':', '=');
    data = this.replaceAll(data, ',', '&');
    return this.http.get(api + data)
  }
  login(api, formLoginData) {
    let data = JSON.stringify(formLoginData);
    data = this.replaceAll(data, '{', '&');
    data = this.replaceAll(data, '}', '');
    data = this.replaceAll(data, '"', '');
    data = this.replaceAll(data, ':', '=');
    data = this.replaceAll(data, ',', '&');
    return this.http.get(api + data)
  }
  replaceAll(src, from, to) {
    for (let i = 0; i < src.length - 1; i++) {
      src = src.replace(from, to)
    }
    return (src)
  }
}
