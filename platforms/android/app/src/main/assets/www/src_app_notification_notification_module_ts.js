(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 9753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 3320);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 2154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 9753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 3320);







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 3320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.page.html */ 9034);
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss */ 1435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let NotificationPage = class NotificationPage {
    constructor() {
        this.Notifications = [];
    }
    ngOnInit() {
        this.Notifications = [
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
            {
                time: "Today, 11:44 pm",
                text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving",
                sub_text: "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving"
            },
        ];
    }
};
NotificationPage.ctorParameters = () => [];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationPage);



/***/ }),

/***/ 1435:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca , #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 20px;\n}\n\n.looping-sub-container {\n  display: flex;\n  border-bottom: 0.5px solid #9e9e9e80;\n  padding: 10px 0px 15px 0px;\n}\n\np {\n  font-size: 10px;\n}\n\nspan {\n  color: grey;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBS0oiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhhODRjYSAsICM5Yjk0ZDIpO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmxvb3Bpbmctc3ViLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkICM5ZTllOWU4MDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxNXB4IDBweFxufVxucCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuc3BhbiB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xufSJdfQ== */");

/***/ }),

/***/ 9034:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Notification</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <div class=\"looping-sub-container\" *ngFor=\"let notch of Notifications\">\n            <div style=\"width: 25%; margin-right: 20px;\">\n                <img src=\"../../assets/image/msg1.png\" alt=\"\">\n            </div>\n            <div>\n                <p> {{notch.time}} </p>\n                <h6> {{notch.text}} </h6>\n                <span> {{notch.sub_text}} </span>\n            </div>\n        </div>\n    </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map