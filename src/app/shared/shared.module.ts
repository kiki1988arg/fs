import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDatePipePipe } from './pipes/firestore-date-pipe.pipe';
import { FirestoreDatePipe } from './pipes/firestore-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirestoreDatePipePipe, FirestoreDatePipe]
})
export class SharedModule { }
