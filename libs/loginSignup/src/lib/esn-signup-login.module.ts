import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsnSignupLoginComponent } from './esn-signup-login.component';

@NgModule({
  declarations: [EsnSignupLoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EsnSignupLoginComponent],
})
export class EsnSignupLoginModule {}
