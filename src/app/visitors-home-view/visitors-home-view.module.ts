import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorsHomeViewPageRoutingModule } from './visitors-home-view-routing.module';

import { VisitorsHomeViewPage } from './visitors-home-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorsHomeViewPageRoutingModule
  ],
  declarations: [VisitorsHomeViewPage]
})
export class VisitorsHomeViewPageModule {}
