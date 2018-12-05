import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhrasesHomeComponent } from './components/phrases-home/phrases-home.component';
import { PhrasesCreateComponent } from './components/phrases-create/phrases-create.component';
import { PhrasesDetailComponent } from './components/phrases-detail/phrases-detail.component';

const routes: Routes = [
  { path: 'phrases', component: PhrasesHomeComponent },
  { path: 'phrases/create', component: PhrasesCreateComponent },
  { path: 'phrases/detail', component: PhrasesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
