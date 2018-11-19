import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDatePipe } from './pipes/firestore-date.pipe';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [FirestoreDatePipe],
  exports: [FirestoreDatePipe,
    MaterialModule,
    FlexLayoutModule]
})
export class SharedModule { }
