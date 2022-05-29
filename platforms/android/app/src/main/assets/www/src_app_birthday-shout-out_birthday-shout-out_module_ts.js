(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_birthday-shout-out_birthday-shout-out_module_ts"],{

/***/ 9816:
/*!*************************************************************************!*\
  !*** ./src/app/birthday-shout-out/birthday-shout-out-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutPageRoutingModule": () => (/* binding */ BirthdayShoutOutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _birthday_shout_out_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-shout-out.page */ 3573);




const routes = [
    {
        path: '',
        component: _birthday_shout_out_page__WEBPACK_IMPORTED_MODULE_0__.BirthdayShoutOutPage
    }
];
let BirthdayShoutOutPageRoutingModule = class BirthdayShoutOutPageRoutingModule {
};
BirthdayShoutOutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BirthdayShoutOutPageRoutingModule);



/***/ }),

/***/ 4399:
/*!*****************************************************************!*\
  !*** ./src/app/birthday-shout-out/birthday-shout-out.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutPageModule": () => (/* binding */ BirthdayShoutOutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _birthday_shout_out_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birthday-shout-out-routing.module */ 9816);
/* harmony import */ var _birthday_shout_out_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-shout-out.page */ 3573);







let BirthdayShoutOutPageModule = class BirthdayShoutOutPageModule {
};
BirthdayShoutOutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _birthday_shout_out_routing_module__WEBPACK_IMPORTED_MODULE_0__.BirthdayShoutOutPageRoutingModule
        ],
        declarations: [_birthday_shout_out_page__WEBPACK_IMPORTED_MODULE_1__.BirthdayShoutOutPage]
    })
], BirthdayShoutOutPageModule);



/***/ }),

/***/ 3573:
/*!***************************************************************!*\
  !*** ./src/app/birthday-shout-out/birthday-shout-out.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayShoutOutPage": () => (/* binding */ BirthdayShoutOutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_birthday_shout_out_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./birthday-shout-out.page.html */ 7239);
/* harmony import */ var _birthday_shout_out_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./birthday-shout-out.page.scss */ 1372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BirthdayShoutOutPage = class BirthdayShoutOutPage {
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
BirthdayShoutOutPage.ctorParameters = () => [];
BirthdayShoutOutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-birthday-shout-out',
        template: _raw_loader_birthday_shout_out_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_birthday_shout_out_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BirthdayShoutOutPage);



/***/ }),

/***/ 1372:
/*!*****************************************************************!*\
  !*** ./src/app/birthday-shout-out/birthday-shout-out.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpcnRoZGF5LXNob3V0LW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJiaXJ0aGRheS1zaG91dC1vdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 7239:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/birthday-shout-out/birthday-shout-out.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Birthday Shout Out</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div style=\"display: flex; justify-content: space-between;\">\n            <ion-button shape=\"round\" size=\"small\" style=\"    --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n            position: relative;\n    height: 30px;\n            \">INVITES</ion-button>\n            <ion-searchbar animated mode=\"ios\" style=\"border: 1px solid lightgrey;\n            border-radius: 20px;\n            height: 34px;\n            position: relative;\n    top: 2px;\n            --background: white;\n            padding: 0px 0px 0px 40px;\"></ion-searchbar>\n            <ion-button shape=\"round\" size=\"small\" style=\"    --background: linear-gradient(to bottom, #F779BB 10%, #F14CA4 90%);\n            position: relative;\n    height: 30px;\n            \">INVITATIONS</ion-button>\n        </div>\n\n        <div style=\"text-align: center;\">\n            <ion-card style=\"margin-top: 15px; text-align: center; justify-content: center; padding: 10px 0px 25px 0px; border-radius: 10px; box-shadow: rgb(0 0 0 / 20%) 0px 3px 10px 3px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5p !important;\">\n                <img src=\"../../assets/image/Sample_Images/1.jpeg\" alt=\"\" style=\"height: 85px;\n                border-radius: 50%;\n                width: 85px;\n                object-fit: cover;\n                border: 2px solid #10b0ee;\">\n                <H2 style=\"color: #04ACED; font-family: Fredoka_One; margin: 5px;\">Victor</H2>\n                <H2 style=\"color: #333333; font-family: Fredoka_One; margin: 5px;\">Happy Birthday Victor!</H2>\n            </ion-card>\n            <ion-button shape=\"round\" size=\"small\" style=\"position: relative;\n            bottom: 26px;\n            --background: linear-gradient(to left, #BE5FB1 10%, #10B0EE 90%);\n            height: 35px;\n            --padding-end: 15px;\n            --padding-start: 15px;\n            font-family: 'Fredoka_One';\n            text-transform: none;\">\n                <ion-icon name=\"add\"></ion-icon>\n                Upload Album\n            </ion-button>\n        </div>\n\n        <div>\n            <ion-textarea placeholder=\"Enter Comments\" style=\"border: 0.5px solid lightgrey; border-radius: 10px;\"></ion-textarea>\n            <ion-button shape=\"round\" size=\"small\" fill=\"outline\" style=\"float: right;\n            --color: #10b0ee;\n            --border-color: #10b0ee;\n            --padding-start: 20px;\n            margin-top: 10px;\n            --padding-end: 20px;\">SEND</ion-button>\n        </div>\n\n        <div style=\"margin-top: 35px;\">\n            <H4 style=\"font-family: 'Fredoka_One';\">Co-Celebrants</H4>\n\n            <div style=\"display: flex;\n            justify-content: space-around;\n            flex-wrap: wrap;\">\n                <div style=\"padding: 20px;\n                text-align: center;\n                border-radius: 20px;\n                margin-bottom: 15px;\n                border: .5px solid lightgrey;\" *ngFor=\"let celeb of Celebrants; let i = index;\">\n                    <img [src]=\"celeb.profile_img\" alt=\"\" style=\"height: 70px;\n                    width: 70px;\n                    object-fit: cover;\n                    border-radius: 50%;\n                    border: 1.5px solid #04ACED;\">\n                    <p style=\"margin: 0px;\n                    font-family: Fredoka_One;\n                    color: #2B3238;\"> {{celeb.user_name}} </p>\n                    <p style=\"margin: 0px;\n                    color: grey;\n                    font-style: oblique;\n                    font-size: 12px;\"> {{celeb.Bday_wish}} </p>\n\n                    <div style=\"display: flex; margin-top: 8px;\">\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.like_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.comment_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" style=\"height:20px;\"> <span style=\"font-size: 12px;\"> {{celeb.wish_count}} </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_birthday-shout-out_birthday-shout-out_module_ts.js.map