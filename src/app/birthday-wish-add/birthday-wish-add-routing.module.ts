import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayWishAddPage } from './birthday-wish-add.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayWishAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayWishAddPageRoutingModule {}
