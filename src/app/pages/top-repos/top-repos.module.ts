import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopReposComponent} from './top-repos.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {RepoCardComponent} from '../../components/repo-card/repo-card.component';

const routs: Routes = [
  {
    path: '',
    component: TopReposComponent
  }
];

@NgModule({
  declarations: [TopReposComponent, RepoCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class TopReposModule {
}
