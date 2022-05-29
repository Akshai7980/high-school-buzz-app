import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactsAndHacksViewPage } from './facts-and-hacks-view.page';

const routes: Routes = [
  {
    path: '',
    component: FactsAndHacksViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactsAndHacksViewPageRoutingModule {}
