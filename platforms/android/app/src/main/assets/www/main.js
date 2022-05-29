(self["webpackChunkHighSchoolBuzz"] = self["webpackChunkHighSchoolBuzz"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'landing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 8721)).then(m => m.LandingPageModule)
    },
    {
        path: 'terms-and-condition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-condition/terms-and-condition.module */ 7756)).then(m => m.TermsAndConditionPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 2154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacy-policy/privacy-policy.module */ 6855)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'report-abuse',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_report-abuse_report-abuse_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report-abuse/report-abuse.module */ 5631)).then(m => m.ReportAbusePageModule)
    },
    {
        path: 'add-contest',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_add-contest_add-contest_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-contest/add-contest.module */ 7662)).then(m => m.AddContestPageModule)
    },
    {
        path: 'facts-and-hacks',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_facts-and-hacks_facts-and-hacks_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./facts-and-hacks/facts-and-hacks.module */ 6206)).then(m => m.FactsAndHacksPageModule)
    },
    {
        path: 'study-group',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_study-group_study-group_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./study-group/study-group.module */ 7059)).then(m => m.StudyGroupPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./faq/faq.module */ 5083)).then(m => m.FaqPageModule)
    },
    {
        path: 'contest',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contest_contest_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contest/contest.module */ 1578)).then(m => m.ContestPageModule)
    },
    {
        path: 'contest-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contest-view_contest-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contest-view/contest-view.module */ 6853)).then(m => m.ContestViewPageModule)
    },
    {
        path: 'tell-me-a-secrete',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tell-me-a-secrete_tell-me-a-secrete_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tell-me-a-secrete/tell-me-a-secrete.module */ 6073)).then(m => m.TellMeASecretePageModule)
    },
    {
        path: 'tell-me-a-secrete-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tell-me-a-secrete-view_tell-me-a-secrete-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tell-me-a-secrete-view/tell-me-a-secrete-view.module */ 6538)).then(m => m.TellMeASecreteViewPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 3648)).then(m => m.ContactUsPageModule)
    },
    {
        path: 'facts-and-hacks-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_facts-and-hacks-view_facts-and-hacks-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./facts-and-hacks-view/facts-and-hacks-view.module */ 6281)).then(m => m.FactsAndHacksViewPageModule)
    },
    {
        path: 'birthday-shout-out',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_birthday-shout-out_birthday-shout-out_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./birthday-shout-out/birthday-shout-out.module */ 4399)).then(m => m.BirthdayShoutOutPageModule)
    },
    {
        path: 'study-group-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_study-group-list_study-group-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./study-group-list/study-group-list.module */ 2394)).then(m => m.StudyGroupListPageModule)
    },
    {
        path: 'birthday-shout-out-default',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_birthday-shout-out-default_birthday-shout-out-default_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./birthday-shout-out-default/birthday-shout-out-default.module */ 1636)).then(m => m.BirthdayShoutOutDefaultPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'birthday-wish-add',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_birthday-wish-add_birthday-wish-add_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./birthday-wish-add/birthday-wish-add.module */ 6533)).then(m => m.BirthdayWishAddPageModule)
    },
    {
        path: 'visitors-home-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_visitors-home-view_visitors-home-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./visitors-home-view/visitors-home-view.module */ 1301)).then(m => m.VisitorsHomeViewPageModule)
    },
    {
        path: 'birthday-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_birthday-detail_birthday-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./birthday-detail/birthday-detail.module */ 2045)).then(m => m.BirthdayDetailPageModule)
    },
    {
        path: 'bulletin-board',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bulletin-board_bulletin-board_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bulletin-board/bulletin-board.module */ 8110)).then(m => m.BulletinBoardPageModule)
    },
    {
        path: 'contest-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contest-detail_contest-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contest-detail/contest-detail.module */ 1609)).then(m => m.ContestDetailPageModule)
    },
    {
        path: 'contest-expired',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contest-expired_contest-expired_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contest-expired/contest-expired.module */ 799)).then(m => m.ContestExpiredPageModule)
    },
    {
        path: 'learning-curve',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_learning-curve_learning-curve_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./learning-curve/learning-curve.module */ 1454)).then(m => m.LearningCurvePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common.service */ 5620);





// import { SplashScreen } from '@ionic-native/splash-screen/ngx';

