import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhrasesHomeComponent } from './phrases-home/phrases-home.component';

const routes: Routes = [
  { path: 'phrases', component: PhrasesHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
