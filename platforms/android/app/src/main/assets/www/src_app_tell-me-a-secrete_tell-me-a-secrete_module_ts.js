(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_tell-me-a-secrete_tell-me-a-secrete_module_ts"],{

/***/ 5515:
/*!***********************************************************************!*\
  !*** ./src/app/tell-me-a-secrete/tell-me-a-secrete-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecretePageRoutingModule": () => (/* binding */ TellMeASecretePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tell_me_a_secrete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tell-me-a-secrete.page */ 228);




const routes = [
    {
        path: '',
        component: _tell_me_a_secrete_page__WEBPACK_IMPORTED_MODULE_0__.TellMeASecretePage
    }
];
let TellMeASecretePageRoutingModule = class TellMeASecretePageRoutingModule {
};
TellMeASecretePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TellMeASecretePageRoutingModule);



/***/ }),

/***/ 6073:
/*!***************************************************************!*\
  !*** ./src/app/tell-me-a-secrete/tell-me-a-secrete.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecretePageModule": () => (/* binding */ TellMeASecretePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tell_me_a_secrete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tell-me-a-secrete-routing.module */ 5515);
/* harmony import */ var _tell_me_a_secrete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tell-me-a-secrete.page */ 228);







let TellMeASecretePageModule = class TellMeASecretePageModule {
};
TellMeASecretePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tell_me_a_secrete_routing_module__WEBPACK_IMPORTED_MODULE_0__.TellMeASecretePageRoutingModule
        ],
        declarations: [_tell_me_a_secrete_page__WEBPACK_IMPORTED_MODULE_1__.TellMeASecretePage]
    })
], TellMeASecretePageModule);



/***/ }),

/***/ 228:
/*!*************************************************************!*\
  !*** ./src/app/tell-me-a-secrete/tell-me-a-secrete.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecretePage": () => (/* binding */ TellMeASecretePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tell_me_a_secrete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tell-me-a-secrete.page.html */ 8822);
/* harmony import */ var _tell_me_a_secrete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tell-me-a-secrete.page.scss */ 9615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/common.service */ 5620);





let TellMeASecretePage = class TellMeASecretePage {
    constructor(common) {
        this.common = common;
        this.secrete = '';
        this.isToggled = {};
    }
    ngOnInit() {
        console.log('secrete:', this.secrete);
    }
    ToProceed() {
        if (this.secrete != '' && this.secrete != undefined) {
            this.secrete = '';
            console.log('secrete:', this.secrete);
        }
        else {
            this.common.showAlertFailed('Please enter your secrete and click <strong> PROCEED </strong> .');
        }
    }
    MediaIcons(cat) {
        console.log('Category:', cat);
    }
    ToggleSubmit(type, i) {
        console.log("Toggled: " + type + this.isToggled[i], i);
    }
    ToEnterSubmission() {
    }
};
TellMeASecretePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
TellMeASecretePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tell-me-a-secrete',
        template: _raw_loader_tell_me_a_secrete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tell_me_a_secrete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TellMeASecretePage);



/***/ }),

/***/ 9615:
/*!***************************************************************!*\
  !*** ./src/app/tell-me-a-secrete/tell-me-a-secrete.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-image: url('tell-me-bg.png');\n  border-radius: 25px 25px 0px 0px;\n  padding: 10px;\n  background-repeat: round;\n  height: -webkit-fill-available;\n}\n\nion-item {\n  --background: transparent ;\n}\n\nH2 {\n  color: white;\n  font-weight: 600;\n}\n\nion-card {\n  margin-top: 20px;\n  border-radius: 15px;\n  padding: 5px;\n}\n\n.card-bottom-small-icons {\n  height: 35px;\n  margin-right: 10px;\n}\n\n.proceed-button {\n  --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n  width: 150px;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.toggle-container {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.enter-button {\n  --background: linear-gradient(to bottom, #F779BB 10%, #F14CA4 90%);\n  width: 150px;\n  font-weight: 600;\n  font-size: 16px;\n  height: 40px;\n  margin-top: 30px;\n}\n\n.toggle-text {\n  font-weight: 600;\n}\n\nion-toggle {\n  --background: #F14CA4;\n  --background-checked: #10B0EE;\n  --handle-background: #F779BB;\n  --handle-background-checked: #8FDCFA;\n  height: 27px;\n  width: 55px;\n  --handle-spacing: 5px;\n  --handle-height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGwtbWUtYS1zZWNyZXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtFQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0VBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJ0ZWxsLW1lLWEtc2VjcmV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EsICM5Yjk0ZDIpO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvdGVsbC1tZS1iZy5wbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbn1cblxuSDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNhcmQtYm90dG9tLXNtYWxsLWljb25zIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvY2VlZC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhGRENGQSAxMCUsICMxMEIwRUUgOTAlKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50b2dnbGUtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmVudGVyLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjc3OUJCIDEwJSwgI0YxNENBNCA5MCUpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRvZ2dsZS10ZXh0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGMTRDQTQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxMEIwRUU7XG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI0Y3NzlCQjtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4RkRDRkE7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIC0taGFuZGxlLXNwYWNpbmc6IDVweDtcbiAgICAtLWhhbmRsZS1oZWlnaHQ6IDcwJTtcbn0iXX0= */");

/***/ }),

/***/ 8822:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tell-me-a-secrete/tell-me-a-secrete.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Tell Me a Secrete</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div style=\"text-align: center;\">\n\n            <ion-item lines=\"none\">\n                <img src=\"../../assets/image/btn.png\" alt=\"\" slot=\"start\" style=\"height: 35px\">\n            </ion-item>\n            <H2>Enter your Secrete</H2>\n\n            <ion-card>\n                <ion-card-content>\n                    <ion-textarea type=\"text\" [(ngModel)]=\"secrete\" autocapitalize=\"true\" autoGrow=\"true\"></ion-textarea>\n                </ion-card-content>\n                <div style=\"float: right;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" class=\"card-bottom-small-icons\" (click)=\"MediaIcons('image')\">\n                    <img src=\"../../assets/image/img2.png\" alt=\"\" class=\"card-bottom-small-icons\" (click)=\"MediaIcons('video')\">\n                    <img src=\"../../assets/image/img3.png\" alt=\"\" class=\"card-bottom-small-icons\" (click)=\"MediaIcons('audio')\">\n                </div>\n\n            </ion-card>\n\n            <ion-button shape=\"round\" class=\"proceed-button\" (click)=\"ToProceed()\"> PROCEED </ion-button>\n        </div>\n\n        <div class=\"toggle-container\">\n            <ion-item lines=\"none\">\n                <H5 slot=\"start\" class=\"toggle-text\"> Make My Secrete Public </H5>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"isToggled[0]\" (ionChange)=\"ToggleSubmit('secrete-public', 0)\"></ion-toggle>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <H5 slot=\"start\" class=\"toggle-text\"> Reveal My Identity </H5>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"isToggled[1]\" (ionChange)=\"ToggleSubmit('reveal-identity', 1)\"></ion-toggle>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <H5 slot=\"start\" class=\"toggle-text\"> Talk to a Counsellor </H5>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"isToggled[2]\" (ionChange)=\"ToggleSubmit('talk-counsellor', 2)\"></ion-toggle>\n            </ion-item>\n\n            <ion-button shape=\"round\" class=\"enter-button\" (click)=\"ToEnterSubmission()\"> ENTER </ion-button>\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tell-me-a-secrete_tell-me-a-secrete_module_ts.js.map