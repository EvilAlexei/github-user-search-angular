import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserList } from '../models/user-list.model';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  private API_PATH = 'https://api.github.com/search/users';

  searching = false;
  searchQuery: string;
  searchUrl: string;

  constructor(private http: HttpClient) { }

  getUsersList(searchValue: string, resultsPerPage: number = 10, page: number = 1): Observable <UserList> {
    this.searchUrl = '';
    /* tslint:disable:object-literal-key-quotes */
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3.text-match+json'
      }),
    };
    /* tslint:enable:object-literal-key-quotes */
    this.searchQuery = searchValue.replace(/\s/g, '+');
    this.searching = true;
    this.searchUrl = `${this.API_PATH}?page=${page}&q=${this.searchQuery}&per_page=${resultsPerPage}`;

    return this.http.get<UserList>(this.searchUrl, requestOptions);
  }
}
