import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDatePipe } from './pipes/firestore-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirestoreDatePipe],
  exports: [FirestoreDatePipe]
})
export class SharedModule { }
