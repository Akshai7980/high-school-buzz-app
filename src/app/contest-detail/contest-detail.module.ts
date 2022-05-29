import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestDetailPageRoutingModule } from './contest-detail-routing.module';

import { ContestDetailPage } from './contest-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestDetailPageRoutingModule
  ],
  declarations: [ContestDetailPage]
})
export class ContestDetailPageModule {}
