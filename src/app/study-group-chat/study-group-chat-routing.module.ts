import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyGroupChatPage } from './study-group-chat.page';

const routes: Routes = [
  {
    path: '',
    component: StudyGroupChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyGroupChatPageRoutingModule {}
