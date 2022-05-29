import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyGroupListPage } from './study-group-list.page';

const routes: Routes = [
  {
    path: '',
    component: StudyGroupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyGroupListPageRoutingModule {}
