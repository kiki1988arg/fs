import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhrasesHomeComponent } from './phrases-home/phrases-home.component';

@NgModule({
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ],
  declarations: [PhrasesHomeComponent]
})
export class PhrasesModule { }
