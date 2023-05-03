import { Component, OnInit } from '@angular/core';
import { LocalService } from '@appBase/storage';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'nx-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit {
  source = '';
  urlPrefix = 'http://www.mywebsite.com/myroutes';
  columns = ['HIGHDAY', 'LOWDAY', 'SUPPLY', 'MARKET'];
  userIdSession;
  userWishlist;
  constructor(
    private service: WishlistService,
    private localstorage: LocalService
  ) {}
  ngOnInit(): void {
    this.fetchWishlist();
  }

  fetchWishlist() {
    this.userIdSession = this.localstorage.getData('user_id');
    this.service.wishlist(this.userIdSession).subscribe((d) => {
      this.userWishlist = d;
      this.userWishlist = this.userWishlist.map((d) => d.crypto);
      this.source = this.userWishlist.join(',');
      //console.log(this.source);
    });
  }
}
