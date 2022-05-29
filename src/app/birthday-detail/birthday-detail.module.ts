import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayDetailPageRoutingModule } from './birthday-detail-routing.module';

import { BirthdayDetailPage } from './birthday-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayDetailPageRoutingModule
  ],
  declarations: [BirthdayDetailPage]
})
export class BirthdayDetailPageModule {}
