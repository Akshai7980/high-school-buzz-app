import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayWishAddPageRoutingModule } from './birthday-wish-add-routing.module';

import { BirthdayWishAddPage } from './birthday-wish-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayWishAddPageRoutingModule
  ],
  declarations: [BirthdayWishAddPage]
})
export class BirthdayWishAddPageModule {}
