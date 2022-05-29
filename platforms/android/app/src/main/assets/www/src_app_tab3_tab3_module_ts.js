(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 4255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/common.service */ 5620);





let Tab3Page = class Tab3Page {
    constructor(common) {
        this.common = common;
        this.ShowWhatsOnMind = false;
        this.WhatsOnMindText = '';
        this.UserDetails = [];
        this.OngoingBuzz = [];
        this.BoardImage = [];
        this.LatestBuzz = [];
        this.i = 0;
    }
    ngOnInit() {
        this.i = 0;
        this.BoardImage = [
            [
                {
                    img: "../../assets/image/board1.png",
                    name: "Bulletin"
                },
                {
                    img: "../../assets/image/board2.png",
                    name: "StudyGroup"
                },
                {
                    img: "../../assets/image/board3.png",
                    name: "Birthday"
                },
            ],
            [
                {
                    img: "../../assets/image/board4.png",
                    name: "Learning"
                },
                {
                    img: "../../assets/image/board5.png",
                    name: "Facts"
                },
                {
                    img: "../../assets/image/board6.png",
                    name: "Contest"
                },
            ]
        ];
        console.log('BoardImage:', this.BoardImage);
        this.LatestBuzz = [
            {
                user_name: "James",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                posted_time: "10",
                caption: "Don't be so shy, tell us your true colours!",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                user_name: "James",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                posted_time: "10",
                caption: "Don't be so shy, tell us your true colours!",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                user_name: "James",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                posted_time: "10",
                caption: "Don't be so shy, tell us your true colours!",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
            {
                user_name: "James",
                profile_pic: "../../assets/image/Sample_Images/1.jpeg",
                posted_time: "10",
                caption: "Don't be so shy, tell us your true colours!",
                like: "1k",
                comment: "1k",
                image1: "../../assets/image/Sample_Images/2.jpeg",
                image2: "../../assets/image/Sample_Images/11.jpeg",
                image3: "../../assets/image/Sample_Images/12.jpeg",
                image4: "../../assets/image/Sample_Images/13.jpeg",
            },
        ];
        console.log('LatestBuzz:', this.LatestBuzz);
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
    gotoNext(i) {
        console.log('i:', i);
        this.i = 1;
    }
    gotoPrev(i) {
        console.log('i:', i);
        this.i = 0;
    }
    gotoBoard(board) {
        console.log('board:', board);
        console.log('name:', board === null || board === void 0 ? void 0 : board.name);
        const P = board === null || board === void 0 ? void 0 : board.name;
    }
    addWhatsOnMind() {
        console.log("What's On Mind Clicked");
        this.ShowWhatsOnMind = true;
    }
    addWhatsOnMindHide() {
        console.log("What's On Mind Hide Clicked");
        this.ShowWhatsOnMind = false;
    }
    ToPostWhatsOnMind() {
        console.log('WhatsOnMindText:', this.WhatsOnMindText);
        if (this.WhatsOnMindText !== '' && this.WhatsOnMindText !== undefined) {
            this.WhatsOnMindText = '';
            this.common.showAlertSuccess("Your <strong> What's On Your Mind </strong> posted <strong> Successfully </strong>");
        }
        else {
            console.log("What's On Mind is empty");
            this.common.showAlertFailed("Please enter <strong> What's On Your Mind </strong> and then click <strong> POST </strong>");
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: url('bg-home.png');\n  background-repeat: no-repeat;\n  background-position: unset;\n  height: 160px;\n  background-size: cover;\n}\n\n.second-header {\n  height: auto;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvYmctaG9tZS5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2Vjb25kLWhlYWRlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4vLyAudGFiLWhlYWRlciB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL2JnLWhvbWUucG5nKTtcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4vLyB9Il19 */");

/***/ }),

/***/ 4255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <div>\n        <ion-buttons>\n            <ion-menu-button>\n                <img src=\"../../assets/image/tog-menu-icn.png\" alt=\"\">\n            </ion-menu-button>\n        </ion-buttons>\n        <div style=\"position: relative;\n        bottom: 20px;\n        left: 30px;\" *ngIf=\"UserDetails!=''\">\n            <div style=\"display: flex;\n            justify-content: space-between;\n            position: relative;\n            margin-bottom: 5px;\n            padding: 0px 35px 0px 25px;\n            align-items: center;\">\n                <div>\n                    <H5 style=\"color: white; font-family: Fredoka_One; margin: 0px;\"> {{UserDetails[0].user_name}} </H5>\n                    <p style=\"color: white; font-size: 12px; font-family: 'PT_Sans_Regular'; margin: 0px;\"> <strong> {{UserDetails[0].standard}},</strong> {{UserDetails[0].school_name}} </p>\n                </div>\n                <div>\n                    <img [src]=\"UserDetails[0].profile_pic\" alt=\"\" style=\"height: 55px;\n                    width: 55px;\n                    border-radius: 50%;\n                    object-fit: cover;\n                    border: 2px solid white;\">\n                </div>\n            </div>\n\n            <div style=\"display: flex;\n            position: relative;\n            justify-content: center;\">\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                    color: white;\n                    font-family: PT_sans_Bold;\n                    font-size: 14px;\"> {{UserDetails[0].buzz_created}} </p>\n                    <p style=\"margin: 0px;\n                    font-size: 12px;\n                    color: white;\n                    font-family: 'PT_Sans_Regular';\"> Buzz Created </p>\n                </div>\n\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                    color: white;\n                    font-family: PT_sans_Bold;\n                    font-size: 14px;\"> {{UserDetails[0].likes}} </p>\n                    <p style=\"margin: 0px;\n                    font-size: 12px;\n                    color: white;\n                    font-family: 'PT_Sans_Regular';\"> Likes </p>\n                </div>\n\n                <div style=\"text-align: center; border-right: .5px solid white; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                    color: white;\n                    font-family: PT_sans_Bold;\n                    font-size: 14px;\"> {{UserDetails[0].commentators}} </p>\n                    <p style=\"margin: 0px;\n                    font-size: 12px;\n                    color: white;\n                    font-family: 'PT_Sans_Regular';\"> Commentators </p>\n                </div>\n\n                <div style=\"text-align: center; padding: 0px 5px 0px 5px;\">\n                    <p style=\"margin: 0px;\n                    color: white;\n                    font-family: PT_sans_Bold;\n                    font-size: 14px;\"> {{UserDetails[0].comments}} </p>\n                    <p style=\"margin: 0px;\n                    font-size: 12px;\n                    color: white;\n                    font-family: 'PT_Sans_Regular';\"> Comments </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-header class=\"ion-no-border ; second-header\">\n\n    <div style=\"display: flex; overflow-x: auto; margin-bottom: 15px;\">\n\n        <div (click)=\"gotoPrev(i)\" *ngIf=\"i===1\">\n            <ion-icon name=\"chevron-back\" style=\"position: relative;\n            top: 35%;\"></ion-icon>\n        </div>\n\n        <div style=\"padding: 0px 3px 0px 3px;\" *ngFor=\"let board of BoardImage[i]; let i = index\" (click)=\"gotoBoard(board)\">\n            <img [src]=\"board.img\" alt=\"\" style=\"height: auto;\n            width: 200px;\n            object-fit: cover;\">\n        </div>\n\n        <div (click)=\"gotoNext(i)\" *ngIf=\"i===0\">\n            <ion-icon name=\"chevron-forward\" style=\"position: relative;\n            top: 35%;\"></ion-icon>\n        </div>\n\n    </div>\n\n</ion-header>\n\n<ion-header style=\"padding: 0px 10px;\" class=\"ion-no-border ; second-header\">\n\n    <div style=\"border-radius: 20px;\n    display: flex;\n    height: 40px;\n    margin-bottom: 5px;\n    box-shadow: 1px 1px 5px 0px #9e9e9e;\" *ngIf=\"!ShowWhatsOnMind\">\n        <img src=\"../../assets/image/msg1.png\" alt=\"\" style=\"height: 40px;\n        padding: 2px 10px 2px 2px;\" (click)=\"addWhatsOnMind()\">\n        <p style=\"color: #333333;\n        font-family: PT_Sans_Italic;\n        font-size: 13px;\">Hey, What's On Your Mind!</p>\n    </div>\n\n    <div style=\"border-radius: 20px;\n    margin-bottom: 5px;\n    box-shadow: 1px 1px 5px 0px #9e9e9e;\" *ngIf=\"ShowWhatsOnMind\">\n        <div style=\"display: flex; justify-content: space-between;\">\n            <img src=\"../../assets/image/msg1.png\" alt=\"\" style=\"height: 40px;\n            padding: 2px 10px 2px 2px;\" (click)=\"addWhatsOnMindHide()\">\n            <ion-textarea placeholder=\" Hey, What's On Your Mind! \" type=\"text\" style=\"\n            font-family: PT_Sans_Italic;\n            font-size: 13px;\" [(ngModel)]=\"WhatsOnMindText\"></ion-textarea>\n        </div>\n\n        <div style=\"display: flex;\n        justify-content: space-between;\n        padding: 10px 10px 3px;\n        border-top: .5px solid lightgrey;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\">\n            <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\">\n            <ion-button shape=\"round\" size=\"small\" slot=\"end\" style=\"--background: linear-gradient(to bottom, #71D2F5, #08B0EF);\n            width: 80px;\n            font-family: 'Fredoka_One';\n            font-size: 12px;\" (click)=\"ToPostWhatsOnMind()\">POST</ion-button>\n        </div>\n    </div>\n\n</ion-header>\n\n<ion-content>\n\n    <H4 style=\"margin: 10px 20px;\n    font-family: 'Fredoka_One';\n    color: #00ADEF;\">Latest Buzz</H4>\n\n    <div style=\"display: flex;\n    justify-content: space-evenly;\n    border-bottom: 0.5px solid lightgrey;\n    padding: 5px 0px 10px 10px;\" *ngFor=\"let buzz of LatestBuzz; let i=index;\">\n\n        <div>\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image1\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 30px 0px 0px 0px;\n                object-fit: cover;\">\n                <img [src]=\"buzz.image2\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 30px 0px 0px;\n                object-fit: cover;\">\n            </div>\n\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image3\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 0px 0px 30px;\n                object-fit: cover;\">\n                <img [src]=\"buzz.image4\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 0px 30px 0px;\n                object-fit: cover;\">\n            </div>\n        </div>\n\n        <div style=\"margin-left: 10%;\">\n            <div style=\"display: flex;\">\n                <div style=\"margin-right: 6px;\n                position: relative;\n                top: 5px;\">\n                    <img [src]=\"buzz.profile_pic\" alt=\"\" style=\"height: 35px;\n                    width: 35px;\n                    object-fit: cover;\n                    border-radius: 50%;\n                    border: 1.5px solid #1ca2e6;\">\n                </div>\n                <div>\n                    <p style=\"margin: 0px;\n                    font-family: 'PT_Sans_Bold';\"> {{buzz.user_name}} </p>\n                    <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                    width: 20px;\n                    object-fit: cover;\n                    margin-right: 3px;\"> <span style=\"font-family: 'PT_Sans_Regular';\n    font-size: 13px; position: relative;\n    bottom: 3px;\"> {{buzz.posted_time}} mint ago</span>\n                </div>\n            </div>\n            <H4 style=\"font-family: 'Fredoka_One';\n            color: #f24aa2;\n            margin: 7px 0px 12px 0px;\n            font-size: 16px;\"> {{buzz.caption}} </H4>\n            <div style=\"display: flex;\">\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                width: 20px;\n                margin-right: 3px;\"> <span style=\"font-size: 12px;\n    margin-right: 7px; position: relative;\n    top: 3px;\"> {{buzz.like}} </span>\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                width: 20px;\n                margin-right: 3px;\n                margin-left: 25px;\"> <span style=\"font-size: 12px;\n    margin-right: 7px;\n    position: relative;\n    top: 3px;\"> {{buzz.comment}} </span>\n            </div>\n\n        </div>\n\n        <div>\n            <ion-icon name=\"chevron-forward\" style=\"font-size: 1.5rem;\n            position: relative;\n            top: 40%;\n            color: #3bb2ec;\"></ion-icon>\n        </div>\n\n    </div>\n\n    <div style=\"display: flex;\n    justify-content: space-evenly;\n    border-bottom: 0.5px solid lightgrey;\n    padding: 5px 0px 10px 10px;\" *ngFor=\"let buzz of OngoingBuzz; let i=index;\">\n\n        <div>\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image1\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 30px 0px 0px 0px;\n                object-fit: cover;\">\n                <img [src]=\"buzz.image2\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 30px 0px 0px;\n                object-fit: cover;\">\n            </div>\n\n            <div style=\"display: flex;\">\n                <img [src]=\"buzz.image3\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 0px 0px 30px;\n                object-fit: cover;\">\n                <img [src]=\"buzz.image4\" alt=\"\" style=\"height: 60px;\n                width: 60px;\n                border-radius: 0px 0px 30px 0px;\n                object-fit: cover;\">\n            </div>\n        </div>\n\n        <div style=\"margin-left: 10%;\">\n            <H4 style=\"font-family: 'Fredoka_One';\n            color: #f24aa2;\n            margin: 7px 0px 12px 0px;\n            font-size: 16px;\"> {{buzz.caption}} </H4>\n            <div style=\"display: flex;\n            margin: 10px 0px 10px 0px;\n            font-family: PT_Sans_Regular;\n            font-size: 10px;\n            background-color: #DDF4FC;\n            width: 115px;\n            height: 27px;\n            justify-content: center;\n            border-radius: 20px;\">\n                <img src=\"../../assets/image//img1.png\" alt=\"\" style=\"height: 15px;\n                position: relative;\n                top: 5px;\n                margin-right: 5px;\">\n                <p style=\"position: relative;\n                bottom: 3px;\">Ends {{buzz.ending_time}}</p>\n            </div>\n\n            <div style=\"display: flex;\">\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                width: 20px;\n                margin-right: 3px;\"> <span style=\"font-size: 12px;\n    margin-right: 7px; position: relative;\n    top: 3px;\"> {{buzz.like}} </span>\n                <img src=\"../../assets/image/img1.png\" alt=\"\" style=\"height: 20px;\n                width: 20px;\n                margin-right: 3px;\n                margin-left: 25px;\"> <span style=\"font-size: 12px;\n    margin-right: 7px;\n    position: relative;\n    top: 3px;\"> {{buzz.comment}} </span>\n            </div>\n\n        </div>\n\n        <div>\n            <ion-icon name=\"chevron-forward\" style=\"font-size: 1.5rem;\n            position: relative;\n            top: 40%;\n            color: #3bb2ec;\"></ion-icon>\n        </div>\n\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map