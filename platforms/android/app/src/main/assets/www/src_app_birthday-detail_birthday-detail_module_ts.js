(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_birthday-detail_birthday-detail_module_ts"],{

/***/ 1611:
/*!*******************************************************************!*\
  !*** ./src/app/birthday-detail/birthday-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayDetailPageRoutingModule": () => (/* binding */ BirthdayDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _birthday_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-detail.page */ 306);




const routes = [
    {
        path: '',
        component: _birthday_detail_page__WEBPACK_IMPORTED_MODULE_0__.BirthdayDetailPage
    }
];
let BirthdayDetailPageRoutingModule = class BirthdayDetailPageRoutingModule {
};
BirthdayDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BirthdayDetailPageRoutingModule);



/***/ }),

/***/ 2045:
/*!***********************************************************!*\
  !*** ./src/app/birthday-detail/birthday-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayDetailPageModule": () => (/* binding */ BirthdayDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _birthday_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-detail-routing.module */ 1611);
/* harmony import */ var _birthday_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-detail.page */ 306);







let BirthdayDetailPageModule = class BirthdayDetailPageModule {
};
BirthdayDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _birthday_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.BirthdayDetailPageRoutingModule
        ],
        declarations: [_birthday_detail_page__WEBPACK_IMPORTED_MODULE_1__.BirthdayDetailPage]
    })
], BirthdayDetailPageModule);



/***/ }),

/***/ 306:
/*!*********************************************************!*\
  !*** ./src/app/birthday-detail/birthday-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayDetailPage": () => (/* binding */ BirthdayDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_birthday_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./birthday-detail.page.html */ 3544);
/* harmony import */ var _birthday_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-detail.page.scss */ 6801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BirthdayDetailPage = class BirthdayDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
BirthdayDetailPage.ctorParameters = () => [];
BirthdayDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-birthday-detail',
        template: _raw_loader_birthday_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_birthday_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BirthdayDetailPage);



/***/ }),

/***/ 6801:
/*!***********************************************************!*\
  !*** ./src/app/birthday-detail/birthday-detail.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXJ0aGRheS1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3544:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthday-detail/birthday-detail.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>birthday-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_birthday-detail_birthday-detail_module_ts.js.map