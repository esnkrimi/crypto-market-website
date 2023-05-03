import { Injectable } from '@angular/core';
import { LocalService } from './storage';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CanActivateLogin implements CanActivate {
  constructor(private router: Router, private localstorage: LocalService) {}

  canActivate() {
    let authorized = this.localstorage.getData('userData');
    //console.log('CanActivateLogin : ', authorized);
    if (authorized && authorized !== 'null' && authorized !== 'Unauth')
      return true;
    else {
      this.router.navigate(['lazy/user/login']);
      return false;
    }
  }
}
