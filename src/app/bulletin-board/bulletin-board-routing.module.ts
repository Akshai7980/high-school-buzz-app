import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulletinBoardPage } from './bulletin-board.page';

const routes: Routes = [
  {
    path: '',
    component: BulletinBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulletinBoardPageRoutingModule {}
