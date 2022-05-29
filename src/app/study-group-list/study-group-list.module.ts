import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyGroupListPageRoutingModule } from './study-group-list-routing.module';

import { StudyGroupListPage } from './study-group-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyGroupListPageRoutingModule
  ],
  declarations: [StudyGroupListPage]
})
export class StudyGroupListPageModule {}
