import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { ComponentsModule } from '../../../component/component.module';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChatPage),
  ],
})
export class ChatPageModule {}
