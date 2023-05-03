import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from '../lib/wishlist/wishlist.component';
import { RatesBoardModule } from '../../../rates-table-main/src/lib/rates-board.module';

@NgModule({
  imports: [CommonModule, RatesBoardModule],
  declarations: [WishlistComponent],
  exports: [WishlistComponent],
})
export class WishlistModule {}
