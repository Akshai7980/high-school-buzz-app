(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_contest-expired_contest-expired_module_ts"],{

/***/ 5517:
/*!*******************************************************************!*\
  !*** ./src/app/contest-expired/contest-expired-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestExpiredPageRoutingModule": () => (/* binding */ ContestExpiredPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contest_expired_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contest-expired.page */ 3294);




const routes = [
    {
        path: '',
        component: _contest_expired_page__WEBPACK_IMPORTED_MODULE_0__.ContestExpiredPage
    }
];
let ContestExpiredPageRoutingModule = class ContestExpiredPageRoutingModule {
};
ContestExpiredPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContestExpiredPageRoutingModule);



/***/ }),

/***/ 799:
/*!***********************************************************!*\
  !*** ./src/app/contest-expired/contest-expired.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestExpiredPageModule": () => (/* binding */ ContestExpiredPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contest_expired_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contest-expired-routing.module */ 5517);
/* harmony import */ var _contest_expired_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contest-expired.page */ 3294);







let ContestExpiredPageModule = class ContestExpiredPageModule {
};
ContestExpiredPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contest_expired_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContestExpiredPageRoutingModule
        ],
        declarations: [_contest_expired_page__WEBPACK_IMPORTED_MODULE_1__.ContestExpiredPage]
    })
], ContestExpiredPageModule);



/***/ }),

/***/ 3294:
/*!*********************************************************!*\
  !*** ./src/app/contest-expired/contest-expired.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestExpiredPage": () => (/* binding */ ContestExpiredPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contest_expired_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contest-expired.page.html */ 5121);
/* harmony import */ var _contest_expired_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contest-expired.page.scss */ 6423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ContestExpiredPage = class ContestExpiredPage {
    constructor() {
        this.ContestDetails = [];
        this.TopPlayers = [];
        this.Winner = [];
    }
    ngOnInit() {
        this.ContestDetails = [
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                end_date: "Expired",
                contest_caption: "Vestibulum ateleifend diam",
                contest_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
                votes_count: "10k",
                participants_count: "5k",
                contest_status: "Expired"
            }
        ];
        console.log('ContestDetails:', this.ContestDetails);
        this.Winner = [
            {
                user_name: "Andriya James",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                votes: "800",
                comments: "4.5k",
            }
        ];
        console.log('Winner:', this.Winner);
        this.TopPlayers = [
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                comments: "2k",
                votes: "800"
            },
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                comments: "2k",
                votes: "800"
            },
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                comments: "2k",
                votes: "800"
            },
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                comments: "2k",
                votes: "800"
            },
            {
                user_name: "Kyle Hoffman",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                school: "St.Joseph School",
                comments: "2k",
                votes: "800"
            }
        ];
        console.log('TopPlayers:', this.TopPlayers);
    }
};
ContestExpiredPage.ctorParameters = () => [];
ContestExpiredPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contest-expired',
        template: _raw_loader_contest_expired_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contest_expired_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContestExpiredPage);



/***/ }),

