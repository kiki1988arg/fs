import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MaterialModule
  ],
  declarations: [GalleryHomeComponent]
})
export class GalleryModule { }
