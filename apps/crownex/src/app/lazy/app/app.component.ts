import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crownex-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  destinationCoin;
  loginJoin: boolean = false;
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.destinationCoin = params['id'];
      this.loginJoin =
        params['action'] === 'login'
          ? true
          : params['action'] === 'join'
          ? true
          : false;
    });
  }
}
///lazy/zoom/DOGE
