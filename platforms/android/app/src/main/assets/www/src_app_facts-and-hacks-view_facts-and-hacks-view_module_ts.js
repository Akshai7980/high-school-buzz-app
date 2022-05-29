(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_facts-and-hacks-view_facts-and-hacks-view_module_ts"],{

/***/ 8712:
/*!*****************************************************************************!*\
  !*** ./src/app/facts-and-hacks-view/facts-and-hacks-view-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksViewPageRoutingModule": () => (/* binding */ FactsAndHacksViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _facts_and_hacks_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facts-and-hacks-view.page */ 8420);




const routes = [
    {
        path: '',
        component: _facts_and_hacks_view_page__WEBPACK_IMPORTED_MODULE_0__.FactsAndHacksViewPage
    }
];
let FactsAndHacksViewPageRoutingModule = class FactsAndHacksViewPageRoutingModule {
};
FactsAndHacksViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FactsAndHacksViewPageRoutingModule);



/***/ }),

/***/ 6281:
/*!*********************************************************************!*\
  !*** ./src/app/facts-and-hacks-view/facts-and-hacks-view.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksViewPageModule": () => (/* binding */ FactsAndHacksViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _facts_and_hacks_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facts-and-hacks-view-routing.module */ 8712);
/* harmony import */ var _facts_and_hacks_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facts-and-hacks-view.page */ 8420);







let FactsAndHacksViewPageModule = class FactsAndHacksViewPageModule {
};
FactsAndHacksViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _facts_and_hacks_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.FactsAndHacksViewPageRoutingModule
        ],
        declarations: [_facts_and_hacks_view_page__WEBPACK_IMPORTED_MODULE_1__.FactsAndHacksViewPage]
    })
], FactsAndHacksViewPageModule);



/***/ }),

/***/ 8420:
/*!*******************************************************************!*\
  !*** ./src/app/facts-and-hacks-view/facts-and-hacks-view.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FactsAndHacksViewPage": () => (/* binding */ FactsAndHacksViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_facts_and_hacks_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./facts-and-hacks-view.page.html */ 3577);
/* harmony import */ var _facts_and_hacks_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facts-and-hacks-view.page.scss */ 5656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FactsAndHacksViewPage = class FactsAndHacksViewPage {
    constructor() {
        this.FactsHacks = [];
    }
    ngOnInit() {
        this.FactsHacks = [
            {
                main_img: "../../assets/image/Sample_Images/trv1.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv2.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/2.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv3.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/3.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv4.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/4.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv1.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv2.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/2.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv3.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/3.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            },
            {
                main_img: "../../assets/image/Sample_Images/trv4.jpeg",
                heading: "Lorem Ipsum has been the",
                profile_pic: "../../assets/image/Sample_Images/4.jpeg",
                user_name: "Michael",
                school: "St. Joseph School"
            }
        ];
        console.log('FactsHacks:', this.FactsHacks);
    }
};
FactsAndHacksViewPage.ctorParameters = () => [];
FactsAndHacksViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-facts-and-hacks-view',
        template: _raw_loader_facts_and_hacks_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_facts_and_hacks_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FactsAndHacksViewPage);



/***/ }),

/***/ 5656:
/*!*********************************************************************!*\
  !*** ./src/app/facts-and-hacks-view/facts-and-hacks-view.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 15px;\n  background-repeat: round;\n  font-family: Fredoka_One;\n}\n\n.heading-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.heading {\n  float: left;\n  letter-spacing: 0.5px;\n}\n\n.add-button {\n  text-transform: none;\n  float: right;\n  font-family: \"Fredoka_One\";\n  --background: linear-gradient(to bottom, #F779BB 10%, #F14CA4 70%);\n  width: 80px;\n  position: relative;\n  top: 10px;\n}\n\n.add-button-icon {\n  font-size: 20px;\n}\n\n.looping-container {\n  display: flex;\n  padding: 7px;\n  margin-top: 15px;\n  justify-content: space-between;\n  border-radius: 9px;\n  box-shadow: 1px 1px 5px 3px lightgrey;\n}\n\n.main-img-container {\n  margin-right: 7px;\n}\n\n.main-img {\n  height: 75px;\n  width: 95px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.heading-text {\n  margin: 0px 0px 10px 0px;\n}\n\n.profile-details-main-container {\n  display: flex;\n}\n\n.profile-details-first-sub-container {\n  margin-right: 8px;\n}\n\n.user-profile-img {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.user-details-text-container {\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  margin-top: 5px;\n}\n\n.user-name-text {\n  margin: 0px;\n}\n\n.user-school-name {\n  margin: 0px;\n  color: #343434;\n  font-size: 10px;\n}\n\n.chevron-forward-icon {\n  font-size: 1.7rem;\n  color: #0898FB;\n  position: relative;\n  top: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RzLWFuZC1oYWNrcy12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtFQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoiZmFjdHMtYW5kLWhhY2tzLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGE4NGNhLCAjOWI5NGQyKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgICBmb250LWZhbWlseTogRnJlZG9rYV9PbmU7XG59XG5cbi5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LWZhbWlseTogJ0ZyZWRva2FfT25lJztcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGNzc5QkIgMTAlLCAjRjE0Q0E0IDcwJSk7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbn1cblxuLmFkZC1idXR0b24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9vcGluZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAzcHggbGlnaHRncmV5O1xufVxuXG4ubWFpbi1pbWctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLm1haW4taW1nIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhlYWRpbmctdGV4dCB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xufVxuXG4ucHJvZmlsZS1kZXRhaWxzLW1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZS1kZXRhaWxzLWZpcnN0LXN1Yi1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udXNlci1wcm9maWxlLWltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnVzZXItZGV0YWlscy10ZXh0LWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnVzZXItbmFtZS10ZXh0IHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnVzZXItc2Nob29sLW5hbWUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNoZXZyb24tZm9yd2FyZC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzA4OThGQjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzNSU7XG59Il19 */");

/***/ }),

/***/ 3577:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facts-and-hacks-view/facts-and-hacks-view.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Facts and Hacks</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n\n        <div class=\"heading-container\">\n            <h4 class=\"heading\">Today's Facts & Hacks</h4>\n            <ion-button shape=\"round\" size=\"small\" class=\"add-button\">\n                <ion-icon slot=\"icon-only\" name=\"add\" class=\"add-button-icon\"></ion-icon> Add </ion-button>\n        </div>\n\n        <div class=\"looping-container\" *ngFor=\"let facts of FactsHacks; let i = index\">\n            <div class=\"main-img-container\">\n                <img [src]=\"facts.main_img\" alt=\"\" class=\"main-img\">\n            </div>\n            <div>\n                <h6 class=\"heading-text\">{{facts.heading}}</h6>\n                <div class=\"profile-details-main-container\">\n                    <div class=\"profile-details-first-sub-container\">\n                        <img [src]=\"facts.profile_pic\" alt=\"\" class=\"user-profile-img\">\n                    </div>\n                    <div class=\"user-details-text-container\">\n                        <p class=\"user-name-text\">{{facts.user_name}}</p>\n                        <p class=\"user-school-name\">{{facts.school}}</p>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <ion-icon name=\"chevron-forward\" class=\"chevron-forward-icon\"></ion-icon>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_facts-and-hacks-view_facts-and-hacks-view_module_ts.js.map