import {NgModule} from '@angular/core';
import {FavoriteReposComponent} from './favorite-repos.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FavoriteReposComponent
  }
];

@NgModule({
  declarations: [FavoriteReposComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavoriteReposModule {
}
