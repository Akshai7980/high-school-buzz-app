(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_birthday-shout-out-default_birthday-shout-out-default_module_ts"],{

/***/ 1989:
/*!*****************************************************************************************!*\
  !*** ./src/app/birthday-shout-out-default/birthday-shout-out-default-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutDefaultPageRoutingModule": () => (/* binding */ BirthdayShoutOutDefaultPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _birthday_shout_out_default_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-shout-out-default.page */ 9461);




const routes = [
    {
        path: '',
        component: _birthday_shout_out_default_page__WEBPACK_IMPORTED_MODULE_0__.BirthdayShoutOutDefaultPage
    }
];
let BirthdayShoutOutDefaultPageRoutingModule = class BirthdayShoutOutDefaultPageRoutingModule {
};
BirthdayShoutOutDefaultPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BirthdayShoutOutDefaultPageRoutingModule);



/***/ }),

/***/ 1636:
/*!*********************************************************************************!*\
  !*** ./src/app/birthday-shout-out-default/birthday-shout-out-default.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutDefaultPageModule": () => (/* binding */ BirthdayShoutOutDefaultPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _birthday_shout_out_default_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-shout-out-default-routing.module */ 1989);
/* harmony import */ var _birthday_shout_out_default_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-shout-out-default.page */ 9461);







let BirthdayShoutOutDefaultPageModule = class BirthdayShoutOutDefaultPageModule {
};
BirthdayShoutOutDefaultPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _birthday_shout_out_default_routing_module__WEBPACK_IMPORTED_MODULE_0__.BirthdayShoutOutDefaultPageRoutingModule
        ],
        declarations: [_birthday_shout_out_default_page__WEBPACK_IMPORTED_MODULE_1__.BirthdayShoutOutDefaultPage]
    })
], BirthdayShoutOutDefaultPageModule);



/***/ }),

/***/ 9461:
/*!*******************************************************************************!*\
  !*** ./src/app/birthday-shout-out-default/birthday-shout-out-default.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutDefaultPage": () => (/* binding */ BirthdayShoutOutDefaultPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_birthday_shout_out_default_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./birthday-shout-out-default.page.html */ 6412);
/* harmony import */ var _birthday_shout_out_default_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-shout-out-default.page.scss */ 5097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BirthdayShoutOutDefaultPage = class BirthdayShoutOutDefaultPage {
    constructor() {
        this.Celebrants = [];
    }
    ngOnInit() {
        this.Celebrants = [
            {
                profile_img: "../../assets/image/Sample_Images/1.jpeg",
                user_name: "James Daniel",
                Bday_wish: "Hey today is my birthday!",
                like_count: "20k",
                comment_count: "20k",
                wish_count: "20k"
            },
            {
                profile_img: "../../assets/image/Sample_Images/2.jpeg",
                user_name: "Daniel James",
                Bday_wish: "Hey today is my birthday!",
                like_count: "20k",
                comment_count: "20k",
                wish_count: "20k"
            },
            {
                profile_img: "../../assets/image/Sample_Images/3.jpeg",
                user_name: "James Daniel",
                Bday_wish: "Hey today is my birthday!",
                like_count: "20k",
                comment_count: "20k",
                wish_count: "20k"
            },
            {
                profile_img: "../../assets/image/Sample_Images/4.jpeg",
                user_name: "Daniel James",
                Bday_wish: "Hey today is my birthday!",
                like_count: "20k",
                comment_count: "20k",
                wish_count: "20k"
            },
        ];
        console.log('Celebrants:', this.Celebrants);
    }
};
BirthdayShoutOutDefaultPage.ctorParameters = () => [];
BirthdayShoutOutDefaultPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-birthday-shout-out-default',
        template: _raw_loader_birthday_shout_out_default_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_birthday_shout_out_default_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BirthdayShoutOutDefaultPage);



/***/ }),

/***/ 5097:
/*!*********************************************************************************!*\
  !*** ./src/app/birthday-shout-out-default/birthday-shout-out-default.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 15px;\n  background-repeat: round;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpcnRoZGF5LXNob3V0LW91dC1kZWZhdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoiYmlydGhkYXktc2hvdXQtb3V0LWRlZmF1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbn0iXX0= */");

/***/ }),

