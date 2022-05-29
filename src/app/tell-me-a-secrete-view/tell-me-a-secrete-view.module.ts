import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellMeASecreteViewPageRoutingModule } from './tell-me-a-secrete-view-routing.module';

import { TellMeASecreteViewPage } from './tell-me-a-secrete-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellMeASecreteViewPageRoutingModule
  ],
  declarations: [TellMeASecreteViewPage]
})
export class TellMeASecreteViewPageModule {}
