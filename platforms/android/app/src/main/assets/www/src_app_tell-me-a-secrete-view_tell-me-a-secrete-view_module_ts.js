(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_tell-me-a-secrete-view_tell-me-a-secrete-view_module_ts"],{

/***/ 9180:
/*!*********************************************************************************!*\
  !*** ./src/app/tell-me-a-secrete-view/tell-me-a-secrete-view-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecreteViewPageRoutingModule": () => (/* binding */ TellMeASecreteViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tell_me_a_secrete_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tell-me-a-secrete-view.page */ 1805);




const routes = [
    {
        path: '',
        component: _tell_me_a_secrete_view_page__WEBPACK_IMPORTED_MODULE_0__.TellMeASecreteViewPage
    }
];
let TellMeASecreteViewPageRoutingModule = class TellMeASecreteViewPageRoutingModule {
};
TellMeASecreteViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TellMeASecreteViewPageRoutingModule);



/***/ }),

/***/ 6538:
/*!*************************************************************************!*\
  !*** ./src/app/tell-me-a-secrete-view/tell-me-a-secrete-view.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecreteViewPageModule": () => (/* binding */ TellMeASecreteViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tell_me_a_secrete_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tell-me-a-secrete-view-routing.module */ 9180);
/* harmony import */ var _tell_me_a_secrete_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tell-me-a-secrete-view.page */ 1805);







let TellMeASecreteViewPageModule = class TellMeASecreteViewPageModule {
};
TellMeASecreteViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tell_me_a_secrete_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.TellMeASecreteViewPageRoutingModule
        ],
        declarations: [_tell_me_a_secrete_view_page__WEBPACK_IMPORTED_MODULE_1__.TellMeASecreteViewPage]
    })
], TellMeASecreteViewPageModule);



/***/ }),

/***/ 1805:
/*!***********************************************************************!*\
  !*** ./src/app/tell-me-a-secrete-view/tell-me-a-secrete-view.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TellMeASecreteViewPage": () => (/* binding */ TellMeASecreteViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tell_me_a_secrete_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tell-me-a-secrete-view.page.html */ 5751);
/* harmony import */ var _tell_me_a_secrete_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tell-me-a-secrete-view.page.scss */ 6131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TellMeASecreteViewPage = class TellMeASecreteViewPage {
    constructor() {
        this.OthersSecrete = [];
    }
    ngOnInit() {
        this.OthersSecrete = [
            {
                img: '../../assets/image/Sample_Images/1.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/2.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/3.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/4.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/5.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/6.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/7.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/8.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/9.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
            {
                img: '../../assets/image/Sample_Images/10.jpeg',
                name: 'Victor Daniel',
                school: 'Michel School',
                like_count: '1.k',
                comment_count: '2k',
            },
        ];
        console.log('OthersSecrete:', this.OthersSecrete);
    }
};
TellMeASecreteViewPage.ctorParameters = () => [];
TellMeASecreteViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tell-me-a-secrete-view',
        template: _raw_loader_tell_me_a_secrete_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tell_me_a_secrete_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TellMeASecreteViewPage);



/***/ }),

/***/ 6131:
/*!*************************************************************************!*\
  !*** ./src/app/tell-me-a-secrete-view/tell-me-a-secrete-view.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-image: url('tell-me-view-bg.png');\n  border-radius: 25px 25px 0px 0px;\n  padding: 15px;\n  background-repeat: round;\n}\n\nH3 {\n  color: white;\n  font-family: Fredoka_One;\n}\n\n.looping-container {\n  color: white;\n  padding: 10px 15px 10px 10px;\n  background-image: linear-gradient(to bottom, #171312, #212121);\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.sub-container {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-thumbnail {\n  height: 70px;\n  width: 70px;\n  margin-right: 20px;\n}\n\n.user-profile-img {\n  border-radius: 10px;\n}\n\n.sub-inner-container {\n  position: relative;\n  right: 30px;\n}\n\n.user-name-text {\n  margin: 0px;\n  font-family: Fredoka_One;\n}\n\n.user-colg-name-text {\n  font-size: 13px;\n  margin-top: 7px;\n  color: #9e9e9e;\n  font-weight: 500;\n  font-family: Fredoka_One;\n}\n\n.bottom-small-icons {\n  height: 14px;\n  margin-right: 5px;\n}\n\n.icons-text {\n  margin-right: 45px;\n}\n\n.right-end-forward-icon {\n  color: lightgrey;\n  font-weight: 600;\n  font-size: 1.8rem;\n  position: relative;\n  top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGwtbWUtYS1zZWNyZXRlLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0oiLCJmaWxlIjoidGVsbC1tZS1hLXNlY3JldGUtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EsICM5Yjk0ZDIpO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvdGVsbC1tZS12aWV3LWJnLnBuZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG59XG5cbkgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEZyZWRva2FfT25lO1xufVxuXG4ubG9vcGluZy1jb250YWluZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNzEzMTIsICMyMTIxMjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnN1Yi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51c2VyLXByb2ZpbGUtaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc3ViLWlubmVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAzMHB4O1xufVxuXG4udXNlci1uYW1lLXRleHQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBGcmVkb2thX09uZTtcbn1cblxuLnVzZXItY29sZy1uYW1lLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgY29sb3I6ICM5ZTllOWU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogRnJlZG9rYV9PbmU7XG59XG5cbi5ib3R0b20tc21hbGwtaWNvbnMge1xuICAgIGhlaWdodDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmljb25zLXRleHQge1xuICAgIG1hcmdpbi1yaWdodDogNDVweDtcbn1cblxuLnJpZ2h0LWVuZC1mb3J3YXJkLWljb24ge1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ 5751:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tell-me-a-secrete-view/tell-me-a-secrete-view.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Tell Me a Secrete</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <H3 style=\"color: white;\">Know Others Secretes</H3>\n\n        <div *ngFor=\"let secrete of OthersSecrete; let i = index;\" class=\"looping-container\">\n            <div class=\"sub-container\">\n                <ion-thumbnail>\n                    <img [src]=\"secrete.img\" alt=\"\" class=\"user-profile-img\">\n                </ion-thumbnail>\n                <div class=\"sub-inner-container\">\n                    <p class=\"user-name-text\"> {{secrete.name}} </p>\n                    <p class=\"user-colg-name-text\"> {{secrete.school}} </p>\n                    <div style=\"display: flex;\">\n                        <img src=\"../../assets/image/ic-2.png\" alt=\"\" class=\"bottom-small-icons\"> <span class=\"icons-text\"> {{secrete.like_count}} </span>\n                        <img src=\"../../assets/image/ic-1.png\" alt=\"\" class=\"bottom-small-icons\"> <span class=\"icons-text\"> {{secrete.comment_count}} </span>\n                    </div>\n                </div>\n                <ion-icon name=\"chevron-forward\" class=\"right-end-forward-icon\"></ion-icon>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tell-me-a-secrete-view_tell-me-a-secrete-view_module_ts.js.map