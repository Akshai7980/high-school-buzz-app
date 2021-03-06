(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_add-contest_add-contest_module_ts"],{

/***/ 7349:
/*!***********************************************************!*\
  !*** ./src/app/add-contest/add-contest-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContestPageRoutingModule": () => (/* binding */ AddContestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_contest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contest.page */ 8074);




const routes = [
    {
        path: '',
        component: _add_contest_page__WEBPACK_IMPORTED_MODULE_0__.AddContestPage
    }
];
let AddContestPageRoutingModule = class AddContestPageRoutingModule {
};
AddContestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddContestPageRoutingModule);



/***/ }),

/***/ 7662:
/*!***************************************************!*\
  !*** ./src/app/add-contest/add-contest.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContestPageModule": () => (/* binding */ AddContestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_contest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contest-routing.module */ 7349);
/* harmony import */ var _add_contest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contest.page */ 8074);







let AddContestPageModule = class AddContestPageModule {
};
AddContestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_contest_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddContestPageRoutingModule
        ],
        declarations: [_add_contest_page__WEBPACK_IMPORTED_MODULE_1__.AddContestPage]
    })
], AddContestPageModule);



/***/ }),

/***/ 8074:
/*!*************************************************!*\
  !*** ./src/app/add-contest/add-contest.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContestPage": () => (/* binding */ AddContestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_contest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-contest.page.html */ 5876);
/* harmony import */ var _add_contest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contest.page.scss */ 2456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddContestPage = class AddContestPage {
    constructor() { }
    ngOnInit() {
    }
};
AddContestPage.ctorParameters = () => [];
AddContestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-contest',
        template: _raw_loader_add_contest_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_contest_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddContestPage);



/***/ }),

/***/ 2456:
/*!***************************************************!*\
  !*** ./src/app/add-contest/add-contest.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  height: -webkit-fill-available;\n  padding: 10px;\n}\n\nion-card {\n  border-radius: 20px;\n  padding: 30px 20px 20px 20px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px !important;\n}\n\nion-input {\n  --padding-bottom: 20px;\n}\n\nion-icon {\n  margin: 0px;\n  position: relative;\n  bottom: 5px;\n  left: 5px;\n}\n\nion-item {\n  --placeholder-color: black;\n  font-weight: 600;\n  border: 0.5px solid #9e9e9ea6;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 15px;\n  height: 40px;\n}\n\nion-textarea {\n  --placeholder-color: black;\n  font-weight: 600;\n  border: 0.5px solid #9e9e9ea6;\n  border-radius: 15px;\n  --padding-start: 15px;\n  margin-bottom: 15px;\n  height: 125px;\n}\n\n.submit-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n  width: 140px;\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb250ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0lBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhZGQtY29udGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EsICM5Yjk0ZDIpO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxMHB4IDVweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjOWU5ZTllYTY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM5ZTllOWVhNjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGhlaWdodDogMTI1cHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4RkRDRkEgMTAlLCAjMTBCMEVFIDkwJSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ 5876:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-contest/add-contest.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> Add Contest </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <ion-card>\n\n            <ion-item lines=\"none\">\n                <ion-input placeholder=\"Title\"></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-input placeholder=\"Contest End\"></ion-input>\n                <ion-icon name=\"calendar-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-input placeholder=\"Upload File\"></ion-input>\n                <ion-icon name=\"share-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <ion-textarea placeholder=\"Contest Details\"></ion-textarea>\n\n            <div style=\"text-align: center;\">\n                <ion-button class=\"submit-button\" shape=\"round\">SUBMIT</ion-button>\n            </div>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-contest_add-contest_module_ts.js.map