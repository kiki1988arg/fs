import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesHomeComponent } from './messages-home/messages-home.component';
import { MaterialModule } from '../shared/material.module';
import { MessagesCreateComponent } from './messages-create/messages-create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [MessagesHomeComponent, MessagesCreateComponent],
  entryComponents : [
    MessagesCreateComponent
  ]
})
export class MessagesModule { }
