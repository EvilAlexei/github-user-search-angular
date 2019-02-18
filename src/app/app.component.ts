import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, debounceTime, filter, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { GithubSearchService } from './services/github-search.service';
import { UserList } from './models/user-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  userList: UserList;
  resultsPerPage = 7;
  currentPage = 1;
  maxSize = 10;
  page: number;

  constructor(private githubSearchService: GithubSearchService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        // Filter if less than two characters are entered
        filter(value => value.length > 2),
        // Set the delay to one second
        debounceTime(1000),
        switchMap(value =>
          this.githubSearchService.getUsersList(value, this.resultsPerPage).pipe(
            catchError(error => {
              this.userList = null;
              console.log(error);
              return EMPTY;
            })
          )
        )
      )
      .subscribe((userList: UserList) => {
        this.userList = userList;
        this.githubSearchService.searching = false;
      });
  }

  pageChanged(event: any): void {
    this.githubSearchService.getUsersList(this.githubSearchService.searchUrl, this.resultsPerPage, event.page)
      .pipe(
        catchError(error => {
          this.userList = null;
          console.log(error);
          return EMPTY;
        })
      )
      .subscribe((userList: UserList) => {
        this.userList = userList;
        this.githubSearchService.searching = false;
      });
  }
}
