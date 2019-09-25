(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expanded-image8-image8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image8/image8.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expanded/image8/image8.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=light>Zoo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <ion-grid>\n      <ion-row></ion-row>\n      <ion-row>\n          <img src=\"/assets/img/8.jpg\" alt=\"\" routerLink=\"/list\" />\n      </ion-row>\n      <ion-row></ion-row>\n    </ion-grid>\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expanded/image8/image8.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image8/image8.module.ts ***!
  \********************************************************/
/*! exports provided: Image8PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image8PageModule", function() { return Image8PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image8_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image8.page */ "./src/app/pages/expanded/image8/image8.page.ts");







var routes = [
    {
        path: '',
        component: _image8_page__WEBPACK_IMPORTED_MODULE_6__["Image8Page"]
    }
];
var Image8PageModule = /** @class */ (function () {
    function Image8PageModule() {
    }
    Image8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_image8_page__WEBPACK_IMPORTED_MODULE_6__["Image8Page"]]
        })
    ], Image8PageModule);
    return Image8PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expanded/image8/image8.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image8/image8.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#111D12;\n}\n\nion-header {\n  --ion-background-color:#111D12;\n}\n\nion-row {\n  min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2U4L0M6XFxVc2Vyc1xcem9waXpcXGlEZW1vL3NyY1xcYXBwXFxwYWdlc1xcZXhwYW5kZWRcXGltYWdlOFxcaW1hZ2U4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2U4L2ltYWdlOC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQ0FKOztBREVBO0VBRUksOEJBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGFuZGVkL2ltYWdlOC9pbWFnZTgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG5pb24tcm93e1xyXG4gICAgbWluLWhlaWdodDogMzAlXHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcbn1cblxuaW9uLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/expanded/image8/image8.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/expanded/image8/image8.page.ts ***!
  \******************************************************/
/*! exports provided: Image8Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image8Page", function() { return Image8Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Image8Page = /** @class */ (function () {
    function Image8Page() {
    }
    Image8Page.prototype.ngOnInit = function () {
    };
    Image8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image8',
            template: __webpack_require__(/*! raw-loader!./image8.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image8/image8.page.html"),
            styles: [__webpack_require__(/*! ./image8.page.scss */ "./src/app/pages/expanded/image8/image8.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Image8Page);
    return Image8Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expanded-image8-image8-module-es5.js.map