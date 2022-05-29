import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningCurvePage } from './learning-curve.page';

const routes: Routes = [
  {
    path: '',
    component: LearningCurvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningCurvePageRoutingModule {}
