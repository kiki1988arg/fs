import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesHomeComponent } from './messages-home/messages-home.component';

const routes: Routes = [
  { path: 'messages', component: MessagesHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
