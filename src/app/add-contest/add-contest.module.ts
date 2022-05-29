import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContestPageRoutingModule } from './add-contest-routing.module';

import { AddContestPage } from './add-contest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContestPageRoutingModule
  ],
  declarations: [AddContestPage]
})
export class AddContestPageModule {}
