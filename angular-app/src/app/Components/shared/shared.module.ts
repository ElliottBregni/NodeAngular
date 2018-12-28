import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent1, ArticleMetaComponent1, ArticlePreviewComponent1 } from './article-helpers';
import { FavoriteButtonComponent1, FollowButtonComponent1 } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent1,
    ArticleMetaComponent1,
    ArticlePreviewComponent1,
    FavoriteButtonComponent1,
    FollowButtonComponent1,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    ArticleListComponent1,
    ArticleMetaComponent1,
    ArticlePreviewComponent1,
    CommonModule,
    FavoriteButtonComponent1,
    FollowButtonComponent1,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
