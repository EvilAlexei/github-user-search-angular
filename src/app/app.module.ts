import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubSearchService } from './services/github-search.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  providers: [GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
