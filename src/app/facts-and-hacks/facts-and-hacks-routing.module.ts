import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactsAndHacksPage } from './facts-and-hacks.page';

const routes: Routes = [
  {
    path: '',
    component: FactsAndHacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactsAndHacksPageRoutingModule {}
