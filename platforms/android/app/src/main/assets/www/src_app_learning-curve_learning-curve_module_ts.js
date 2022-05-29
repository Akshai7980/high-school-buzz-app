(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_learning-curve_learning-curve_module_ts"],{

/***/ 2859:
/*!*****************************************************************!*\
  !*** ./src/app/learning-curve/learning-curve-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCurvePageRoutingModule": () => (/* binding */ LearningCurvePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _learning_curve_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-curve.page */ 2356);




const routes = [
    {
        path: '',
        component: _learning_curve_page__WEBPACK_IMPORTED_MODULE_0__.LearningCurvePage
    }
];
let LearningCurvePageRoutingModule = class LearningCurvePageRoutingModule {
};
LearningCurvePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LearningCurvePageRoutingModule);



/***/ }),

/***/ 1454:
/*!*********************************************************!*\
  !*** ./src/app/learning-curve/learning-curve.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCurvePageModule": () => (/* binding */ LearningCurvePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _learning_curve_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learning-curve-routing.module */ 2859);
/* harmony import */ var _learning_curve_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learning-curve.page */ 2356);







let LearningCurvePageModule = class LearningCurvePageModule {
};
LearningCurvePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _learning_curve_routing_module__WEBPACK_IMPORTED_MODULE_0__.LearningCurvePageRoutingModule
        ],
        declarations: [_learning_curve_page__WEBPACK_IMPORTED_MODULE_1__.LearningCurvePage]
    })
], LearningCurvePageModule);



/***/ }),

/***/ 2356:
/*!*******************************************************!*\
  !*** ./src/app/learning-curve/learning-curve.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningCurvePage": () => (/* binding */ LearningCurvePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_learning_curve_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./learning-curve.page.html */ 2862);
/* harmony import */ var _learning_curve_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learning-curve.page.scss */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LearningCurvePage = class LearningCurvePage {
    constructor() { }
    ngOnInit() {
    }
};
LearningCurvePage.ctorParameters = () => [];
LearningCurvePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-learning-curve',
        template: _raw_loader_learning_curve_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_learning_curve_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LearningCurvePage);



/***/ }),

/***/ 7802:
/*!*********************************************************!*\
  !*** ./src/app/learning-curve/learning-curve.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFybmluZy1jdXJ2ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2862:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/learning-curve/learning-curve.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>learning-curve</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_learning-curve_learning-curve_module_ts.js.map