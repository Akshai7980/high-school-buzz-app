import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactsAndHacksPageRoutingModule } from './facts-and-hacks-routing.module';

import { FactsAndHacksPage } from './facts-and-hacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactsAndHacksPageRoutingModule
  ],
  declarations: [FactsAndHacksPage]
})
export class FactsAndHacksPageModule {}