let AppComponent = class AppComponent {
    constructor(navController, common, 
    // private splashScreen: SplashScreen,
    platform) {
        this.navController = navController;
        this.common = common;
        this.platform = platform;
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: 'About HSB',
                // url: '/settings',
                img: '../assets/image/1-side-menu.png'
            },
            {
                title: 'Mission & Vision',
                // url: '/settings',
                img: '../assets/image/2-side-menu.png'
            },
            {
                title: 'Privacy & Policy',
                // url: '/settings',
                img: '../assets/image/3-side-menu.png'
            },
            {
                title: 'Terms & Conditions',
                // url: '/settings',
                img: '../assets/image/4-side-menu.png'
            },
            {
                title: 'Contact',
                // url: '/settings',
                img: '../assets/image/5-side-menu.png'
            },
            {
                title: 'Report Abuse',
                // url: '/settings',
                img: '../assets/image/6-side-menu.png'
            },
            {
                title: 'Profile',
                // url: '/settings',
                img: '../assets/image/7-side-menu.png'
            },
            {
                title: 'Notification',
                // url: '/settings',
                img: '../assets/image/8-side-menu.png'
            },
            {
                title: 'Settings',
                // url: '/settings',
                img: '../assets/image/9-side-menu.png'
            },
            {
                title: 'Log Out',
                url: '/settings',
                img: '../assets/image/10-side-menu.png'
            },
        ];
        this.initializeApp();
    }
    openPage(i) {
        const route = this.appPages[i].url;
        this.common.router.navigate([route]);
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.CheckUserDetails();
            // this.splashScreen.hide();
        });
    }
    CheckUserDetails() {
        // this.storage.get('userInfo').then((val) => {
        // if (val) {
        // this.router.navigate(['tabs']);
        this.navController.navigateRoot('landing');
        // } else {
        // this.navController.navigateRoot('');
        // }
        // });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);







// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
        providers: [
            // SplashScreen
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy, }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);




let CommonService = class CommonService {
    constructor(modalController, toastController, alertCtrl, navController, platform, route, router) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.platform = platform;
        this.route = route;
        this.router = router;
    }
    // --- Alert to show failed message ---
    showAlertFailed(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                // header: '❗️ Failed ❗️ ',
                header: ' Failed ',
                message: msg,
                mode: 'ios',
                buttons: ['Okay']
            });
            yield alert.present();
        });
    }
    // --- Alert to show success message ---
    showAlertSuccess(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                // header: ' ✅ Success ✅ ',
                header: ' Success ',
                message: msg,
                mode: 'ios',
                buttons: ['Okay']
            });
            yield alert.present();
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6436,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(to top, #B463B8, #18A3F4 95%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI0I0NjNCOCwgIzE4QTNGNCA5NSUpO1xufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu contentId=\"main-content\" type=\"overlay\">\n            <ion-content>\n                <div style=\"padding: 25px 0px 30px 0px;\n                display: flex;\n                align-items: center;\">\n                    <div style=\"width: 100px;\n                    text-align: end;\n                    background: #39ABF2;\n                    padding: 7px 7px 7px 0px;\n                    border-radius: 0px 40px 40px 0px;\">\n                        <img src=\"../assets/image/Sample_Images/11.jpeg\" alt=\"\" style=\"border-radius: 50%;\n                        height: 70px;\n                        width: 70px;\n                        object-fit: cover;\n                        border: 2px solid white;\">\n                    </div>\n                    <div style=\"margin-left: 15px;\n                    color: white;\">\n                        <H4 style=\"margin: 0px 0px 5px 0px;\n                        font-family: 'Fredoka_One';\">Abayomi Axton</H4>\n                        <p style=\"margin: 0px;\n                        font-family: 'PT_Sans_Bold';\n                        font-size: 13px;\">10 B, King Edward High School</p>\n                    </div>\n\n                </div>\n                <ion-list id=\"inbox-list\" style=\"background: transparent;\">\n                    <!-- <ion-list-header>iMatch</ion-list-header> -->\n                    <!-- <ion-searchbar class=\"menu-searchbar\" color=\"warning\"></ion-searchbar> -->\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index; \">\n                        <ion-item (click)=\"openPage(i)\" routerDirection=\"root\" lines=\"none\" detail=\"false\" style=\"--background: transparent;\">\n                            <img class=\"menu-icons\" style=\"height: 21px;\n                            margin-right: 15px;\" [src]=\"p.img\" />\n                            <!-- <ion-icon color=\"light\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"> -->\n                            <ion-label style=\"color: white;\n                            font-family: 'PT_Sans_Bold';\n                            font-size: 17px;\n                            letter-spacing: 1px;\">{{ p.title }}</ion-label>\n                        </ion-item>\n\n                    </ion-menu-toggle>\n\n                </ion-list>\n\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map