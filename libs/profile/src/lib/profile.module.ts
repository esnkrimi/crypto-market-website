import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../lib/profile/profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileModule {}
