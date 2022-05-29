import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayDetailPage } from './birthday-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayDetailPageRoutingModule {}
