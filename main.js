"use strict";
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["main"],{

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _modules_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app/app.module */ 8414);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_modules_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7865:
/*!***********************************************!*\
  !*** ./src/modules/app/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _containers_home_home_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/home/home.container */ 3015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', pathMatch: 'full', component: _containers_home_home_container__WEBPACK_IMPORTED_MODULE_0__.HomeContainer },
    { path: '**', component: _containers_home_home_container__WEBPACK_IMPORTED_MODULE_0__.HomeContainer },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8414:
/*!***************************************!*\
  !*** ./src/modules/app/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 7865);
/* harmony import */ var _containers_app_app_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/app/app.container */ 3738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-components/navbar/navbar.component */ 6052);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_components_navbar_explicit_menu_explicit_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-components/navbar/explicit-menu/explicit-menu.component */ 3533);
/* harmony import */ var _shared_components_navbar_collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-components/navbar/collapsed-menu/collapsed-menu.component */ 9992);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _containers_home_home_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/home/home.container */ 3015);
/* harmony import */ var _containers_home_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/home/skills/skills.component */ 7645);
/* harmony import */ var _containers_home_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/home/introduction/introduction.component */ 6689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_containers_app_app_container__WEBPACK_IMPORTED_MODULE_1__.AppContainer] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        { provide: Window, useValue: window }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_containers_app_app_container__WEBPACK_IMPORTED_MODULE_1__.AppContainer,
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _shared_components_navbar_explicit_menu_explicit_menu_component__WEBPACK_IMPORTED_MODULE_3__.ExplicitMenuComponent,
        _shared_components_navbar_collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_4__.CollapsedMenuComponent,
        _containers_home_home_container__WEBPACK_IMPORTED_MODULE_5__.HomeContainer,
        _containers_home_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent,
        _containers_home_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_7__.IntroductionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule] }); })();


/***/ }),

/***/ 3738:
/*!*********************************************************!*\
  !*** ./src/modules/app/containers/app/app.container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 6639);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared-components/navbar/navbar.component */ 6052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);






class AppContainer {
    constructor(mediaObserver, router) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.deviceSize$ = mediaObserver.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((mediaChanges) => mediaChanges.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((mediaChanges) => mediaChanges[0].mqAlias));
    }
}
AppContainer.ɵfac = function AppContainer_Factory(t) { return new (t || AppContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AppContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppContainer, selectors: [["amk-root"]], decls: 3, vars: 3, consts: [[3, "deviceSize", "navigateHome"]], template: function AppContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "amk-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("navigateHome", function AppContainer_Template_amk_navbar_navigateHome_0_listener() { return ctx.router.navigateByUrl("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("deviceSize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.deviceSize$));
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29udGFpbmVyLnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 3015:
/*!***********************************************************!*\
  !*** ./src/modules/app/containers/home/home.container.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeContainer": () => (/* binding */ HomeContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction/introduction.component */ 6689);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills/skills.component */ 7645);



class HomeContainer {
}
HomeContainer.ɵfac = function HomeContainer_Factory(t) { return new (t || HomeContainer)(); };
HomeContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeContainer, selectors: [["amk-home"]], decls: 2, vars: 0, template: function HomeContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "amk-introduction")(1, "amk-skills");
    } }, directives: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_0__.IntroductionComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 15vw;\n  padding-right: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb250YWluZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1dnc7XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 6689:
