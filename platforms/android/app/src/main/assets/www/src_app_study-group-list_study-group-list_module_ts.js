(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["src_app_study-group-list_study-group-list_module_ts"],{

/***/ 6401:
/*!*********************************************************************!*\
  !*** ./src/app/study-group-list/study-group-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupListPageRoutingModule": () => (/* binding */ StudyGroupListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _study_group_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-group-list.page */ 953);




const routes = [
    {
        path: '',
        component: _study_group_list_page__WEBPACK_IMPORTED_MODULE_0__.StudyGroupListPage
    }
];
let StudyGroupListPageRoutingModule = class StudyGroupListPageRoutingModule {
};
StudyGroupListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudyGroupListPageRoutingModule);



/***/ }),

/***/ 2394:
/*!*************************************************************!*\
  !*** ./src/app/study-group-list/study-group-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupListPageModule": () => (/* binding */ StudyGroupListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _study_group_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-group-list-routing.module */ 6401);
/* harmony import */ var _study_group_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-group-list.page */ 953);







let StudyGroupListPageModule = class StudyGroupListPageModule {
};
StudyGroupListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _study_group_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyGroupListPageRoutingModule
        ],
        declarations: [_study_group_list_page__WEBPACK_IMPORTED_MODULE_1__.StudyGroupListPage]
    })
], StudyGroupListPageModule);



/***/ }),

/***/ 953:
/*!***********************************************************!*\
  !*** ./src/app/study-group-list/study-group-list.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGroupListPage": () => (/* binding */ StudyGroupListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_study_group_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./study-group-list.page.html */ 1662);
/* harmony import */ var _study_group_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-group-list.page.scss */ 8403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StudyGroupListPage = class StudyGroupListPage {
    constructor() {
        this.StudyGroups = [];
        this.colors = [];
        this.GroupIcons = [];
        this.GroupMembers = [];
    }
    ngOnInit() {
        this.StudyGroups = [
            {
                group_name: "Physics",
                group_members_count: "5",
                message_count: "1"
            },
            {
                group_name: "Chemistry",
                group_members_count: "6",
                message_count: "2"
            },
            {
                group_name: "Geometry",
                group_members_count: "7",
                message_count: "3"
            },
            {
                group_name: "Physics",
                group_members_count: "5",
                message_count: "1"
            },
            {
                group_name: "Chemistry",
                group_members_count: "6",
                message_count: "2"
            },
            {
                group_name: "Geometry",
                group_members_count: "7",
                message_count: "3"
            },
        ];
        console.log('StudyGroups:', this.StudyGroups);
        this.colors = [['#E4E6FD'], ['#FCF2D7'], ['#D4F9D8']];
        console.log('Colors:', this.colors);
        this.GroupIcons = [
            ['../../assets/image/study-grp-ic.png'],
            ['../../assets/image/study-grp-ic1.png'],
            ['../../assets/image/study-grp-ic2.png']
        ];
        console.log('GroupIcons:', this.GroupIcons);
        this.GroupMembers = [
            ["../../assets/image/study-grp-mem.png"],
            ["../../assets/image/study-grp-mem1.png"],
            ["../../assets/image/study-grp-mem2.png"]
        ];
        console.log('GroupMembers:', this.GroupMembers);
    }
};
StudyGroupListPage.ctorParameters = () => [];
StudyGroupListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-study-group-list',
        template: _raw_loader_study_group_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_study_group_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudyGroupListPage);



/***/ }),

/***/ 8403:
/*!*************************************************************!*\
  !*** ./src/app/study-group-list/study-group-list.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to right, #8a84ca, #9b94d2);\n}\n\n.main-container {\n  background-color: white;\n  border-radius: 25px 25px 0px 0px;\n  padding: 15px;\n  background-repeat: round;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LWdyb3VwLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFDSiIsImZpbGUiOiJzdHVkeS1ncm91cC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhhODRjYSwgIzliOTRkMik7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG59Il19 */");

/***/ }),

/***/ 1662:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/study-group-list/study-group-list.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button style=\"color: white\" icon=\"arrow-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Study Group</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"main-container\" style=\"padding: 20px;\">\n\n        <div style=\"background: url(../../assets/image/study-grp-btn.png);\n        margin: 5px 0px 23px 0px;\n        height: 45px;\n        text-align: center;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        color: white;\n        font-family: 'Fredoka_One';\">\n            <h5 style=\"margin: 0px;\n            position: relative;\n            top: 11px;\">Create study Group</h5>\n        </div>\n\n        <div style=\"display: flex;\n        border-radius: 20px;\n        margin-bottom: 15px;\" *ngFor=\"let group of StudyGroups; let i=index;\" [style]=\"'background:' + colors[i%3]\">\n            <div style=\"padding: 8px 12px 8px 8px;\n            border-right: 0.5px solid lightgrey;\">\n                <div>\n                    <img [src]=\"GroupIcons[i%3]\" alt=\"\" style=\"height: 80px;\">\n                </div>\n            </div>\n\n            <div style=\"padding: 0px 15px 0px 15px;\">\n                <h5 style=\"margin-bottom: 15px; font-family: 'Fredoka_One';\">{{group.group_name}}</h5>\n                <img [src]=\"GroupMembers[i%3]\" alt=\"\" style=\"height: 33px;\"> <span style=\"margin-left: 10px; color: grey; font-size: 13px;\"> +{{group.group_members_count}} members</span>\n            </div>\n\n            <div>\n                <ion-badge style=\"height: 30px;\n                width: 30px;\n                border-radius: 50%;\n                text-align: center;\n                --background: linear-gradient(to right, #9676C2, #BA67B7);\n                --padding-top: 8px;\n                position: relative;\n                top: 30px;\"> {{group.message_count}} </ion-badge>\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_study-group-list_study-group-list_module_ts.js.map