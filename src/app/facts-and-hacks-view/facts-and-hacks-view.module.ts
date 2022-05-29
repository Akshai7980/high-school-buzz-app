import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactsAndHacksViewPageRoutingModule } from './facts-and-hacks-view-routing.module';

import { FactsAndHacksViewPage } from './facts-and-hacks-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactsAndHacksViewPageRoutingModule
  ],
  declarations: [FactsAndHacksViewPage]
})
export class FactsAndHacksViewPageModule {}
