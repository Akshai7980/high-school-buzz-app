import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestExpiredPage } from './contest-expired.page';

const routes: Routes = [
  {
    path: '',
    component: ContestExpiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestExpiredPageRoutingModule {}
