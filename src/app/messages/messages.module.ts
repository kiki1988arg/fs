import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesHomeComponent } from './messages-home/messages-home.component';
import { MaterialModule } from '../material.module';
import { MessagesCreateComponent } from './messages-create/messages-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirestoreDatePipe } from '../shared/pipes/firestore-date.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [MessagesHomeComponent, MessagesCreateComponent],
  entryComponents : [
    MessagesCreateComponent
  ]
})
export class MessagesModule { }
