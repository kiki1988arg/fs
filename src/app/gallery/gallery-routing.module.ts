import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
