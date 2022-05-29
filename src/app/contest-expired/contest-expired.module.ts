import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestExpiredPageRoutingModule } from './contest-expired-routing.module';

import { ContestExpiredPage } from './contest-expired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestExpiredPageRoutingModule
  ],
  declarations: [ContestExpiredPage]
})
export class ContestExpiredPageModule {}
