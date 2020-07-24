import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'post-add', component: PostEditComponent},
  { path: ':index/post-edit', component: PostEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
