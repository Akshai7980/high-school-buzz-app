import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningCurvePageRoutingModule } from './learning-curve-routing.module';

import { LearningCurvePage } from './learning-curve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningCurvePageRoutingModule
  ],
  declarations: [LearningCurvePage]
})
export class LearningCurvePageModule {}
