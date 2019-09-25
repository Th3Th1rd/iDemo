(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expanded-image4-image4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image4/image4.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expanded/image4/image4.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title color=light>Zoo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n      <ion-grid>\n        <ion-row></ion-row>\n        <ion-row>\n            <img src=\"/assets/img/4.jpg\" alt=\"\" routerLink=\"/list\" />\n        </ion-row>\n        <ion-row></ion-row>\n      </ion-grid>\n      \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/expanded/image4/image4.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image4/image4.module.ts ***!
  \********************************************************/
/*! exports provided: Image4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image4PageModule", function() { return Image4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image4.page */ "./src/app/pages/expanded/image4/image4.page.ts");







var routes = [
    {
        path: '',
        component: _image4_page__WEBPACK_IMPORTED_MODULE_6__["Image4Page"]
    }
];
var Image4PageModule = /** @class */ (function () {
    function Image4PageModule() {
    }
    Image4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_image4_page__WEBPACK_IMPORTED_MODULE_6__["Image4Page"]]
        })
    ], Image4PageModule);
    return Image4PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expanded/image4/image4.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/expanded/image4/image4.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#111D12;\n}\n\nion-header {\n  --ion-background-color:#111D12;\n}\n\nion-row {\n  min-height: 30%;\n}\n\nion-content {\n  --ion-background-color:#111D12;\n}\n\nion-header {\n  --ion-background-color:#111D12;\n}\n\nion-row {\n  min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2U0L0M6XFxVc2Vyc1xcem9waXpcXGlEZW1vL3NyY1xcYXBwXFxwYWdlc1xcZXhwYW5kZWRcXGltYWdlNFxcaW1hZ2U0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2U0L2ltYWdlNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQ0FKOztBREVBO0VBRUksOEJBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURBQztFQUVHLDhCQUFBO0FDRUo7O0FEQUE7RUFFSSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwYW5kZWQvaW1hZ2U0L2ltYWdlNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuaW9uLWhlYWRlcntcclxuICAgIFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBtaW4taGVpZ2h0OiAzMCVcclxufWlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG5pb24taGVhZGVye1xyXG4gICAgXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIG1pbi1oZWlnaHQ6IDMwJVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XG59XG5cbmlvbi1yb3cge1xuICBtaW4taGVpZ2h0OiAzMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xufVxuXG5pb24tcm93IHtcbiAgbWluLWhlaWdodDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expanded/image4/image4.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/expanded/image4/image4.page.ts ***!
  \******************************************************/
/*! exports provided: Image4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image4Page", function() { return Image4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Image4Page = /** @class */ (function () {
    function Image4Page() {
    }
    Image4Page.prototype.ngOnInit = function () {
    };
    Image4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image4',
            template: __webpack_require__(/*! raw-loader!./image4.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expanded/image4/image4.page.html"),
            styles: [__webpack_require__(/*! ./image4.page.scss */ "./src/app/pages/expanded/image4/image4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Image4Page);
    return Image4Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expanded-image4-image4-module-es5.js.map