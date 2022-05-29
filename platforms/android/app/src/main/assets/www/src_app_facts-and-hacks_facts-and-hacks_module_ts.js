(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_facts-and-hacks_facts-and-hacks_module_ts"],{

/***/ 3845:
/*!*******************************************************************!*\
  !*** ./src/app/facts-and-hacks/facts-and-hacks-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksPageRoutingModule": () => (/* binding */ FactsAndHacksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _facts_and_hacks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facts-and-hacks.page */ 1423);




const routes = [
    {
        path: '',
        component: _facts_and_hacks_page__WEBPACK_IMPORTED_MODULE_0__.FactsAndHacksPage
    }
];
let FactsAndHacksPageRoutingModule = class FactsAndHacksPageRoutingModule {
};
FactsAndHacksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FactsAndHacksPageRoutingModule);



/***/ }),

/***/ 6206:
/*!***********************************************************!*\
  !*** ./src/app/facts-and-hacks/facts-and-hacks.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksPageModule": () => (/* binding */ FactsAndHacksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _facts_and_hacks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facts-and-hacks-routing.module */ 3845);
/* harmony import */ var _facts_and_hacks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facts-and-hacks.page */ 1423);







let FactsAndHacksPageModule = class FactsAndHacksPageModule {
};
FactsAndHacksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _facts_and_hacks_routing_module__WEBPACK_IMPORTED_MODULE_0__.FactsAndHacksPageRoutingModule
        ],
        declarations: [_facts_and_hacks_page__WEBPACK_IMPORTED_MODULE_1__.FactsAndHacksPage]
    })
], FactsAndHacksPageModule);



/***/ }),

/***/ 1423:
/*!*********************************************************!*\
  !*** ./src/app/facts-and-hacks/facts-and-hacks.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksPage": () => (/* binding */ FactsAndHacksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_facts_and_hacks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./facts-and-hacks.page.html */ 1170);
/* harmony import */ var _facts_and_hacks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facts-and-hacks.page.scss */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FactsAndHacksPage = class FactsAndHacksPage {
    constructor() { }
    ngOnInit() {
    }
};
FactsAndHacksPage.ctorParameters = () => [];
FactsAndHacksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-facts-and-hacks',
        template: _raw_loader_facts_and_hacks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_facts_and_hacks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FactsAndHacksPage);



/***/ }),

/***/ 639:
/*!***********************************************************!*\
  !*** ./src/app/facts-and-hacks/facts-and-hacks.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  height: -webkit-fill-available;\n  padding: 10px;\n}\n\nh4 {\n  margin: 15px;\n  font-weight: 600;\n}\n\np {\n  font-weight: 600;\n  color: black;\n  margin-left: 10px;\n  letter-spacing: 0.5px;\n}\n\nion-card {\n  border-radius: 20px;\n  padding: 30px 20px 20px 20px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px !important;\n}\n\nion-input {\n  --padding-bottom: 20px;\n}\n\nion-icon {\n  margin: 0px;\n  position: relative;\n  bottom: 5px;\n  left: 5px;\n}\n\n.media-icons-container {\n  color: black;\n  font-size: 25px;\n  margin-bottom: -10px;\n}\n\n.media-icons {\n  margin-right: 10px;\n  border: 1px solid grey;\n  padding: 4px;\n  border-radius: 5px;\n}\n\nion-item {\n  --placeholder-color: black;\n  font-weight: 600;\n  border: 0.5px solid #9e9e9ea6;\n  border-radius: 30px;\n  --padding-start: 15px;\n  margin-bottom: 15px;\n  height: 40px;\n}\n\n.upload-container {\n  border: 0.5px solid #9e9e9ea6;\n  height: 140px;\n  text-align: center;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n\n.paper-clip-icon {\n  font-size: 5rem;\n  color: #9e9e9ea6;\n  margin-top: 30px;\n}\n\n.submit-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n  width: 140px;\n  font-weight: 600;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RzLWFuZC1oYWNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0lBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGtFQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImZhY3RzLWFuZC1oYWNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EsICM5Yjk0ZDIpO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oNCB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxMHB4IDVweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDVweDtcbn1cblxuLm1lZGlhLWljb25zLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLm1lZGlhLWljb25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM5ZTllOWVhNjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnVwbG9hZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIzllOWU5ZWE2O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFwZXItY2xpcC1pY29uIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgY29sb3I6ICM5ZTllOWVhNjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOEZEQ0ZBIDEwJSwgIzEwQjBFRSA5MCUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ 1170:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facts-and-hacks/facts-and-hacks.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Facts and Hacks</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <h4>Add Facts and Hacks</h4>\n        <ion-card>\n\n            <ion-item lines=\"none\">\n                <ion-input placeholder=\"Title\"></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-input placeholder=\"DD/MM\"></ion-input>\n                <ion-icon name=\"calendar-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <p>Attach File</p>\n\n            <div class=\"media-icons-container\">\n                <ion-icon name=\"calendar-outline\" class=\"media-icons\"></ion-icon>\n                <ion-icon name=\"calendar-outline\" class=\"media-icons\"></ion-icon>\n                <ion-icon name=\"calendar-outline\" class=\"media-icons\"></ion-icon>\n            </div>\n\n            <div class=\"upload-container\">\n                <ion-icon name=\"document-attach-outline\" class=\"paper-clip-icon\"></ion-icon>\n            </div>\n\n            <div style=\"text-align: center;\">\n                <ion-button class=\"submit-button\" shape=\"round\">SUBMIT</ion-button>\n            </div>\n\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_facts-and-hacks_facts-and-hacks_module_ts.js.map