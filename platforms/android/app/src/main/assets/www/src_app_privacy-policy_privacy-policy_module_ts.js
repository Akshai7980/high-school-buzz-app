(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_privacy-policy_privacy-policy_module_ts"],{

/***/ 9093:
/*!*****************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageRoutingModule": () => (/* binding */ PrivacyPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page */ 6457);




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPolicyPageRoutingModule);



/***/ }),

/***/ 6855:
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageModule": () => (/* binding */ PrivacyPolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 9093);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page */ 6457);







let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPageRoutingModule
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ 6457:
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacy-policy.page.html */ 4874);
/* harmony import */ var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss */ 6859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor() {
        this.PageContent = [];
    }
    ngOnInit() {
        this.PageContent = [
            {
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
            }
        ];
        // console.log('PageContent:',this.PageContent);
    }
};
PrivacyPolicyPage.ctorParameters = () => [];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ 6859:
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca , #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 20px;\n}\n\nh5 {\n  margin: 0px;\n  font-weight: 600;\n}\n\n.page-contents {\n  margin-top: 10px;\n  color: grey;\n  letter-spacing: 0.5px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.button-container {\n  display: flex;\n  background-color: white;\n  justify-content: space-evenly;\n  margin-top: 30px;\n}\n\nion-button {\n  text-transform: none;\n  height: 50px;\n  width: 130px;\n  font-weight: 600;\n  --border-radius: 10px;\n  font-size: 17px;\n}\n\n.accept-button {\n  --background: #00adef;\n}\n\n.decline-button {\n  --background: white;\n  color: #00adef;\n  box-shadow: 1px 1px 15px 1px #00adef87;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxxQkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7QUFRSiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EgLCAjOWI5NGQyKTtcbn1cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnBhZ2UtY29udGVudHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmFjY2VwdC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzAwYWRlZjtcbn1cbi5kZWNsaW5lLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwYWRlZjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggMXB4ICMwMGFkZWY4Nzs7XG59Il19 */");

/***/ }),

/***/ 4874:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> Privacy Policy </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div style=\"padding-top: 20px;\" *ngFor=\"let content of PageContent\">\n            <h5> Privacy Policy </h5>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n\n            <h5> Others </h5>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n\n            <div class=\"button-container\">\n                <ion-button fill=\"clear\" class=\"decline-button\">Decline</ion-button>\n                <ion-button class=\"accept-button\">Accept</ion-button>\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_privacy-policy_privacy-policy_module_ts.js.map