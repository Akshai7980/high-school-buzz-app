(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_visitors-home-view_visitors-home-view_module_ts"],{

/***/ 4770:
/*!*************************************************************************!*\
  !*** ./src/app/visitors-home-view/visitors-home-view-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorsHomeViewPageRoutingModule": () => (/* binding */ VisitorsHomeViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _visitors_home_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitors-home-view.page */ 9714);




const routes = [
    {
        path: '',
        component: _visitors_home_view_page__WEBPACK_IMPORTED_MODULE_0__.VisitorsHomeViewPage
    }
];
let VisitorsHomeViewPageRoutingModule = class VisitorsHomeViewPageRoutingModule {
};
VisitorsHomeViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisitorsHomeViewPageRoutingModule);



/***/ }),

/***/ 1301:
/*!*****************************************************************!*\
  !*** ./src/app/visitors-home-view/visitors-home-view.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorsHomeViewPageModule": () => (/* binding */ VisitorsHomeViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _visitors_home_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitors-home-view-routing.module */ 4770);
/* harmony import */ var _visitors_home_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors-home-view.page */ 9714);







let VisitorsHomeViewPageModule = class VisitorsHomeViewPageModule {
};
VisitorsHomeViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _visitors_home_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisitorsHomeViewPageRoutingModule
        ],
        declarations: [_visitors_home_view_page__WEBPACK_IMPORTED_MODULE_1__.VisitorsHomeViewPage]
    })
], VisitorsHomeViewPageModule);



/***/ }),

/***/ 9714:
/*!***************************************************************!*\
  !*** ./src/app/visitors-home-view/visitors-home-view.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitorsHomeViewPage": () => (/* binding */ VisitorsHomeViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_visitors_home_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./visitors-home-view.page.html */ 4141);
/* harmony import */ var _visitors_home_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors-home-view.page.scss */ 948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/common.service */ 5620);





let VisitorsHomeViewPage = class VisitorsHomeViewPage {
    constructor(common) {
        this.common = common;
        this.UserDetails = [];
        this.OngoingBuzz = [];
    }
    ngOnInit() {
        this.OngoingBuzz = [
            {
                caption: "Don't be so shy, tell us your true colours!",
                ending_time: "08 May 2021",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                caption: "Don't be so shy, tell us your true colours!",
                ending_time: "08 May 2021",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                caption: "Don't be so shy, tell us your true colours!",
                ending_time: "08 May 2021",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                caption: "Don't be so shy, tell us your true colours!",
                ending_time: "08 May 2021",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
        ];
        console.log('OngoingBuzz:', this.OngoingBuzz);
    }
    ionViewWillEnter() {
        this.UserDetails = [
            {
                user_name: "Abayomi Axton",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                standard: "10 B",
                school_name: "King Edward High School",
                buzz_created: "380",
                likes: "50K",
                commentators: "1.1M",
                comments: "2.3M",
            }
        ];
        console.log('UserDetails:', this.UserDetails);
    }
};
VisitorsHomeViewPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
VisitorsHomeViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-visitors-home-view',
        template: _raw_loader_visitors_home_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_visitors_home_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VisitorsHomeViewPage);



/***/ }),

/***/ 948:
/*!*****************************************************************!*\
  !*** ./src/app/visitors-home-view/visitors-home-view.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: url('bg-home.png');\n  background-repeat: no-repeat;\n  background-position: unset;\n  height: 160px;\n  background-size: cover;\n}\n\n.second-header {\n  height: auto;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0b3JzLWhvbWUtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InZpc2l0b3JzLWhvbWUtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2JnLWhvbWUucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHVuc2V0O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNlY29uZC1oZWFkZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ 4141:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visitors-home-view/visitors-home-view.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <div>\n        <ion-buttons>\n            <ion-menu-button>\n                <img src=\"../../assets/image/tog-menu-icn.png\" alt=\"\">\n            </ion-menu-button>\n        </ion-buttons>\n        <div style=\"position: relative;\n      bottom: 20px;\n      left: 30px;\" *ngIf=\"UserDetails!=''\">\n            <div style=\"display: flex;\n          justify-content: space-between;\n          position: relative;\n          margin-bottom: 5px;\n          padding: 0px 35px 0px 25px;\n          align-items: center;\">\n                <div>\n                    <H5 style=\"color: white; font-family: Fredoka_One; margin: 0px;\"> {{UserDetails[0].user_name}} </H5>\n                    <p style=\"color: white; font-size: 12px; font-family: 'PT_Sans_Regular'; margin: 0px;\"> <strong> {{UserDetails[0].standard}},</strong> {{UserDetails[0].school_name}} </p>\n                </div>\n                <div>\n                    <img [src]=\"UserDetails[0].profile_pic\" alt=\"\" style=\"height: 55px;\n                  width: 55px;\n                  border-radius: 50%;\n                  object-fit: cover;\n                  border: 2px solid white;\">\n                </div>\n            </div>\n\n            <div style=\"display: flex;\n          position: relative;\n          justify-content: center;\">\n                <img src=\"../../assets/image/msg1.png\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                position: absolute;\n                left: 5px;\">\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                  color: white;\n                  font-family: PT_sans_Bold;\n                  font-size: 14px;\"> {{UserDetails[0].buzz_created}} </p>\n                    <p style=\"margin: 0px;\n                  font-size: 12px;\n                  color: white;\n                  font-family: 'PT_Sans_Regular';\"> Buzz Created </p>\n                </div>\n\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                  color: white;\n                  font-family: PT_sans_Bold;\n                  font-size: 14px;\"> {{UserDetails[0].likes}} </p>\n                    <p style=\"margin: 0px;\n                  font-size: 12px;\n                  color: white;\n                  font-family: 'PT_Sans_Regular';\"> Likes </p>\n                </div>\n\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                  color: white;\n                  font-family: PT_sans_Bold;\n                  font-size: 14px;\"> {{UserDetails[0].commentators}} </p>\n                    <p style=\"margin: 0px;\n                  font-size: 12px;\n                  color: white;\n                  font-family: 'PT_Sans_Regular';\"> Commentators </p>\n                </div>\n\n                <div style=\"text-align: center; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                  color: white;\n                  font-family: PT_sans_Bold;\n                  font-size: 14px;\"> {{UserDetails[0].comments}} </p>\n                    <p style=\"margin: 0px;\n                  font-size: 12px;\n                  color: white;\n                  font-family: 'PT_Sans_Regular';\"> Comments </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-content>\n\n    <H4 style=\"margin: 10px 20px;\n  font-family: 'Fredoka_One';\n  color: #00ADEF;\">Latest Buzz</H4>\n\n    <div style=\"display: flex;\n  justify-content: space-evenly;\n  border-bottom: 0.5px solid lightgrey;\n  padding: 5px 0px 10px 10px;\" *ngFor=\"let buzz of OngoingBuzz; let i=index;\">\n\n        <div>\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image1\" alt=\"\" style=\"height: 60px;\n              width: 60px;\n              border-radius: 30px 0px 0px 0px;\n              object-fit: cover;\">\n                <img [src]=\"buzz.image2\" alt=\"\" style=\"height: 60px;\n              width: 60px;\n              border-radius: 0px 30px 0px 0px;\n              object-fit: cover;\">\n            </div>\n\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image3\" alt=\"\" style=\"height: 60px;\n              width: 60px;\n              border-radius: 0px 0px 0px 30px;\n              object-fit: cover;\">\n                <img [src]=\"buzz.image4\" alt=\"\" style=\"height: 60px;\n              width: 60px;\n              border-radius: 0px 0px 30px 0px;\n              object-fit: cover;\">\n            </div>\n        </div>\n\n        <div style=\"margin-left: 10%;\">\n            <H4 style=\"font-family: 'Fredoka_One';\n          color: #f24aa2;\n          margin: 7px 0px 12px 0px;\n          font-size: 16px;\"> {{buzz.caption}} </H4>\n            <div style=\"display: flex;\n          margin: 10px 0px 10px 0px;\n          font-family: PT_Sans_Regular;\n          font-size: 10px;\n          background-color: #DDF4FC;\n          width: 115px;\n          height: 27px;\n          justify-content: center;\n          border-radius: 20px;\">\n                <img src=\"../../assets/image//img1.png\" alt=\"\" style=\"height: 15px;\n              position: relative;\n              top: 5px;\n              margin-right: 5px;\">\n                <p style=\"position: relative;\n              bottom: 3px;\">Ends {{buzz.ending_time}}</p>\n            </div>\n\n            <div style=\"display: flex;\">\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n              width: 20px;\n              margin-right: 3px;\"> <span style=\"font-size: 12px;\n  margin-right: 7px; position: relative;\n  top: 3px;\"> {{buzz.like}} </span>\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n              width: 20px;\n              margin-right: 3px;\n              margin-left: 25px;\"> <span style=\"font-size: 12px;\n  margin-right: 7px;\n  position: relative;\n  top: 3px;\"> {{buzz.comment}} </span>\n            </div>\n\n        </div>\n\n        <div>\n            <ion-icon name=\"chevron-forward\" style=\"font-size: 1.5rem;\n          position: relative;\n          top: 40%;\n          color: #3bb2ec;\"></ion-icon>\n        </div>\n\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_visitors-home-view_visitors-home-view_module_ts.js.map