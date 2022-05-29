import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayShoutOutDefaultPage } from './birthday-shout-out-default.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayShoutOutDefaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayShoutOutDefaultPageRoutingModule {}
