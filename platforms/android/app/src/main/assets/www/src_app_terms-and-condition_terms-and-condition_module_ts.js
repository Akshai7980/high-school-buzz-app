(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_terms-and-condition_terms-and-condition_module_ts"],{

/***/ 1919:
/*!***************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPageRoutingModule": () => (/* binding */ TermsAndConditionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition.page */ 622);




const routes = [
    {
        path: '',
        component: _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionPage
    }
];
let TermsAndConditionPageRoutingModule = class TermsAndConditionPageRoutingModule {
};
TermsAndConditionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndConditionPageRoutingModule);



/***/ }),

/***/ 7756:
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPageModule": () => (/* binding */ TermsAndConditionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _terms_and_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition-routing.module */ 1919);
/* harmony import */ var _terms_and_condition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition.page */ 622);







let TermsAndConditionPageModule = class TermsAndConditionPageModule {
};
TermsAndConditionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_and_condition_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionPageRoutingModule
        ],
        declarations: [_terms_and_condition_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionPage]
    })
], TermsAndConditionPageModule);



/***/ }),

/***/ 622:
/*!*****************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionPage": () => (/* binding */ TermsAndConditionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_terms_and_condition_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-and-condition.page.html */ 8518);
/* harmony import */ var _terms_and_condition_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition.page.scss */ 1063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TermsAndConditionPage = class TermsAndConditionPage {
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
TermsAndConditionPage.ctorParameters = () => [];
TermsAndConditionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-and-condition',
        template: _raw_loader_terms_and_condition_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_and_condition_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsAndConditionPage);



/***/ }),

/***/ 1063:
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca , #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 20px;\n}\n\nh3 {\n  margin: 0px;\n  font-weight: 600;\n}\n\nh5 {\n  margin: 0px;\n  font-weight: 600;\n}\n\n.last-update-p {\n  margin-top: 5px;\n  margin-left: 3px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  color: #000000d1;\n}\n\n.page-contents {\n  margin-top: 10px;\n  color: grey;\n  letter-spacing: 0.5px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.button-container {\n  display: flex;\n  background-color: white;\n  justify-content: space-evenly;\n  margin-top: 30px;\n}\n\nion-button {\n  text-transform: none;\n  height: 50px;\n  width: 130px;\n  font-weight: 600;\n  --border-radius: 10px;\n  font-size: 17px;\n}\n\n.accept-button {\n  --background: #00adef;\n}\n\n.decline-button {\n  --background: white;\n  color: #00adef;\n  box-shadow: 1px 1px 15px 1px #00adef87;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0FBU0o7O0FBUEE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtBQVVKIiwiZmlsZSI6InRlcm1zLWFuZC1jb25kaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhICwgIzliOTRkMik7XG59XG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5oMyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmxhc3QtdXBkYXRlLXB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6ICMwMDAwMDBkMTtcbn1cbi5wYWdlLWNvbnRlbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5hY2NlcHQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGFkZWY7XG59XG4uZGVjbGluZS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICMwMGFkZWY7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IDFweCAjMDBhZGVmODc7O1xufSJdfQ== */");

/***/ }),

/***/ 8518:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condition/terms-and-condition.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Terms & Conditions</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <h3> Terms of Service </h3>\n        <p class=\"last-update-p\"> Last Updated on August 2020 </p>\n\n        <div style=\"padding-top: 20px;\" *ngFor=\"let content of PageContent\">\n            <h5>1. Terms</h5>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <h5>2. User Licence</h5>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n            <p class=\"page-contents\"> {{content.text}} </p>\n\n            <div class=\"button-container\">\n                <ion-button fill=\"clear\" class=\"decline-button\">Decline</ion-button>\n                <ion-button class=\"accept-button\">Accept</ion-button>\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_terms-and-condition_terms-and-condition_module_ts.js.map