(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expanded-imagep6-imagep6-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/imagep6/imagep6.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expanded/imagep6/imagep6.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=light>Planes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <ion-grid>\n      <ion-row></ion-row>\n      <ion-row>\n          <img src=\"/assets/img/p6.jpg\" alt=\"\" routerLink=\"/planes\" />\n      </ion-row>\n      <ion-row></ion-row>\n    </ion-grid>\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expanded/imagep6/imagep6.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/expanded/imagep6/imagep6.module.ts ***!
  \**********************************************************/
/*! exports provided: Imagep6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imagep6PageModule", function() { return Imagep6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _imagep6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagep6.page */ "./src/app/pages/expanded/imagep6/imagep6.page.ts");







var routes = [
    {
        path: '',
        component: _imagep6_page__WEBPACK_IMPORTED_MODULE_6__["Imagep6Page"]
    }
];
var Imagep6PageModule = /** @class */ (function () {
    function Imagep6PageModule() {
    }
    Imagep6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_imagep6_page__WEBPACK_IMPORTED_MODULE_6__["Imagep6Page"]]
        })
    ], Imagep6PageModule);
    return Imagep6PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expanded/imagep6/imagep6.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/expanded/imagep6/imagep6.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#111D12;\n}\n\nion-header {\n  --ion-background-color:#111D12;\n}\n\nion-row {\n  min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2VwNi9DOlxcVXNlcnNcXHpvcGl6XFxpRGVtby9zcmNcXGFwcFxccGFnZXNcXGV4cGFuZGVkXFxpbWFnZXA2XFxpbWFnZXA2LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2VwNi9pbWFnZXA2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FDQUo7O0FERUE7RUFFSSw4QkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2VwNi9pbWFnZXA2LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG5pb24taGVhZGVye1xyXG4gICAgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIG1pbi1oZWlnaHQ6IDMwJVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XG59XG5cbmlvbi1yb3cge1xuICBtaW4taGVpZ2h0OiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/expanded/imagep6/imagep6.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/imagep6/imagep6.page.ts ***!
  \********************************************************/
/*! exports provided: Imagep6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imagep6Page", function() { return Imagep6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Imagep6Page = /** @class */ (function () {
    function Imagep6Page() {
    }
    Imagep6Page.prototype.ngOnInit = function () {
    };
    Imagep6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagep6',
            template: __webpack_require__(/*! raw-loader!./imagep6.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/imagep6/imagep6.page.html"),
            styles: [__webpack_require__(/*! ./imagep6.page.scss */ "./src/app/pages/expanded/imagep6/imagep6.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Imagep6Page);
    return Imagep6Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expanded-imagep6-imagep6-module-es5.js.map