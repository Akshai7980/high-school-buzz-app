import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulletinBoardPageRoutingModule } from './bulletin-board-routing.module';

import { BulletinBoardPage } from './bulletin-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulletinBoardPageRoutingModule
  ],
  declarations: [BulletinBoardPage]
})
export class BulletinBoardPageModule {}
