(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_contest-view_contest-view_module_ts"],{

/***/ 2426:
/*!*************************************************************!*\
  !*** ./src/app/contest-view/contest-view-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestViewPageRoutingModule": () => (/* binding */ ContestViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contest_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contest-view.page */ 3327);




const routes = [
    {
        path: '',
        component: _contest_view_page__WEBPACK_IMPORTED_MODULE_0__.ContestViewPage
    }
];
let ContestViewPageRoutingModule = class ContestViewPageRoutingModule {
};
ContestViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContestViewPageRoutingModule);



/***/ }),

/***/ 6853:
/*!*****************************************************!*\
  !*** ./src/app/contest-view/contest-view.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestViewPageModule": () => (/* binding */ ContestViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contest_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contest-view-routing.module */ 2426);
/* harmony import */ var _contest_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contest-view.page */ 3327);







let ContestViewPageModule = class ContestViewPageModule {
};
ContestViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contest_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContestViewPageRoutingModule
        ],
        declarations: [_contest_view_page__WEBPACK_IMPORTED_MODULE_1__.ContestViewPage]
    })
], ContestViewPageModule);



/***/ }),

/***/ 3327:
/*!***************************************************!*\
  !*** ./src/app/contest-view/contest-view.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestViewPage": () => (/* binding */ ContestViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contest_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contest-view.page.html */ 5110);
/* harmony import */ var _contest_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contest-view.page.scss */ 5910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ContestViewPage = class ContestViewPage {
    constructor() {
        this.ContestDetails = [];
    }
    ngOnInit() {
        this.ContestDetails = [
            {
                img: '../../assets/image/Sample_Images/1.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/2.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/3.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/4.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/5.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/6.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/7.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/8.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/9.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/10.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/11.jpeg',
            },
            {
                img: '../../assets/image/Sample_Images/12.jpeg',
            },
        ];
        console.log('ContestDetails:', this.ContestDetails);
    }
};
ContestViewPage.ctorParameters = () => [];
ContestViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contest-view',
        template: _raw_loader_contest_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contest_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContestViewPage);



/***/ }),

/***/ 5910:
/*!*****************************************************!*\
  !*** ./src/app/contest-view/contest-view.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 10px;\n}\n\n.sub-container-profile {\n  text-align: center;\n  justify-content: center;\n  margin-top: 13px;\n}\n\n.profile-img {\n  border-radius: 50%;\n  border: 3px solid #00adef;\n  height: 90px;\n  width: 90px;\n  object-fit: cover;\n}\n\n.user-name {\n  font-weight: 600;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n\n.icon-img {\n  height: 25px;\n  margin-right: 5px;\n}\n\n.icon-text {\n  font-weight: 500;\n  margin-right: 15px;\n}\n\n.inner-sub-container {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.vote-now-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #8FDCFA 10%, #10B0EE 90%);\n  width: 150px;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.icon-near-vote-now {\n  height: 50px;\n  margin-right: -60px;\n  position: relative;\n  left: 20px;\n}\n\n.media-img {\n  height: 110px;\n  width: 115px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlc3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY29udGVzdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhhODRjYSwgIzliOTRkMik7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnN1Yi1jb250YWluZXItcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMGFkZWY7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udXNlci1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbn1cblxuLmljb24taW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pY29uLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW5uZXItc3ViLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi52b3RlLW5vdy1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhGRENGQSAxMCUsICMxMEIwRUUgOTAlKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pY29uLW5lYXItdm90ZS1ub3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4ubWVkaWEtaW1nIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ 5110:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contest-view/contest-view.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Contest</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div style=\"text-align: center\">\n            <div class=\"sub-container-profile\">\n                <img src=\"../../assets/image/Sample_Images/1.jpeg\" alt=\"\" class=\"profile-img\">\n                <p class=\"user-name\">Chirag Prajapati</p>\n            </div>\n            <div style=\"display: flex; justify-content: center;\">\n                <img src=\"../../assets/image/msg1.png\" alt=\"\" class=\"icon-img\">\n                <span class=\"icon-text\">800 Votes</span>\n                <img src=\"../../assets/image/msg1.png\" alt=\"\" class=\"icon-img\">\n                <span class=\"icon-text\">4.5k Comments</span>\n            </div>\n\n            <div class=\"inner-sub-container\">\n                <ion-button shape=\"round\" class=\"vote-now-button\">VOTE NOW</ion-button>\n                <img src=\"../../assets/image/msg1.png\" alt=\"\" class=\"icon-near-vote-now\">\n            </div>\n        </div>\n\n        <div style=\"display: flex; flex-wrap: wrap; margin-top: 10px; justify-content: center;\">\n            <div style=\"margin: 3px;\" *ngFor=\"let contest of ContestDetails;\">\n                <img [src]=\"contest.img\" alt=\"\" class=\"media-img\">\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contest-view_contest-view_module_ts.js.map