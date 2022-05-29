import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayShoutOutPageRoutingModule } from './birthday-shout-out-routing.module';

import { BirthdayShoutOutPage } from './birthday-shout-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayShoutOutPageRoutingModule
  ],
  declarations: [BirthdayShoutOutPage]
})
export class BirthdayShoutOutPageModule {}
