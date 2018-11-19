import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatTinychatComponent } from './chat-tinychat/chat-tinychat.component';
import { ChatKiwiComponent } from './chat-kiwi/chat-kiwi.component';

const routes: Routes = [
  { path: 'chat',
   children: [
     {
      path: '',
      component: ChatHomeComponent
     },
    {
      path: 'tinychat',
      component: ChatTinychatComponent,
    },
    {
      path: 'irc',
      component: ChatKiwiComponent,
    }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
