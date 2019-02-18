(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand bg-primary justify-content-center\">\n  <h2 class=\"my-2 my-lg-0\">Github User Search Demo</h2>\n</nav>\n\n<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <form class=\"my-2 search-form\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <input class=\"form-control\" type=\"search\" [formControl]=\"searchControl\" placeholder=\"Search\" aria-label=\"Search\">\n          </div>\n          <div class=\"col-2\">\n            <div *ngIf=\"githubSearchService.searching\" class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12 mt-3\">\n            <p *ngIf=\"userList\">Total count: {{ userList.total_count }}</p>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"col-8\">\n      <div class=\"row\">\n        <app-users-list *ngIf=\"userList\" [userList]=\"userList\" class=\"col-12\"></app-users-list>\n\n        <div class=\"col-12\">\n          <pagination\n            class=\"mt-5\"\n            *ngIf=\"userList && userList.total_count > resultsPerPage\"\n            [totalItems]=\"userList.total_count\"\n            [(ngModel)]=\"currentPage\"\n            [maxSize]=\"maxSize\"\n            (pageChanged)=\"pageChanged($event)\">\n          </pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar h2 {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL2doLXVzZXItc2VhcmNoL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_github_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/github-search.service */ "./src/app/services/github-search.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(githubSearchService) {
        this.githubSearchService = githubSearchService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
        ]);
        this.resultsPerPage = 7;
        this.currentPage = 1;
        this.maxSize = 10;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges
            .pipe(
        // Filter if less than two characters are entered
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) { return value.length > 2; }), 
        // Set the delay to one second
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) {
            return _this.githubSearchService.getUsersList(value, _this.resultsPerPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                _this.userList = null;
                console.log(error);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }));
        }))
            .subscribe(function (userList) {
            _this.userList = userList;
            _this.githubSearchService.searching = false;
        });
    };
    AppComponent.prototype.pageChanged = function (event) {
        var _this = this;
        this.githubSearchService.getUsersList(this.githubSearchService.searchUrl, this.resultsPerPage, event.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.userList = null;
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
        }))
            .subscribe(function (userList) {
            _this.userList = userList;
            _this.githubSearchService.searching = false;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_github_search_service__WEBPACK_IMPORTED_MODULE_5__["GithubSearchService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_github_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/github-search.service */ "./src/app/services/github-search.service.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/components/users-list/users-list.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_7__["UsersListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot()
            ],
            providers: [_services_github_search_service__WEBPACK_IMPORTED_MODULE_6__["GithubSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/users-list/users-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let user of userList.items\" class=\"card mb-3\">\n    <div class=\"row no-gutters\">\n      <div class=\"img-holder\">\n        <a class=\"card-img\" [href]=\"user.html_url\">\n          <img [src]=\"user.avatar_url+'&s=160'\" width=\"80\" height=\"80\" [alt]=\"user.login\" />\n        </a>\n      </div>\n\n      <div class=\"text-holder\">\n        <h5 class=\"card-title\">{{ user.login }}</h5>\n        <p class=\"card-text\"><a [href]=\"user.html_url\">{{ user.html_url }}</a></p>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0; }\n\n.img-holder img {\n  border-radius: .25rem 0 0 .25rem; }\n\n.text-holder {\n  padding: 10px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzL1Byb2plY3RzL2doLXVzZXItc2VhcmNoL3NyYy9hcHAvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBRUksZ0NBQWdDLEVBQUE7O0FBSXBDO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW1nLWhvbGRlciB7XG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtIDAgMCAuMjVyZW07XG4gIH1cbn1cblxuLnRleHQtaG9sZGVyIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users-list/users-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-list.model */ "./src/app/models/user-list.model.ts");



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_list_model__WEBPACK_IMPORTED_MODULE_2__["UserList"])
    ], UsersListComponent.prototype, "userList", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/components/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/components/users-list/users-list.component.scss")]
        })
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/models/user-list.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/user-list.model.ts ***!
  \*******************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
var UserList = /** @class */ (function () {
    function UserList() {
    }
    return UserList;
}());



/***/ }),

/***/ "./src/app/services/github-search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/github-search.service.ts ***!
  \***************************************************/
/*! exports provided: GithubSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubSearchService", function() { return GithubSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GithubSearchService = /** @class */ (function () {
    function GithubSearchService(http) {
        this.http = http;
        this.API_PATH = 'https://api.github.com/search/users';
        this.searching = false;
    }
    GithubSearchService.prototype.getUsersList = function (searchValue, resultsPerPage, page) {
        if (resultsPerPage === void 0) { resultsPerPage = 10; }
        if (page === void 0) { page = 1; }
        this.searchUrl = '';
        /* tslint:disable:object-literal-key-quotes */
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3.text-match+json'
            }),
        };
        /* tslint:enable:object-literal-key-quotes */
        this.searchQuery = searchValue.replace(/\s/g, '+');
        this.searching = true;
        this.searchUrl = this.API_PATH + "?page=" + page + "&q=" + this.searchQuery + "&per_page=" + resultsPerPage;
        return this.http.get(this.searchUrl, requestOptions);
    };
    GithubSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubSearchService);
    return GithubSearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vs/Projects/gh-user-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map