(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_faq_faq_module_ts"],{

/***/ 2783:
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 4864);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ 5083:
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 2783);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 4864);







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
    })
], FaqPageModule);



/***/ }),

/***/ 4864:
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faq.page.html */ 8576);
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss */ 7125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/common.service */ 5620);





let FaqPage = class FaqPage {
    constructor(common) {
        this.common = common;
        this.Questions = [];
        this.showAnswer = {};
    }
    ngOnInit() {
        this.Questions = [
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
            {
                question: "How Save PNG to Camera roll, save template?",
                answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            },
        ];
        this.showAnswer = {} = {};
        console.log('Questions:', this.Questions);
    }
    gotoSections(category) {
        console.log('cat:', category);
        this.showAnswer = {} = {};
    }
    ToViewAnswer(q, i) {
        console.log('Questions:', q, i);
        this.showAnswer = {} = {};
        this.showAnswer[i] = !this.showAnswer[i];
    }
};
FaqPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaqPage);



/***/ }),

/***/ 7125:
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 10px;\n}\n\nion-button {\n  text-transform: none;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n.inactive-button {\n  color: black;\n}\n\n.active-button {\n  --background: #00adef;\n}\n\n.question-container {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 0.5px solid lightgray;\n}\n\n.arrow-icon {\n  position: relative;\n  top: 15px;\n  font-size: 1.5rem;\n}\n\n.answer-text {\n  color: grey;\n  letter-spacing: 1px;\n  font-size: 14px;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5REFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YTg0Y2EsICM5Yjk0ZDIpO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaW5hY3RpdmUtYnV0dG9uIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY3RpdmUtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMGFkZWY7XG59XG5cbi5xdWVzdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFuc3dlci10ZXh0IHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59Il19 */");

/***/ }),

/***/ 8576:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>FAQ</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\">\n        <div style=\"justify-content: space-between; display:flex; border-bottom: .1px solid lightgray; padding-bottom: 10px;\">\n            <ion-button fill=\"clear\" class=\"inactive-button\" (click)=\"gotoSections('all')\">All</ion-button>\n            <ion-button fill=\"clear\" class=\"inactive-button\" (click)=\"gotoSections('school')\">School</ion-button>\n            <ion-button class=\"active-button\" (click)=\"gotoSections('media')\">Media</ion-button>\n            <ion-button fill=\"clear\" class=\"inactive-button\" (click)=\"gotoSections('other')\">Other</ion-button>\n        </div>\n\n        <!-- <ion-list>\n            <ion-item class=\"ion-activatable ripple-parent\" *ngFor=\"let question of Questions; let i = index;\" (click)=\"ToViewAnswer(question, i)\">\n                <p> {{question.question}} </p>\n                <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect> -->\n\n        <!-- <ion-item-divider>\n                    <ion-item *ngIf=\"showAnswer[i]\">\n                        <p> {{question.answer}} </p>\n                    </ion-item>\n                </ion-item-divider> -->\n\n        <!-- </ion-item>\n        </ion-list> -->\n\n        <div *ngFor=\"let question of Questions; let i = index;\" (click)=\"ToViewAnswer(question, i)\">\n            <div class=\"question-container\">\n                <p> {{question.question}} </p>\n                <ion-icon *ngIf=\"!showAnswer[i]\" name=\"chevron-forward-outline\" class=\"arrow-icon\"></ion-icon>\n                <ion-icon *ngIf=\"showAnswer[i]\" name=\"chevron-down-outline\" class=\"arrow-icon\"></ion-icon>\n            </div>\n\n            <div *ngIf=\"showAnswer[i]\">\n                <p class=\"answer-text\"> {{question.answer}} </p>\n            </div>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts.js.map