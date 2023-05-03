import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { MasterRoutingModule } from './app-routing.module';
import { PanelModule } from '@crownex/panel';
import { CalendarComponent } from './app/calendar/calendar.component';
import { CryptoComponent } from './app/crypto/crypto.component';
import { CurrencyComponent } from './app/currency/currency.component';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { NewsComponent } from './app/news/news.component';
import { NewsThumbnailModule } from '@crownex/news-thumbnail';
import { SearchModule } from '@crownex/search';
import { TableModule } from '@crownex/table';
import { RatesBoardModule } from '@crownex/rates-table-main';
import { PanelRowModule } from '../../../../../libs/panel-rows/src/lib/panel.module';
import { EsnContextMenuModule } from '../../../../../libs/esn-context-menu/src/lib/esn-context-menu.module';
import { SelectBoxModule } from '@crownex/select-box';
import { ProgressBarModule } from 'luxury-progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsCurrencyComponent } from './app/news-currency/news-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HeaderComponent,
    FooterComponent,
    CryptoComponent,
    CurrencyComponent,
    NewsComponent,
    NewsCurrencyComponent,
  ],
  imports: [
    CommonModule,
    PanelRowModule,
    EsnContextMenuModule,
    ReactiveFormsModule,
    TableModule,
    SelectBoxModule,
    FormsModule,
    RatesBoardModule,
    ProgressBarModule,
    SearchModule,
    MasterRoutingModule,
    PanelModule,
    NewsThumbnailModule,
  ],
  exports: [HeaderComponent],
  bootstrap: [AppComponent],
})
export class MasterModule {}
