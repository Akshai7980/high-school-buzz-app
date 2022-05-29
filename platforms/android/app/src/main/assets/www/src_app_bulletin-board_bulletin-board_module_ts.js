(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_bulletin-board_bulletin-board_module_ts"],{

/***/ 3572:
/*!*****************************************************************!*\
  !*** ./src/app/bulletin-board/bulletin-board-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletinBoardPageRoutingModule": () => (/* binding */ BulletinBoardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bulletin_board_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bulletin-board.page */ 4734);




const routes = [
    {
        path: '',
        component: _bulletin_board_page__WEBPACK_IMPORTED_MODULE_0__.BulletinBoardPage
    }
];
let BulletinBoardPageRoutingModule = class BulletinBoardPageRoutingModule {
};
BulletinBoardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BulletinBoardPageRoutingModule);



/***/ }),

/***/ 8110:
/*!*********************************************************!*\
  !*** ./src/app/bulletin-board/bulletin-board.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletinBoardPageModule": () => (/* binding */ BulletinBoardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bulletin_board_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bulletin-board-routing.module */ 3572);
/* harmony import */ var _bulletin_board_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulletin-board.page */ 4734);







let BulletinBoardPageModule = class BulletinBoardPageModule {
};
BulletinBoardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bulletin_board_routing_module__WEBPACK_IMPORTED_MODULE_0__.BulletinBoardPageRoutingModule
        ],
        declarations: [_bulletin_board_page__WEBPACK_IMPORTED_MODULE_1__.BulletinBoardPage]
    })
], BulletinBoardPageModule);



/***/ }),

/***/ 4734:
/*!*******************************************************!*\
  !*** ./src/app/bulletin-board/bulletin-board.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletinBoardPage": () => (/* binding */ BulletinBoardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bulletin_board_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bulletin-board.page.html */ 9838);
/* harmony import */ var _bulletin_board_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bulletin-board.page.scss */ 3639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BulletinBoardPage = class BulletinBoardPage {
    constructor() { }
    ngOnInit() {
    }
};
BulletinBoardPage.ctorParameters = () => [];
BulletinBoardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bulletin-board',
        template: _raw_loader_bulletin_board_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bulletin_board_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BulletinBoardPage);



/***/ }),

/***/ 3639:
/*!*********************************************************!*\
  !*** ./src/app/bulletin-board/bulletin-board.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 45px 20px 35px 20px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGxldGluLWJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYnVsbGV0aW4tYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiA0NXB4IDIwcHggMzVweCAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ 9838:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulletin-board/bulletin-board.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Bulletin Board</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <img src=\"../../assets/image/bulletin-board-bg.png\" alt=\"\">\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_bulletin-board_bulletin-board_module_ts.js.map