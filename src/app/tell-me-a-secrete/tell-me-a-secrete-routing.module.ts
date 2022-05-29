import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TellMeASecretePage } from './tell-me-a-secrete.page';

const routes: Routes = [
  {
    path: '',
    component: TellMeASecretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TellMeASecretePageRoutingModule {}
