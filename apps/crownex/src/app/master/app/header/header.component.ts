import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LocalService } from '@appBase/storage';
@Component({
  selector: 'nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  data;
  userData;
  @Input() deviceIsPc;
  constructor(private localstorage: LocalService) {}
  ngOnInit(): void {
    this.userData = this.localstorage.getData('userData');
    this.data = {
      bgColor: 'black',
      color: 'red',
      hoverColor: 'orange',
      menuItems: [
        ['Profile', '/lazy/profile'],
        ['Wishlist', '/lazy/wishlist'],
        ['Logout', '/lazy/profile/logout'],
      ],
      menuTitle: this.userData,
    };
  }
  menu() {}
}
