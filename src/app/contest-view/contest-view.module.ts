import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestViewPageRoutingModule } from './contest-view-routing.module';

import { ContestViewPage } from './contest-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestViewPageRoutingModule
  ],
  declarations: [ContestViewPage]
})
export class ContestViewPageModule {}
