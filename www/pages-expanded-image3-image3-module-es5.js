(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expanded-image3-image3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image3/image3.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expanded/image3/image3.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title color=light>Zoo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n      <ion-grid>\n        <ion-row></ion-row>\n        <ion-row>\n            <img src=\"/assets/img/3.jpg\" alt=\"\" routerLink=\"/list\" />\n        </ion-row>\n        <ion-row></ion-row>\n      </ion-grid>\n      \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/expanded/image3/image3.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image3/image3.module.ts ***!
  \********************************************************/
/*! exports provided: Image3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image3PageModule", function() { return Image3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image3.page */ "./src/app/pages/expanded/image3/image3.page.ts");







var routes = [
    {
        path: '',
        component: _image3_page__WEBPACK_IMPORTED_MODULE_6__["Image3Page"]
    }
];
var Image3PageModule = /** @class */ (function () {
    function Image3PageModule() {
    }
    Image3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_image3_page__WEBPACK_IMPORTED_MODULE_6__["Image3Page"]]
        })
    ], Image3PageModule);
    return Image3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expanded/image3/image3.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image3/image3.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#111D12;\n}\n\nion-header {\n  --ion-background-color:#111D12;\n}\n\nion-row {\n  min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2UzL0M6XFxVc2Vyc1xcem9waXpcXGlEZW1vL3NyY1xcYXBwXFxwYWdlc1xcZXhwYW5kZWRcXGltYWdlM1xcaW1hZ2UzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2UzL2ltYWdlMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQ0FKOztBREVBO0VBRUksOEJBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGFuZGVkL2ltYWdlMy9pbWFnZTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG5pb24tcm93e1xyXG4gICAgbWluLWhlaWdodDogMzAlXHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcbn1cblxuaW9uLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/expanded/image3/image3.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/expanded/image3/image3.page.ts ***!
  \******************************************************/
/*! exports provided: Image3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image3Page", function() { return Image3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Image3Page = /** @class */ (function () {
    function Image3Page() {
    }
    Image3Page.prototype.ngOnInit = function () {
    };
    Image3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image3',
            template: __webpack_require__(/*! raw-loader!./image3.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image3/image3.page.html"),
            styles: [__webpack_require__(/*! ./image3.page.scss */ "./src/app/pages/expanded/image3/image3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Image3Page);
    return Image3Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expanded-image3-image3-module-es5.js.map