import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhrasesHomeComponent } from './phrases-home/phrases-home.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    PhrasesRoutingModule,
    MaterialModule
  ],
  declarations: [PhrasesHomeComponent]
})
export class PhrasesModule { }
