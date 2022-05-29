import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellMeASecretePageRoutingModule } from './tell-me-a-secrete-routing.module';

import { TellMeASecretePage } from './tell-me-a-secrete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellMeASecretePageRoutingModule
  ],
  declarations: [TellMeASecretePage]
})
export class TellMeASecretePageModule {}