/*!********************************************************************************!*\
  !*** ./src/modules/app/containers/home/introduction/introduction.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroductionComponent": () => (/* binding */ IntroductionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class IntroductionComponent {
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["amk-introduction"]], decls: 17, vars: 0, consts: [["src", "/assets/images/ff7-black-mage.png", "alt", "FF7 Black Mage picture", 2, "image-rendering", "pixelated"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello, I'm Amine \uD83D\uDC4B\uD83C\uDFFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CS Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " based in Paris \uD83E\uDD50\uD83E\uDD56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I am passionate about programming since I was a child. I try also to blog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I work in software engineering, I like solutions architecture, cloud, and making video games.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Currently, I build Web apps on Azure, with Angular, NestJS, and Github CI/CD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Outside of work, I like fishing \uD83C\uDFA3, playing music \uD83C\uDFB8\uD83C\uDFB6, video games \uD83C\uDFAE, and birding \uD83D\uDCF8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  padding-bottom: 60px;\n}\n[_nghost-%COMP%]   article[_ngcontent-%COMP%] {\n  padding-right: 100px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 50px;\n  max-height: 250px;\n  width: auto;\n  min-width: 220px;\n  border-radius: 50%;\n  border: 4px solid #D3D3D3;\n}\n@media screen and (max-width: 650px) {\n  [_nghost-%COMP%] {\n    flex-direction: column-reverse;\n    margin-top: -20px;\n  }\n  [_nghost-%COMP%]   article[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: none;\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLG9CQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFuQkY7SUFvQkksOEJBQUE7SUFDQSxpQkFBQTtFQUFGO0VBRUU7SUFDRSxnQkFBQTtFQUFKO0VBR0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBREo7QUFDRiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG5cclxuICBhcnRpY2xlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0QzRDNEMzs7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcblxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 7645:
/*!********************************************************************!*\
  !*** ./src/modules/app/containers/home/skills/skills.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SkillsComponent {
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["amk-skills"]], decls: 18, vars: 0, consts: [[1, "nes-badge"], [1, "is-success"], [1, "is-error"], [1, "is-dark"], [1, "is-warning"], [1, "is-primary"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NestJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0)(7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0)(10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NoSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0)(13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Azure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0)(16, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GCP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  margin: 50px auto auto;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 10px 20px;\n}\n@media screen and (max-width: 1100px) {\n  [_nghost-%COMP%] {\n    flex-wrap: wrap;\n    margin-bottom: -20px;\n  }\n  [_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n    flex-basis: calc(33.33% - 20px);\n    margin: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFSRjtJQVNJLGVBQUE7SUFDQSxvQkFBQTtFQUNGO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLFlBQUE7RUFDSjtBQUNGIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvIGF1dG87XHJcblxyXG4gIGRpdiB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDIwcHgpO1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 9992:
/*!*********************************************************************************************!*\
  !*** ./src/modules/app/shared-components/navbar/collapsed-menu/collapsed-menu.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsedMenuComponent": () => (/* binding */ CollapsedMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CollapsedMenuComponent {
}
CollapsedMenuComponent.ɵfac = function CollapsedMenuComponent_Factory(t) { return new (t || CollapsedMenuComponent)(); };
CollapsedMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsedMenuComponent, selectors: [["amk-collapsed-menu"]], decls: 2, vars: 0, consts: [["alt", "Gravatar image example", "src", "https://www.gravatar.com/avatar?s=15", 1, "nes-avatar", "is-rounded", "is-medium", 2, "image-rendering", "pixelated"]], template: function CollapsedMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZWQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 3533:
/*!*******************************************************************************************!*\
  !*** ./src/modules/app/shared-components/navbar/explicit-menu/explicit-menu.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplicitMenuComponent": () => (/* binding */ ExplicitMenuComponent)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/constants */ 6023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ExplicitMenuComponent {
    constructor(window) {
        this.window = window;
    }
    navigateSocial(param) {
        if (param === 'gh') {
            this.window.open(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.GITHUB_PROFILE);
        }
    }
}
ExplicitMenuComponent.ɵfac = function ExplicitMenuComponent_Factory(t) { return new (t || ExplicitMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Window)); };
ExplicitMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExplicitMenuComponent, selectors: [["amk-explicit-menu"]], decls: 5, vars: 0, consts: [[1, "_menu"], [1, "_social-networks"], [3, "click"], [1, "nes-icon", "github"]], template: function ExplicitMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExplicitMenuComponent_Template_a_click_3_listener() { return ctx.navigateSocial("gh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   ._menu[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   ._menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n[_nghost-%COMP%]   ._social-networks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 40px;\n  width: 115px;\n}\n[_nghost-%COMP%]   ._social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxpY2l0LW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQ0k7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFDTjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7QUFETiIsImZpbGUiOiJleHBsaWNpdC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLl9tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLl9zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 6052:
/*!**********************************************************************!*\
  !*** ./src/modules/app/shared-components/navbar/navbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _explicit_menu_explicit_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explicit-menu/explicit-menu.component */ 3533);
/* harmony import */ var _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapsed-menu/collapsed-menu.component */ 9992);





function NavbarComponent_amk_explicit_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "amk-explicit-menu");
} }
function NavbarComponent_amk_collapsed_menu_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "amk-collapsed-menu");
} }
class NavbarComponent {
    constructor() {
        this.navigateHome = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    isDeviceSmaller(deviceSize) {
        return ['sm', 'xs'].indexOf(deviceSize) !== -1;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["amk-navbar"]], inputs: { deviceSize: "deviceSize" }, outputs: { navigateHome: "navigateHome" }, decls: 4, vars: 2, consts: [[3, "click"], [4, "ngIf"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_0_listener() { return ctx.navigateHome.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "INEAM.GITHUB.IO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_amk_explicit_menu_2_Template, 1, 0, "amk-explicit-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_amk_collapsed_menu_3_Template, 1, 0, "amk-collapsed-menu", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDeviceSmaller(ctx.deviceSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDeviceSmaller(ctx.deviceSize));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _explicit_menu_explicit_menu_component__WEBPACK_IMPORTED_MODULE_0__.ExplicitMenuComponent, _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_1__.CollapsedMenuComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  min-width: 280px;\n  margin: auto auto 20px;\n  padding-left: 15vw;\n  padding-right: 15vw;\n  border-bottom: 4px solid #D3D3D3;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0NBQUE7QUFERjtBQUdFO0VBQ0Usd0JBQUE7RUFBQSxtQkFBQTtBQURKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTV2dztcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXZ3O1xyXG5cclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI0QzRDNEMztcclxuXHJcbiAgYSB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 6023:
/*!********************************************!*\
  !*** ./src/modules/app/utils/constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV_PROFILE": () => (/* binding */ DEV_PROFILE),
/* harmony export */   "GITHUB_PROFILE": () => (/* binding */ GITHUB_PROFILE),
/* harmony export */   "MEDIUM_PROFILE": () => (/* binding */ MEDIUM_PROFILE)
/* harmony export */ });
/**
 * Social Networks profiles
 */
const GITHUB_PROFILE = 'https://github.com/ineam';
const MEDIUM_PROFILE = 'https://medium.com/@ineam';
const DEV_PROFILE = 'https://dev.to/ineam';


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map