/***/ 6412:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthday-shout-out-default/birthday-shout-out-default.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Birthday Shout Out</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div style=\"display: flex; justify-content: space-between;\">\n            <ion-button shape=\"round\" size=\"small\" style=\"    --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n        position: relative;\nheight: 30px;\n        \">INVITES</ion-button>\n            <ion-searchbar animated mode=\"ios\" style=\"border: 1px solid lightgrey;\n        border-radius: 20px;\n        height: 34px;\n        position: relative;\ntop: 2px;\n        --background: white;\n        padding: 0px 0px 0px 40px;\"></ion-searchbar>\n            <ion-button shape=\"round\" size=\"small\" style=\"    --background: linear-gradient(to bottom, #F779BB 10%, #F14CA4 90%);\n        position: relative;\nheight: 30px;\n        \">INVITATIONS</ion-button>\n        </div>\n\n        <div style=\"margin-top: 35px;\">\n            <H4 style=\"font-family: 'Fredoka_One';\">Today's Celebrations</H4>\n\n            <div style=\"display: flex;\n      justify-content: space-around;\n      flex-wrap: wrap;\">\n                <div style=\"padding: 20px;\n          text-align: center;\n          border-radius: 20px;\n          margin-bottom: 15px;\n          border: .5px solid lightgrey;\" *ngFor=\"let celeb of Celebrants; let i = index;\">\n                    <img [src]=\"celeb.profile_img\" alt=\"\" style=\"height: 70px;\n              width: 70px;\n              object-fit: cover;\n              border-radius: 50%;\n              border: 1.5px solid #04ACED;\">\n                    <p style=\"margin: 0px;\n              font-family: Fredoka_One;\n              color: #2B3238;\"> {{celeb.user_name}} </p>\n                    <p style=\"margin: 0px;\n              color: grey;\n              font-style: oblique;\n              font-size: 12px;\"> {{celeb.Bday_wish}} </p>\n\n                    <div style=\"display: flex; margin-top: 8px;\">\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.like_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.comment_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.wish_count}} </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div style=\"margin-top: 20px; text-align: center;\">\n            <H5 style=\"font-family: 'Fredoka_One'; color: #00ADF1;\">PAST CELEBRATIONS</H5>\n\n            <div style=\"display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\">\n                <div style=\"padding: 20px;\n        text-align: center;\n        border-radius: 20px;\n        margin-bottom: 15px;\n        border: .5px solid lightgrey;\" *ngFor=\"let celeb of Celebrants; let i = index;\">\n                    <img [src]=\"celeb.profile_img\" alt=\"\" style=\"height: 70px;\n            width: 70px;\n            object-fit: cover;\n            border-radius: 50%;\n            border: 1.5px solid #04ACED;\">\n                    <p style=\"margin: 0px;\n            font-family: Fredoka_One;\n            color: #2B3238;\"> {{celeb.user_name}} </p>\n                    <p style=\"margin: 0px;\n            color: grey;\n            font-style: oblique;\n            font-size: 12px;\"> {{celeb.Bday_wish}} </p>\n\n                    <div style=\"display: flex; margin-top: 8px;\">\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.like_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.comment_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.wish_count}} </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div style=\"margin-top: 20px; text-align: center;\">\n            <H5 style=\"font-family: 'Fredoka_One'; color: #00ADF1;\">UPCOMING CELEBRATIONS</H5>\n\n            <div style=\"display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\">\n                <div style=\"padding: 20px;\n      text-align: center;\n      border-radius: 20px;\n      margin-bottom: 15px;\n      border: .5px solid lightgrey;\" *ngFor=\"let celeb of Celebrants; let i = index;\">\n                    <img [src]=\"celeb.profile_img\" alt=\"\" style=\"height: 70px;\n          width: 70px;\n          object-fit: cover;\n          border-radius: 50%;\n          border: 1.5px solid #04ACED;\">\n                    <p style=\"margin: 0px;\n          font-family: Fredoka_One;\n          color: #2B3238;\"> {{celeb.user_name}} </p>\n                    <p style=\"margin: 0px;\n          color: grey;\n          font-style: oblique;\n          font-size: 12px;\"> {{celeb.Bday_wish}} </p>\n\n                    <div style=\"display: flex; margin-top: 8px;\">\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.like_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.comment_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.wish_count}} </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_birthday-shout-out-default_birthday-shout-out-default_module_ts.js.map