(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_birthday-wish-add_birthday-wish-add_module_ts"],{

/***/ 2050:
/*!***********************************************************************!*\
  !*** ./src/app/birthday-wish-add/birthday-wish-add-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayWishAddPageRoutingModule": () => (/* binding */ BirthdayWishAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _birthday_wish_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-wish-add.page */ 9064);




const routes = [
    {
        path: '',
        component: _birthday_wish_add_page__WEBPACK_IMPORTED_MODULE_0__.BirthdayWishAddPage
    }
];
let BirthdayWishAddPageRoutingModule = class BirthdayWishAddPageRoutingModule {
};
BirthdayWishAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BirthdayWishAddPageRoutingModule);



/***/ }),

/***/ 6533:
/*!***************************************************************!*\
  !*** ./src/app/birthday-wish-add/birthday-wish-add.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayWishAddPageModule": () => (/* binding */ BirthdayWishAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _birthday_wish_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-wish-add-routing.module */ 2050);
/* harmony import */ var _birthday_wish_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-wish-add.page */ 9064);







let BirthdayWishAddPageModule = class BirthdayWishAddPageModule {
};
BirthdayWishAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _birthday_wish_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.BirthdayWishAddPageRoutingModule
        ],
        declarations: [_birthday_wish_add_page__WEBPACK_IMPORTED_MODULE_1__.BirthdayWishAddPage]
    })
], BirthdayWishAddPageModule);



/***/ }),

/***/ 9064:
/*!*************************************************************!*\
  !*** ./src/app/birthday-wish-add/birthday-wish-add.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayWishAddPage": () => (/* binding */ BirthdayWishAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_birthday_wish_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./birthday-wish-add.page.html */ 6712);
/* harmony import */ var _birthday_wish_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-wish-add.page.scss */ 7064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BirthdayWishAddPage = class BirthdayWishAddPage {
    constructor() { }
    ngOnInit() {
    }
};
BirthdayWishAddPage.ctorParameters = () => [];
BirthdayWishAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-birthday-wish-add',
        template: _raw_loader_birthday_wish_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_birthday_wish_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BirthdayWishAddPage);



/***/ }),

/***/ 7064:
/*!***************************************************************!*\
  !*** ./src/app/birthday-wish-add/birthday-wish-add.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-bg-color {\n  background-image: linear-gradient(to bottom right, #1B91F3, #F24AA2);\n}\n\n.second-header {\n  background-color: #1793F5;\n  height: 50px;\n  border-radius: 0px 0px 35px 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpcnRoZGF5LXdpc2gtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9FQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiYmlydGhkYXktd2lzaC1hZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZy1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzFCOTFGMywgI0YyNEFBMik7XG59XG5cbi5zZWNvbmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5M0Y1O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDM1cHggMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ 6712:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthday-wish-add/birthday-wish-add.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border ; header-bg-color\">\n    <div style=\"display: flex;\n    justify-content: space-between;\n    align-items: center;\">\n        <div>\n            <ion-buttons slot=\"start\">\n                <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n            </ion-buttons>\n        </div>\n        <div>\n            <ion-title style=\"right: 30px;\">Birthday Shout Out</ion-title>\n        </div>\n\n    </div>\n\n    <div style=\"display: flex;\n    justify-content: space-between;\n    align-items: center;\">\n        <div style=\"display: flex; align-items: center;\">\n            <div style=\"margin: 10px;\">\n                <img src=\"../../assets/image/Sample_Images/11.jpeg\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 50%;\n                border: 2px solid white;\n                object-fit: cover;\">\n            </div>\n            <div>\n                <p style=\"margin: 0px;\n                font-family: Fredoka_One;\n                font-size: 20px;\n                color: white;\n                letter-spacing: .5px;\">Michael</p>\n                <p style=\"margin: 0px;\n                font-family: PT_Sans_Regular;\n                font-size: 15px;\n                color: white;\n                letter-spacing: .5px;\">St.Francis School</p>\n            </div>\n        </div>\n\n        <div style=\"display: flex;\n        align-items: center;\n        margin-right: 25px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 30px;\">\n            <p style=\"color: white;\n            font-family: 'PT_Sans_Bold';\n            font-size: 19px;\n            letter-spacing: 0.5px;\n            margin-left: 10px;\">Today</p>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-header class=\"ion-no-border; second-header\">\n    <div style=\"display: flex;\">\n        <div style=\"display: flex;\n        align-items: center;\n        padding: 0px 55px 0px 0px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 30px;\">\n            <span style=\"color: white;\n            font-family: 'PT_Sans_Bold';\n            margin-left: 7px;\n            font-size: 19px;\">50k</span>\n        </div>\n\n        <div style=\"display: flex;\n        align-items: center;\n        padding: 0px 55px 0px 0px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 30px;\">\n            <span style=\"color: white;\n            font-family: 'PT_Sans_Bold';\n            margin-left: 7px;\n            font-size: 19px;\">50k</span>\n        </div>\n\n        <div style=\"display: flex; align-items: center;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 30px;\">\n            <span style=\"color: white;\n            font-family: 'PT_Sans_Bold';\n            margin-left: 7px;\n            font-size: 19px;\">50k</span>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_birthday-wish-add_birthday-wish-add_module_ts.js.map