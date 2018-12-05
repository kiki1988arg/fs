import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDatePipe } from './pipes/firestore-date.pipe';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KendoModule } from './kendo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill-bbcode';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [FirestoreDatePipe],
  exports: [FirestoreDatePipe,
    MaterialModule,
    FlexLayoutModule,
    KendoModule,
    ReactiveFormsModule,
    QuillModule]
})
export class SharedModule { }
