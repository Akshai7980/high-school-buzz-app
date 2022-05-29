(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_report-abuse_report-abuse_module_ts"],{

/***/ 1674:
/*!*************************************************************!*\
  !*** ./src/app/report-abuse/report-abuse-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportAbusePageRoutingModule": () => (/* binding */ ReportAbusePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _report_abuse_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-abuse.page */ 9229);




const routes = [
    {
        path: '',
        component: _report_abuse_page__WEBPACK_IMPORTED_MODULE_0__.ReportAbusePage
    }
];
let ReportAbusePageRoutingModule = class ReportAbusePageRoutingModule {
};
ReportAbusePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportAbusePageRoutingModule);



/***/ }),

/***/ 5631:
/*!*****************************************************!*\
  !*** ./src/app/report-abuse/report-abuse.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportAbusePageModule": () => (/* binding */ ReportAbusePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _report_abuse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-abuse-routing.module */ 1674);
/* harmony import */ var _report_abuse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-abuse.page */ 9229);







let ReportAbusePageModule = class ReportAbusePageModule {
};
ReportAbusePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_abuse_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportAbusePageRoutingModule
        ],
        declarations: [_report_abuse_page__WEBPACK_IMPORTED_MODULE_1__.ReportAbusePage]
    })
], ReportAbusePageModule);



/***/ }),

/***/ 9229:
/*!***************************************************!*\
  !*** ./src/app/report-abuse/report-abuse.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportAbusePage": () => (/* binding */ ReportAbusePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_report_abuse_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report-abuse.page.html */ 7995);
/* harmony import */ var _report_abuse_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-abuse.page.scss */ 2077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ReportAbusePage = class ReportAbusePage {
    constructor() {
        this.ReportAbuse = [];
    }
    ngOnInit() {
        this.ReportAbuse = [
            {
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
            }
        ];
    }
};
ReportAbusePage.ctorParameters = () => [];
ReportAbusePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-report-abuse',
        template: _raw_loader_report_abuse_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_abuse_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportAbusePage);



/***/ }),

/***/ 2077:
/*!*****************************************************!*\
  !*** ./src/app/report-abuse/report-abuse.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 20px;\n}\n\n.sub-container {\n  text-align: center;\n  margin-top: 35px;\n}\n\na {\n  color: #f24aa2;\n  font-weight: 600;\n}\n\nion-card {\n  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 20px 2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px !important;\n  margin: 25px 0px 25px 0px;\n}\n\nion-card-header {\n  background-color: #01A7FD;\n  height: 75px;\n  margin-bottom: 35px;\n  display: flex;\n}\n\nion-card-title {\n  color: white;\n  letter-spacing: 1px;\n  padding: 0px 0px 0px 75px;\n  text-align: initial;\n  font-weight: 600;\n  font-size: 18px;\n  position: relative;\n  bottom: 10px;\n}\n\nh3 {\n  margin: 0px;\n  font-weight: 600;\n}\n\nh5 {\n  margin: 0px;\n  font-weight: 600;\n}\n\nh6 {\n  font-weight: 600;\n  font-size: 16px;\n  text-align: initial;\n  color: black;\n  letter-spacing: 1px;\n}\n\nion-textarea {\n  border-bottom: 1px solid grey;\n}\n\n.page-contents {\n  margin-top: 10px;\n  color: grey;\n  letter-spacing: 0.5px;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.submit-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #F9A3C8 10%, #F24FA4 90%);\n  width: 140px;\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1hYnVzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0lBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJyZXBvcnQtYWJ1c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc3ViLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjZjI0YWEyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDFweCAxcHggMjBweCAycHgsIHJnYigwIDAgMCAvIDE0JSkgMHB4IDJweCAycHggMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAxcHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyNXB4IDBweCAyNXB4IDBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFBN0ZEO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA3NXB4O1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMTBweDtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cblxuLnBhZ2UtY29udGVudHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjlBM0M4IDEwJSwgI0YyNEZBNCA5MCUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ 7995:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report-abuse/report-abuse.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Report Abuse</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <h3> Schedule a issue </h3>\n        <p class=\"page-contents\"> {{this.ReportAbuse[0]?.text}}</p>\n        <p class=\"page-contents\"> {{this.ReportAbuse[0]?.text}}</p>\n        <p class=\"page-contents\"> {{this.ReportAbuse[0]?.text}}</p>\n\n        <h5>What type of issue are you facing?</h5>\n\n        <div class=\"sub-container\">\n            <a href=\"#\">CHOOSE A DIFFERENT ISSUES</a>\n\n            <ion-card>\n                <ion-card-header>\n                    <img src=\"../../assets/image/msg1.png\" alt=\"\">\n                    <ion-card-title> Compensation and Role Change </ion-card-title>\n                </ion-card-header>\n\n                <ion-card-content>\n                    <h6>Tell us more about this issues</h6>\n\n                    <ion-textarea type=\"text\" autocapitalize=\"true\" autoGrow=\"true\"></ion-textarea>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-button shape=\"round\" class=\"submit-button\">Submit</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_report-abuse_report-abuse_module_ts.js.map