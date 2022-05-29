import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyGroupChatPageRoutingModule } from './study-group-chat-routing.module';

import { StudyGroupChatPage } from './study-group-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyGroupChatPageRoutingModule
  ],
  declarations: [StudyGroupChatPage]
})
export class StudyGroupChatPageModule {}
