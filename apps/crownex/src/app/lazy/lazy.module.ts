import { NgModule } from '@angular/core';
import { ZoomComponent } from './app/zoom/zoom.component';
import { UserModule } from '../../../../../libs/user/src/lib/user.module';
import { AppComponent } from './app/app.component';
import { lazyRouterModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { WishlistModule } from '../../../../../libs/wishlist/src/lib/wishlist.module';
import { ProfileModule } from '../../../../../libs/profile/src/lib/profile.module';
import { PriceDirective } from './app/zoom/price.directive';
import { pricePipe } from './app/zoom/price';
import { MarketInformationModule } from '../../../../../libs/market-information/src/lib/market-information.module';
import { MarketChartModule } from '../../../../../libs/market-chart/src/lib/market-chart.module';
import { ProgressBarModule } from 'luxury-progress-bar';
import { TableModule } from 'libs/table/src/lib/table.module';
import { ZoomRatesBoardModule } from 'libs/zoom-rates-table/src/lib/zoom-rates-board.module';
import { FormsModule } from '@angular/forms';
import { MarketChartThumbnailModule } from '../../../../../libs/market-chart-thumbnail/src/lib/market-chart-thumbnail.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, ZoomComponent, PriceDirective, pricePipe],
  imports: [
    WishlistModule,
    MarketInformationModule,
    MarketChartModule,
    MarketChartThumbnailModule,
    ProfileModule,
    NgxPaginationModule,
    CommonModule,
    lazyRouterModule,
    UserModule,
    ProgressBarModule,
    TableModule,
    ZoomRatesBoardModule,
    FormsModule,
  ],
})
export class LazyModule {}
