import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: [{ deviceIsPc: window.screen.width < 1025 ? false : true }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
