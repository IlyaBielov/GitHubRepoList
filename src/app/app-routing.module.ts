import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () => import('./pages/top-repos/top-repos.module')
      .then((m) => m.TopReposModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorite-repos/favorite-repos.module')
      .then((m) => m.FavoriteReposModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'top'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
