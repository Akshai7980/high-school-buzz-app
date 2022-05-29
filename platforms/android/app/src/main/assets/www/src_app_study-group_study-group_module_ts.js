(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_study-group_study-group_module_ts"],{

/***/ 3797:
/*!***********************************************************!*\
  !*** ./src/app/study-group/study-group-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupPageRoutingModule": () => (/* binding */ StudyGroupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _study_group_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-group.page */ 4589);




const routes = [
    {
        path: '',
        component: _study_group_page__WEBPACK_IMPORTED_MODULE_0__.StudyGroupPage
    }
];
let StudyGroupPageRoutingModule = class StudyGroupPageRoutingModule {
};
StudyGroupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudyGroupPageRoutingModule);



/***/ }),

/***/ 7059:
/*!***************************************************!*\
  !*** ./src/app/study-group/study-group.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupPageModule": () => (/* binding */ StudyGroupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _study_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-group-routing.module */ 3797);
/* harmony import */ var _study_group_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-group.page */ 4589);







let StudyGroupPageModule = class StudyGroupPageModule {
};
StudyGroupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _study_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyGroupPageRoutingModule
        ],
        declarations: [_study_group_page__WEBPACK_IMPORTED_MODULE_1__.StudyGroupPage]
    })
], StudyGroupPageModule);



/***/ }),

/***/ 4589:
/*!*************************************************!*\
  !*** ./src/app/study-group/study-group.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupPage": () => (/* binding */ StudyGroupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_study_group_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./study-group.page.html */ 189);
/* harmony import */ var _study_group_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-group.page.scss */ 3053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StudyGroupPage = class StudyGroupPage {
    constructor() { }
    ngOnInit() {
    }
};
StudyGroupPage.ctorParameters = () => [];
StudyGroupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-study-group',
        template: _raw_loader_study_group_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_study_group_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudyGroupPage);



/***/ }),

/***/ 3053:
/*!***************************************************!*\
  !*** ./src/app/study-group/study-group.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  height: -webkit-fill-available;\n  padding: 10px;\n}\n\nh4 {\n  font-weight: 600;\n  margin-left: 10px;\n}\n\nion-input {\n  --placeholder-color: black;\n  font-weight: 600;\n  border: 0.5px solid #9e9e9ea6;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 15px;\n}\n\nion-textarea {\n  --placeholder-color: black;\n  font-weight: 600;\n  border: 0.5px solid #9e9e9ea6;\n  border-radius: 15px;\n  --padding-start: 15px;\n  margin-bottom: 15px;\n  height: 125px;\n}\n\n.invite-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n  width: 150px;\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LWdyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esa0VBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3R1ZHktZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM5ZTllOWVhNjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjOWU5ZTllYTY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xufVxuXG4uaW52aXRlLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOEZEQ0ZBIDEwJSwgIzEwQjBFRSA5MCUpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ 189:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/study-group/study-group.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Study Group</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <h4> Create Study Group </h4>\n\n        <ion-input placeholder=\"Group Name\" type=\"text\" autocapitalize=\"true\"></ion-input>\n\n        <ion-textarea placeholder=\"Additional Information\" type=\"text\" autocapitalize=\"true\" autoGrow=\"true\"></ion-textarea>\n        <ion-textarea placeholder=\"Group Rules\" type=\"text\" autocapitalize=\"true\" autoGrow=\"true\"></ion-textarea>\n\n        <div style=\"text-align: center\">\n            <ion-button shape=\"round\" class=\"invite-button\">Invite</ion-button>\n\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_study-group_study-group_module_ts.js.map