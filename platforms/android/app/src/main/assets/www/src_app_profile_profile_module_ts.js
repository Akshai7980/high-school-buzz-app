(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 2907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProfilePage = class ProfilePage {
    constructor() {
        this.UserDetails = [];
    }
    ngOnInit() {
        this.UserDetails = [
            {
                user_name: "Abayomi Axton",
                school: "King Edward High School",
                profile_pic: "../../assets/image/Sample_Images/11.jpeg",
                buzz_created: "380",
                likes: "50K",
                commentators: "1.1M",
                comments: "2.3M",
                standard: "10 B",
                date_of_birth: "20-04-2000",
                email: "abayomi@gmail.com",
                phone: "+91 9897969594",
                password: "***************"
            }
        ];
        console.log('UserDetails:', this.UserDetails);
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-img-container {\n  background: url('profile-header-bg-2.jpeg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 225px;\n  background-position: unset;\n}\n\n.container {\n  background: url('curver-profile.png');\n  position: relative;\n  bottom: -154px;\n  /* width: auto; */\n  background-size: contain;\n  background-repeat: no-repeat;\n  /* height: 230px; */\n  background-position: unset;\n}\n\n.second-header-bg-img {\n  background: url('curver-profile.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvU2FtcGxlX0ltYWdlcy9wcm9maWxlLWhlYWRlci1iZy0yLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvY3VydmVyLXByb2ZpbGUucG5nKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtMTU0cHg7XG4gICAgLyogd2lkdGg6IGF1dG87ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLyogaGVpZ2h0OiAyMzBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB1bnNldDtcbn1cblxuLnNlY29uZC1oZWFkZXItYmctaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2N1cnZlci1wcm9maWxlLnBuZyk7XG59Il19 */");

/***/ }),

/***/ 2907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <div>\n        <div class=\"header-img-container\">\n            <div style=\"display: flex;\">\n                <ion-buttons slot=\"start\">\n                    <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n                </ion-buttons>\n                <ion-title></ion-title>\n            </div>\n\n            <div style=\"text-align: center\" *ngIf=\"UserDetails!=''\">\n                <img [src]=\"UserDetails[0].profile_pic\" alt=\"\" style=\"border-radius: 50%;\n                height: 95px;\n                width: 95px;\n                object-fit: cover;\n                border: 2px solid white;\">\n                <H5 style=\"margin: 0px;\n                font-family: 'Fredoka_One';\n                color: white;\n                font-size: 22px;\n                letter-spacing: 1px;\">{{UserDetails[0].user_name}}</H5>\n                <p style=\"margin: 0px;\n                font-family: 'PT_Sans_Bold';\n                font-size: 13px;\n                color: white;\n                letter-spacing: .5px;\">{{UserDetails[0].school}}</p>\n            </div>\n        </div>\n\n        <div style=\"float: right;\n        position: relative;\n        bottom: 50px;\">\n            <img src=\"../../assets/image/edit-profile-img.png\" alt=\"\" style=\"height: 18px;\n            margin-right: 30px;\">\n        </div>\n    </div>\n</ion-header>\n\n<ion-header style=\"position: relative;\nbottom: 63px;\nheight: 100px;\" class=\"ion-no-border\">\n    <img src=\"../../assets/image/curver-profile.png\" alt=\"\">\n    <div style=\"text-align: center;\n    justify-content: space-evenly;\n    display: flex;\n    position: relative;\n    bottom: 60px;\n    color: white;\" *ngIf=\"UserDetails!=''\">\n        <div style=\"border-right: .5px solid white; padding-right: 5px;\">\n            <H4 style=\"margin: 0px;\n            font-family: 'PT_Sans_Bold';\">{{UserDetails[0].buzz_created}}</H4>\n            <p style=\"margin: 0px;\n            font-family: 'PT_Sans_Regular';\n            font-size: 13px;\">Buzz Created</p>\n        </div>\n        <div style=\"border-right: .5px solid white; padding-right: 5px;\">\n            <H4 style=\"margin: 0px;\n            font-family: 'PT_Sans_Bold';\">{{UserDetails[0].likes}}</H4>\n            <p style=\"margin: 0px;\n            font-family: 'PT_Sans_Regular';\n            font-size: 13px;\">Likes</p>\n        </div>\n        <div style=\"border-right: .5px solid white; padding-right: 5px;\">\n            <H4 style=\"margin: 0px;\n            font-family: 'PT_Sans_Bold';\">{{UserDetails[0].commentators}}</H4>\n            <p style=\"margin: 0px;\n            font-family: 'PT_Sans_Regular';\n            font-size: 13px;\">Commentators</p>\n        </div>\n        <div>\n            <H4 style=\"margin: 0px;\n            font-family: 'PT_Sans_Bold';\">{{UserDetails[0].comments}}</H4>\n            <p style=\"margin: 0px;\n            font-family: 'PT_Sans_Regular';\n            font-size: 13px;\">Comments</p>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content style=\"position: relative;\nbottom: 40px;\">\n\n    <div style=\"padding: 0px 30px 0px 30px;\" *ngIf=\"UserDetails!=''\">\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic1-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].user_name}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic2-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].standard}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic3-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].school}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic4-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].date_of_birth}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic4-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].email}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic6-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].phone}}</span>\n        </div>\n        <div style=\"display: flex;\n        margin-bottom: 20px;\">\n            <img src=\"../../assets/image/ic7-profile.png\" alt=\"\" style=\"height: 20px;\">\n            <span style=\"font-family: 'PT_Sans_Regular';\n            color: dimgrey;\n            margin-left: 20px; font-size: 18px;\">{{UserDetails[0].password}}</span>\n        </div>\n\n        <div style=\"text-align: center; justify-content: center;\">\n            <ion-button fill=\"outline\" shape=\"round\" size=\"small\" style=\"--border-color: lightgrey;\n            color: grey;\n            text-transform: none;\n            height: 30px;\n            width: 115px;\">Edit Profile</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map