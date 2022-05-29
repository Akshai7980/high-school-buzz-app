(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_contact-us_contact-us_module_ts"],{

/***/ 2294:
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 1432);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 3648:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 2294);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 1432);







let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 1432:
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.page.html */ 420);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 6926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactUsPage);



/***/ }),

/***/ 6926:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-img-container {\n  background: url('contact-bg.jpg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 415px;\n  background-position: unset;\n}\n\n.contact-detail-card {\n  margin: 0px 25px 25px 25px;\n  border-radius: 7px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 15px 5px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px !important;\n}\n\n.card-top-container {\n  display: flex;\n  height: 80px;\n  justify-content: space-between;\n  padding: 25px 10px 10px 10px;\n  background-color: #FFEBF6;\n}\n\n.card-top-sub-container {\n  padding: 10px;\n  font-size: 20px;\n}\n\n.card-top-container-heading-text {\n  margin: 0px;\n  color: #666666;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n\n.card-top-container-info {\n  margin: 0px;\n  color: #F24AA2;\n  letter-spacing: 1px;\n}\n\n.input-container {\n  padding: 20px 20px 60px 20px;\n}\n\n.input-field {\n  border-bottom: 0.5px solid lightgrey;\n  --placeholder-color: black;\n  --placeholder-weight: 500 ;\n}\n\n.send-img-button {\n  height: 65px;\n  position: relative;\n  bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0lBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvY29udGFjdC1iZy5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNDE1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG59XG5cbi5jb250YWN0LWRldGFpbC1jYXJkIHtcbiAgICBtYXJnaW46IDBweCAyNXB4IDI1cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDE1cHggNXB4LCByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggMXB4IDVweCAhaW1wb3J0YW50XG59XG5cbi5jYXJkLXRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVCRjY7XG59XG5cbi5jYXJkLXRvcC1zdWItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmQtdG9wLWNvbnRhaW5lci1oZWFkaW5nLXRleHQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQtdG9wLWNvbnRhaW5lci1pbmZvIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI0YyNEFBMjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweCAyMHB4O1xufVxuXG4uaW5wdXQtZmllbGQge1xuICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgbGlnaHRncmV5O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAgIC0tcGxhY2Vob2xkZXItd2VpZ2h0OiA1MDBcbn1cblxuLnNlbmQtaW1nLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDYwcHg7XG59Il19 */");

/***/ }),

/***/ 420:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <!-- <ion-toolbar> -->\n    <div class=\"header-img-container\">\n        <div style=\"display: flex;\">\n            <!-- <div> -->\n            <ion-buttons slot=\"start\">\n                <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n            </ion-buttons>\n            <!-- </div> -->\n\n            <!-- <div> -->\n            <ion-title>Contact Us</ion-title>\n            <!-- </div> -->\n        </div>\n    </div>\n    <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"has-header\">\n\n    <div>\n        <ion-card class=\"contact-detail-card\">\n            <div class=\"card-top-container\">\n\n                <div style=\"display: flex;\">\n                    <div class=\"card-top-sub-container\">\n                        <!-- <ion-icon name=\"mail\" style=\"color: #F24AA2;\"></ion-icon> -->\n                        <img src=\"../../assets/image/contact-email.png\" alt=\"\" style=\"height: 16px;\">\n                    </div>\n\n                    <div>\n                        <p class=\"card-top-container-heading-text\">Email</p>\n                        <p class=\"card-top-container-info\">info@hsb.com</p>\n                    </div>\n                </div>\n\n                <div style=\"display: flex;\">\n                    <div class=\"card-top-sub-container\">\n                        <!-- <ion-icon name=\"mail\" style=\"color: #F24AA2;\"></ion-icon> -->\n                        <img src=\"../../assets/image/contact-phone.png\" alt=\"\" style=\"height: 25px;\">\n                    </div>\n\n                    <div>\n                        <p class=\"card-top-container-heading-text\">Phone</p>\n                        <p class=\"card-top-container-info\">+91 9897969594</p>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"input-container\">\n\n                <ion-input placeholder=\"Name\" type=\"text\" autocapitalize=\"true\" class=\"input-field\"></ion-input>\n                <ion-input placeholder=\"Email\" type=\"email\" autocapitalize=\"true\" style=\"margin-top: 15px;\" class=\"input-field\"></ion-input>\n                <ion-textarea placeholder=\"Message\" type=\"text\" autocapitalize=\"true\" autoGrow=\"true\" style=\"margin-top: 15px;\" class=\"input-field\"></ion-textarea>\n\n            </div>\n\n        </ion-card>\n\n        <div style=\"text-align: center;\">\n            <img src=\"../../assets/image/contact-sent.png\" alt=\"\" class=\"send-img-button\">\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contact-us_contact-us_module_ts.js.map