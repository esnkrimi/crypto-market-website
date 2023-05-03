import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '@appBase/storage';

@Component({
  selector: 'nx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((d) => {
      if (d['action'] === 'logout') {
        this.localStorage.clearData();
        this.router.navigate(['']);
      }
    });
  }
}
