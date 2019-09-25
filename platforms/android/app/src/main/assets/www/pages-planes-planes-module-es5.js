(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-planes-planes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/planes/planes.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/planes/planes.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Planes\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-grid >\n      <ion-row>\n        <ion-col >\n          <div class=\"image-container\"  routerLink=\"/imagep1\"><img src=\"/assets/img/p1.jpg\" alt=\"\" /></div>\n        </ion-col>\n        <ion-col >\n            <div class=\"image-container\" routerLink=\"/imagep2\"><img src=\"/assets/img/p2.jpg\" alt=\"\" /></div>\n          </ion-col>\n         \n      </ion-row>\n      <ion-row>\n          <ion-col >\n              <div class=\"image-container\"routerLink=\"/imagep3\" ><img src=\"/assets/img/p3.jpg\" alt=\"\" /></div>\n            </ion-col>\n          <ion-col >\n            <div class=\"image-container\" routerLink=\"/imagep4\"><img src=\"/assets/img/p4.jpg\" alt=\"\" /></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col >\n                <div class=\"image-container\" routerLink=\"/imagep5\"><img src=\"/assets/img/p5.jpg\" alt=\"\" /></div>\n              </ion-col>\n              <ion-col >\n                  <div class=\"image-container\" routerLink=\"/imagep6\"><img src=\"/assets/img/p6.jpg\" alt=\"\" /></div>\n                </ion-col>\n        </ion-row>\n    </ion-grid>\n    </ion-content>"

/***/ }),

/***/ "./src/app/pages/planes/planes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.module.ts ***!
  \***********************************************/
/*! exports provided: PlanesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPageModule", function() { return PlanesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _planes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planes.page */ "./src/app/pages/planes/planes.page.ts");







var routes = [
    {
        path: '',
        component: _planes_page__WEBPACK_IMPORTED_MODULE_6__["PlanesPage"]
    }
];
var PlanesPageModule = /** @class */ (function () {
    function PlanesPageModule() {
    }
    PlanesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_planes_page__WEBPACK_IMPORTED_MODULE_6__["PlanesPage"]]
        })
    ], PlanesPageModule);
    return PlanesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/planes/planes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYW5lcy9wbGFuZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/planes/planes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/planes/planes.page.ts ***!
  \*********************************************/
/*! exports provided: PlanesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPage", function() { return PlanesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlanesPage = /** @class */ (function () {
    function PlanesPage() {
    }
    PlanesPage.prototype.ngOnInit = function () {
    };
    PlanesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planes',
            template: __webpack_require__(/*! raw-loader!./planes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/planes/planes.page.html"),
            styles: [__webpack_require__(/*! ./planes.page.scss */ "./src/app/pages/planes/planes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlanesPage);
    return PlanesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-planes-planes-module-es5.js.map