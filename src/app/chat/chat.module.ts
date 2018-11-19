import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatTinychatComponent } from './chat-tinychat/chat-tinychat.component';
import { ChatKiwiComponent } from './chat-kiwi/chat-kiwi.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ],
  declarations: [ChatHomeComponent, ChatTinychatComponent, ChatKiwiComponent, ChatComponent]
})
export class ChatModule { }