/***/ 6423:
/*!***********************************************************!*\
  !*** ./src/app/contest-expired/contest-expired.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  border-radius: 25px 25px 0px 0px;\n  background: #F4F7FF;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlc3QtZXhwaXJlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJjb250ZXN0LWV4cGlyZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGN0ZGO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ 5121:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contest-expired/contest-expired.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Contest</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <ion-card style=\"padding: 10px; border-radius: 10px; box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px 2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px !important\" *ngIf=\"ContestDetails!=''\">\n            <div style=\"display: flex;\n          justify-content: space-between;\n          align-items: center;\">\n\n                <div style=\"display: flex;\n            align-items: center;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 35px;\n                margin-right: 8px;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                margin-right: 5px;\">\n                    <span style=\"font-family: 'PT_Sans_Bold';\n                color: #03AAEE;\">{{ContestDetails[0].end_date}}</span>\n                </div>\n\n                <div style=\"display: flex;\">\n                    <div>\n                        <p style=\"margin: 0px;\n                  color: black;\n                  font-family: 'PT_Sans_Bold';\n                  letter-spacing: 1px;\"> {{ContestDetails[0].user_name}} </p>\n                        <p style=\"margin: 0px;\n                      font-size: 11px;\n                      letter-spacing: .5px;\n                      font-family: PT_Sans_Regular;\n                      float: right;\">{{ContestDetails[0].school}}</p>\n                    </div>\n\n                    <div>\n                        <img [src]=\"ContestDetails[0].profile_pic\" alt=\"\" style=\"border-radius: 50%;\n                      height: 40px;\n                      width: 40px;\n                      object-fit: cover;\n                      border: 2px solid #9e9e9e;\n                      margin-left: 5px;\">\n                    </div>\n                </div>\n\n            </div>\n\n            <H3 style=\"margin: 16px 0px 0px 0px;\n          font-family: 'Fredoka_One';\n          color: black;\n      \">{{ContestDetails[0].contest_caption}}</H3>\n\n            <ion-card-content style=\"font-family: 'PT_Sans_Regular';\n          font-size: 12px;\n          letter-spacing: .5px;\">\n                {{ContestDetails[0].contest_description}}\n            </ion-card-content>\n\n            <div style=\"display: flex;\n          justify-content: space-evenly;\">\n                <div style=\"align-items: center;\n              display: flex;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 25px; margin-right: 5px;\"> <span style=\"font-family: 'PT_Sans_Regular';\n                  font-size: 12px;\n                  letter-spacing: .5px;\">{{ContestDetails[0].votes_count}} Votes</span>\n                </div>\n\n                <div style=\"align-items: center;\n              display: flex;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 25px; margin-right: 5px;\"> <span style=\"font-family: 'PT_Sans_Regular';\n                  font-size: 12px;\n                  letter-spacing: .5px;\">{{ContestDetails[0].participants_count}} Participants</span>\n                </div>\n\n                <div style=\"align-items: center;\n              display: flex;\">\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 25px; margin-right: 5px;\"> <span style=\"font-family: 'PT_Sans_Regular';\n                  font-size: 12px;\n                  letter-spacing: .5px;\">{{ContestDetails[0].contest_status}}</span>\n                </div>\n\n            </div>\n\n            <div style=\"margin-top: 20px;\">\n                <img src=\"../../assets/image/badge.png\" alt=\"\" style=\"height: 35px;\">\n                <div *ngIf=\"Winner!=''\" style=\"display: flex;\n                justify-content: space-between;\n                align-items: center;\">\n                    <div style=\"display: flex;\">\n                        <div style=\"margin-right: 10px;\">\n                            <img [src]=\"Winner[0].profile_pic\" alt=\"\" style=\"height: 70px;\n                      width: 70px;\n                      object-fit: cover;\n                      border-radius: 50%;\n                      border: 1.5px solid #0badee;\">\n                        </div>\n\n                        <div>\n                            <p style=\"margin: 0px; font-family: Fredoka_One; color: black;\"> {{Winner[0].user_name}} </p>\n                            <p style=\"margin: 0px; font-family: PT_Sans_Regular; font-size: 12px;\"> {{Winner[0].school}} </p>\n\n                            <div style=\"display: flex; align-items: center; margin-top: 10px; \">\n                                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 25px;\"> <span style=\"font-family: 'PT_Sans_Bold'; margin-left: 5px;\"> {{Winner[0].comments}} </span>\n                                <span style=\"font-family: 'PT_Sans_Bold';\n                          color: #03aaee; margin-left: 8px;\"> {{Winner[0].votes}} </span> <span style=\"font-family: 'PT_Sans_Bold';\n  color: #03aaee; margin-left: 5px;\">Votes</span>\n\n                            </div>\n                        </div>\n                    </div>\n\n                    <div style=\"align-items: center;\n                    display: flex;\">\n                        <img [src]=\"Winner[0].profile_pic\" alt=\"\" style=\"height: 45px;\n                        width: 51px;\n                        object-fit: cover;\n                        position: absolute;\n                        right: 29px;\n                        top: 79%;\n                        transform: rotate(1deg);\">\n                        <img src=\"../../assets/image/frame.png\" alt=\"\" style=\"height: 90px;\">\n                    </div>\n                </div>\n\n            </div>\n\n            <div style=\"text-align: center; margin-top: 15px;\" *ngIf=\"ContestDetails[0].contest_status === 'Ongoing'\">\n                <ion-button style=\"text-transform: none;\n              --background: linear-gradient(to bottom, #f779bbb0 10%, #F14CA4 70%);\n              font-family: 'PT_Sans_Bold';\n              font-weight: 600;\n              --padding-start: 30px;\n              --padding-end: 30px;\" shape=\"round\">Join Now</ion-button>\n            </div>\n        </ion-card>\n\n        <div style=\"display: flex;\n      justify-content: space-between;\n      margin-top: 23px;\">\n            <H4 style=\"font-family: 'Fredoka_One';\n          margin: 0px;\">Top Players</H4>\n            <ion-searchbar placeholder=\"\" mode=\"ios\" style=\"border-radius: 30px;\n          height: 30px;\n          border: 1px solid grey;\n          width: 145px;\n          --background: transparent;\" *ngIf=\"ContestDetails[0].contest_status === 'Ongoing' \"></ion-searchbar>\n        </div>\n\n        <ion-card style=\"display: flex;\n      align-items: center;\n      justify-content: space-around;\n      border-radius: 10px;\n      padding: 8px 0px 8px 0px;\n      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px 1px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px !important\" *ngFor=\"let players of TopPlayers; let i = index;\">\n            <div style=\"display: flex;\n          align-items: center;\">\n                <H1 style=\"color: #03ACEF;\n              font-family: 'PT_Sans_Bold';\">#{{i+1}}</H1>\n            </div>\n\n            <div style=\"display: flex;\n          align-items: center;\">\n                <div>\n                    <img [src]=\"players.profile_pic\" alt=\"\" style=\"height: 40px;\n                  width: 40px;\n                  object-fit: cover;\n                  border-radius: 50%;\n                  border: 2px solid #03ACEF;\n                  margin-right: 5px;\">\n                </div>\n\n                <div>\n                    <p style=\"margin: 0px;\n                  color: black;\n                  font-family: 'Fredoka_One';\n                  font-size: 15px;\"> {{players.user_name}} </p>\n                    <p style=\"margin: 0px;\n                  font-size: 12px;\n                  font-family: 'PT_Sans_Regular';\"> {{players.school}} </p>\n                </div>\n\n            </div>\n\n            <div style=\"align-items: center;\n          display: flex;\">\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 23px; margin-right: 5px;\"> <span style=\"color: black;\n              font-family: 'PT_Sans_Regular';\n              font-size: 12px;\"> {{players.comments}} </span>\n            </div>\n\n            <div>\n                <H1 style=\"margin: 0px;\n              color: #04ADF0;\n              font-family: 'PT_Sans_Bold';\n              font-size: 17px;\"> {{players.votes}} </H1>\n                <p style=\"margin: 0px;\n              font-family: 'PT_Sans_Regular';\">VOTES</p>\n            </div>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contest-expired_contest-expired_module_ts.js.map