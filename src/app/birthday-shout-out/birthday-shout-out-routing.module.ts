import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayShoutOutPage } from './birthday-shout-out.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayShoutOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayShoutOutPageRoutingModule {}
