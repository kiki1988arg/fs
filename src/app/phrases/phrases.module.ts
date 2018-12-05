import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhrasesHomeComponent } from './components/phrases-home/phrases-home.component';
import { SharedModule } from '../shared/shared.module';
import { PhrasesCreateComponent } from './components/phrases-create/phrases-create.component';
import { PhrasesDetailComponent } from './components/phrases-detail/phrases-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PhrasesRoutingModule,
    SharedModule
  ],
  declarations: [PhrasesHomeComponent
    , PhrasesCreateComponent, PhrasesDetailComponent]

})
export class PhrasesModule { }
