import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayShoutOutDefaultPageRoutingModule } from './birthday-shout-out-default-routing.module';

import { BirthdayShoutOutDefaultPage } from './birthday-shout-out-default.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayShoutOutDefaultPageRoutingModule
  ],
  declarations: [BirthdayShoutOutDefaultPage]
})
export class BirthdayShoutOutDefaultPageModule {}
