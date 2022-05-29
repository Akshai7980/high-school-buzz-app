import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestDetailPage } from './contest-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ContestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestDetailPageRoutingModule {}
