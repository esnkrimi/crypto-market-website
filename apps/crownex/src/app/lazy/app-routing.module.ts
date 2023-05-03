import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'libs/profile/src/lib/profile/profile.component';
import { WishlistComponent } from 'libs/wishlist/src/lib/wishlist/wishlist.component';
import { CanActivateLogin } from '../guards';
import { AppComponent } from './app/app.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'user/:action',
    component: AppComponent,
  },
  {
    path: 'zoom/:id',
    component: AppComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [CanActivateLogin],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CanActivateLogin],
  },
  {
    path: 'profile/:action',
    component: ProfileComponent,
    canActivate: [CanActivateLogin],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class lazyRouterModule {}
