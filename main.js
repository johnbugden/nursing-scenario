(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johnh\Development\Web\nursing-scenario\src\main.ts */"zUnb");


/***/ }),

/***/ "0bl4":
/*!***************************************************************!*\
  !*** ./src/app/overlay/scene-buttons/change-scene.service.ts ***!
  \***************************************************************/
/*! exports provided: ChangeSceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSceneService", function() { return ChangeSceneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChangeSceneService {
    constructor() {
        this.invokeSceneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onSceneButtonClick(sceneId) {
        this.invokeSceneChange.emit(sceneId);
    }
}
ChangeSceneService.ɵfac = function ChangeSceneService_Factory(t) { return new (t || ChangeSceneService)(); };
ChangeSceneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangeSceneService, factory: ChangeSceneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeSceneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "3Fce":
/*!**********************************!*\
  !*** ./src/app/scenes/scene5.ts ***!
  \**********************************/
/*! exports provided: scene5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene5", function() { return scene5; });
const scene5 = {
    responses: [
        {
            response: "Since you said that you are not ready to stop using right now, I won’t talk to you about treatment options, but please know that we are here to help you when and if you are ready. However, I would like to see how I can help you to keep yourself as safe as possible.  May I ask what steps you take to keep yourself safe when using?",
            codeMessage: "The nurse is assessing the patient’s safety while using drugs as a form of harm reduction. Any positive changes or behaviors should be acknowledged and praised. By asking the client what they presently do to keep safe, the nurse is able to meet the patient where they are at and provide further education and information as needed. The nurse provided information about how to get treatment if and when the patient was ready. This allows the patient to know where to go for help and also provides the patient with another opportunity to engage in treatment without feeling coerced.",
            correct: true,
            src: "scene5/r1.m4v",
        },
        {
            response: "You shouldn’t do drugs but if you are going to do them, you should make sure that you are being careful.",
            codeMessage: "The nurse’s statement doesn’t promote discussion about the patient’s way of keeping safe while using drugs. This is a missed opportunity to assess the patient’s risk factors and to provide harm reduction education.",
            correct: false,
            src: "scene5/r2.m4v",
        },
        {
            response: "You know, you’re a really smart person. I hope that you learn that being an addict isn’t going to get you anywhere in life.",
            codeMessage: "This is not a therapeutic message. The nurse used stigmatizing language and was judgmental of the patient. This statement does nothing to build rapport and instead damages the relationship between the patient and health care providers.",
            correct: false,
            src: "scene5/r3.m4v",
        },
    ],
    situation: "The patient is getting ready to be transferred to the inpatient medical unit to receive intravenous antibiotic therapy. The nurse has a few more minutes to talk with the patient before they leave. Since the patient has stated they are not ready to stop using drugs, the nurse wants to ensure that the patient is reducing their harm and using drugs as safely as they can.",
    sceneId: 4
};


/***/ }),

/***/ "9FNU":
/*!************************************************************************!*\
  !*** ./src/app/overlay/response-buttons/response-buttons.component.ts ***!
  \************************************************************************/
/*! exports provided: ResponseButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseButtonsComponent", function() { return ResponseButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _select_response_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-response.service */ "AtQ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ResponseButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResponseButtonsComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const response_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeVideo(response_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const response_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", response_r1.response, " ");
} }
class ResponseButtonsComponent {
    constructor(changeResponseService) {
        this.changeResponseService = changeResponseService;
    }
    changeVideo(src) {
        this.changeResponseService.onResponseButtonClick(src);
    }
}
ResponseButtonsComponent.ɵfac = function ResponseButtonsComponent_Factory(t) { return new (t || ResponseButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_select_response_service__WEBPACK_IMPORTED_MODULE_1__["ChangeResponseService"])); };
ResponseButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResponseButtonsComponent, selectors: [["app-response-buttons"]], inputs: { currentScene: "currentScene" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 2, vars: 1, consts: [["role", "group", 1, "btn-group-vertical"], ["class", "my-1 btn btn-primary btn-lg", 3, "click", 4, "ngFor", "ngForOf"], [1, "my-1", "btn", "btn-primary", "btn-lg", 3, "click"]], template: function ResponseButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResponseButtonsComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentScene.responses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponseButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-response-buttons',
                templateUrl: './response-buttons.component.html',
                providers: []
            }]
    }], function () { return [{ type: _select_response_service__WEBPACK_IMPORTED_MODULE_1__["ChangeResponseService"] }]; }, { currentScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9PSt":
/*!**************************************!*\
  !*** ./src/app/scenes/scene-data.ts ***!
  \**************************************/
/*! exports provided: scenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scenes", function() { return scenes; });
/* harmony import */ var _scene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene1 */ "zqjT");
/* harmony import */ var _scene2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene2 */ "TJqS");
/* harmony import */ var _scene3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene3 */ "BQ0+");
/* harmony import */ var _scene4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene4 */ "b6gM");
/* harmony import */ var _scene5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene5 */ "3Fce");





const scenes = [
    _scene1__WEBPACK_IMPORTED_MODULE_0__["scene1"],
    _scene2__WEBPACK_IMPORTED_MODULE_1__["scene2"],
    _scene3__WEBPACK_IMPORTED_MODULE_2__["scene3"],
    _scene4__WEBPACK_IMPORTED_MODULE_3__["scene4"],
    _scene5__WEBPACK_IMPORTED_MODULE_4__["scene5"]
];


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-4", "text-center"], [1, "my-auto"], [1, "lead", "text-center"], [1, "my-1"], [1, "mx-auto", "mb-auto", "row", "scene-wrapper"], ["type", "button", "routerLink", "/introduction", 1, "btn", "btn-primary", "btn-lg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Caring for People Who Use Drugs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Explore the various scenarios of each nurse to see how the conversation goes. This scenario and the associated statements are based on real stories and experiences provided by people with a lived experience. As you think about each response, think about the long term effects that the interaction has not only on the patient, but on the nurse and future patients with substance use disorder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Click the button below to begin the scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Begin Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".jumbotron.overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uLm92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AtQ7":
/*!*********************************************************************!*\
  !*** ./src/app/overlay/response-buttons/select-response.service.ts ***!
  \*********************************************************************/
/*! exports provided: ChangeResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResponseService", function() { return ChangeResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChangeResponseService {
    constructor() {
        this.invokeResponseSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onResponseButtonClick(response) {
        this.invokeResponseSelection.emit(response);
    }
}
ChangeResponseService.ɵfac = function ChangeResponseService_Factory(t) { return new (t || ChangeResponseService)(); };
ChangeResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangeResponseService, factory: ChangeResponseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeResponseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "AzdY":
/*!**********************************************!*\
  !*** ./src/app/overlay/overlay.component.ts ***!
  \**********************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-buttons/scene-buttons.component */ "EVDg");
/* harmony import */ var _response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-buttons/response-buttons.component */ "9FNU");





function OverlayComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-scene-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentSceneId", ctx_r0.currentScene.sceneId)("canContinue", ctx_r0.correct);
} }
function OverlayComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How do you respond? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-response-buttons", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentScene", ctx_r2.currentScene);
} }
class OverlayComponent {
    constructor() {
        this.overlayTitle = "Situation:";
        this.initialized = false;
        this.passNextScene = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.needsRetry = false;
        this.needsResponse = true;
    }
    set currentScene(scene) {
        console.log("Current scene changed to: ", scene);
        this._currentScene = scene;
        this.overlayTitle = "Situation:";
        this.overlayText = scene.situation;
    }
    get currentScene() {
        return this._currentScene;
    }
    set hasResponded(responded) {
        this._hasResponded = responded;
        if (this.initialized) {
            if (this._hasResponded) {
                return;
            }
            else {
                this.overlayText = this.currentScene.situation;
                this.overlayTitle = "Situation: ";
            }
        }
    }
    get hasResponded() {
        return this._hasResponded;
    }
    set currentResponse(response) {
        console.log("Current response changed to: ", response);
        console.log("hasResponded: ", this.hasResponded);
        if (this.hasResponded) {
            this.correct = response.correct;
            this.needsRetry = !this.correct;
            if (this.correct) {
                this.overlayTitle = "Well done!";
            }
            else if (!this.correct) {
                this.overlayTitle = "Incorrect Response!";
            }
            this.overlayText = response.codeMessage;
        }
        this._currentResponse = response;
    }
    get currentResponse() {
        console.log("Got current response: ", this._currentResponse);
        return this._currentResponse;
    }
    ngOnInit() {
        console.log(this.scenes);
        this.initialized = true;
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(); };
OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverlayComponent, selectors: [["app-overlay"]], inputs: { currentScene: "currentScene", hasResponded: "hasResponded", currentSceneId: "currentSceneId", currentResponse: "currentResponse" }, outputs: { passNextScene: "passNextScene" }, decls: 10, vars: 4, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center", "overlay-title"], [1, "overlay-text"], [1, "my-4"], ["class", "mx-auto row scene-wrapper", 4, "ngIf", "ngIfElse"], ["notRetry", ""], [1, "mx-auto", "row", "scene-wrapper"], [3, "currentSceneId", "canContinue"], [1, "text-center"], [2, "width", "50%"], [1, "response-buttons", 3, "currentScene"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OverlayComponent_div_7_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OverlayComponent_ng_template_8_Template, 4, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overlayTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.overlayText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasResponded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_2__["SceneButtonsComponent"], _response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ResponseButtonsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-overlay",
                templateUrl: "./overlay.component.html",
            }]
    }], function () { return []; }, { currentScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasResponded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentSceneId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passNextScene: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "BQ0+":
/*!**********************************!*\
  !*** ./src/app/scenes/scene3.ts ***!
  \**********************************/
/*! exports provided: scene3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene3", function() { return scene3; });
const scene3 = {
    responses: [
        {
            response: "Thank you for sharing your barriers with me. Can you talk me through how you prepare your drugs, and how you are injecting so I can get a better sense of how I can help you to decrease your risk of getting an abscess?",
            codeMessage: "This is a therapeutic response that comes from a harm reduction approach. The nurse is not insisting on abstinence, rather wants to learn from the patient about their injection practice as a way to identify risky steps in the process. This approach builds rapport and promotes positive change in the patient’s drug use behaviors.",
            correct: true,
            src: "scene3/r1.m4v",
        },
        {
            response: "What you are doing isn’t going to stop you from getting abscesses. You need to use a new syringe every time.",
            codeMessage: "This is not a therapeutic response and doesn’t reinforce to the patient that they are being heard. The patient already identified their barriers and the nurse did not work with the patient to decrease their risks by exploring other options or safer ways to inject.",
            correct: false,
            src: "scene3/r2.m4v",
        },
        {
            response: "Your arms are a mess. You do know that you are damaging your veins and will keep getting infections if you keep doing drugs.",
            codeMessage: "This is not a therapeutic response. The nurse is demonstrating stigmatizing and condescending behaviors. This approach not only damages the nurse/patient relationship but also has a negative impact on the patient’s mental well-being.",
            correct: false,
            src: "scene3/r3.m4v",
        },
    ],
    situation: 'The nurse is sitting next to the patient examining their injection sites. The patient reports that they often use the same syringe "until it hurts too much to use because I can’t afford to buy new ones on the street" and,  “I know I am not supposed to, but sometimes I will use someone else’s syringe,  but I always make sure to wipe it on my shirt first before I use it.',
    sceneId: 2,
};


/***/ }),

/***/ "EVDg":
/*!******************************************************************!*\
  !*** ./src/app/overlay/scene-buttons/scene-buttons.component.ts ***!
  \******************************************************************/
/*! exports provided: SceneButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneButtonsComponent", function() { return SceneButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _change_scene_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-scene.service */ "0bl4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SceneButtonsComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SceneButtonsComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.changeScene(ctx_r1.currentSceneId + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SceneButtonsComponent {
    constructor(changeSceneService) {
        this.changeSceneService = changeSceneService;
    }
    changeScene(sceneId) {
        this.changeSceneService.onSceneButtonClick(sceneId);
    }
}
SceneButtonsComponent.ɵfac = function SceneButtonsComponent_Factory(t) { return new (t || SceneButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_change_scene_service__WEBPACK_IMPORTED_MODULE_1__["ChangeSceneService"])); };
SceneButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SceneButtonsComponent, selectors: [["app-scene-buttons"]], inputs: { currentSceneId: "currentSceneId", canContinue: "canContinue" }, decls: 4, vars: 1, consts: [["role", "group", 1, "btn-group-vertical"], ["class", "my-1 btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "my-1", "btn", "btn-primary", "btn-lg", 3, "click"]], template: function SceneButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SceneButtonsComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SceneButtonsComponent_Template_button_click_2_listener() { return ctx.changeScene(ctx.currentSceneId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Try a Different Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canContinue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SceneButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scene-buttons',
                templateUrl: './scene-buttons.component.html',
            }]
    }], function () { return [{ type: _change_scene_service__WEBPACK_IMPORTED_MODULE_1__["ChangeSceneService"] }]; }, { currentSceneId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canContinue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GSEy":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");




class IntroductionComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.videoSource = "assets/videos/OL.mp4"; //disable for electron build
        this.beginPlaying = false;
        this.overlayHidden = false;
    }
    onPlayerReady(api) {
        this.api = api;
    }
    playVideo() {
        this.overlayHidden = true;
        this.api.getMediaById('introVideo').play();
        this.videoEndedSubscription = this.api.getMediaById('introVideo').subscriptions.ended.subscribe(() => {
            this.videoEndedSubscription.unsubscribe();
            this.router.navigate(['/main']);
        });
    }
    ngOnDestroy() {
        const subs = [this.videoEndedSubscription];
        subs.forEach(sub => {
            this.unsubscribeEach(sub);
        });
    }
    unsubscribeEach(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 14, vars: 3, consts: [[3, "onPlayerReady"], ["type", "video/mp4", "id", "introVideo", "preload", "auto", 3, "src", "vgMedia"], ["introMedia", ""], [1, "player-overlay", 3, "hidden"], [1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "mt-auto", "text-center"], [1, "my-auto"], [1, "mx-auto", "mb-auto", "row", "scene-wrapper"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function IntroductionComponent_Template_vg_player_onPlayerReady_0_listener($event) { return ctx.onPlayerReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The nurse is caring for a 22 year old person admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana, alcohol, heroin, and cocaine. Their forearm is red and swollen and they just arrived to the emergency department 45 minutes ago. The CNA reports to you that the patient wants to see the nurse. You are about to enter the room to see the patient. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroductionComponent_Template_button_click_12_listener() { return ctx.playVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter the Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("vgMedia", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.overlayHidden);
    } }, directives: [_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgMediaDirective"]], styles: [".jumbotron.overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoiaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-introduction",
                templateUrl: "./introduction.component.html",
                styleUrls: [
                    "./introduction.component.scss"
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "LvuO":
/*!**************************************!*\
  !*** ./src/app/end/end.component.ts ***!
  \**************************************/
/*! exports provided: EndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndComponent", function() { return EndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class EndComponent {
}
EndComponent.ɵfac = function EndComponent_Factory(t) { return new (t || EndComponent)(); };
EndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EndComponent, selectors: [["app-end"]], decls: 31, vars: 0, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center"], [1, "list-group"], [1, "list-group-item"], [1, "text-center"], ["href", "https://www.youtube.com/watch?v=ZGETDcFcAbI", 1, "text-center"], ["href", "https://www.youtube.com/watch?v=uL8QyJF2wVw", 1, "text-center"], [1, "my-4"], [1, "mx-auto", "row", "scene-wrapper"], ["type", "button", "routerLink", "/resources", 1, "btn", "btn-primary", "btn-lg"]], template: function EndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reflection Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How did you feel that the patient wasn\u2019t ready to quit using drugs despite having an abscess that required hospitalization?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What other harm reduction education tips would you provide for the patient?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What stage of change does the patient appear to be in at this time? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " How would you educate the patient if they were one stage prior? One stage later?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How would you respond to your colleague if they stated \"When is bed 3 getting out of here? We don\u2019t need any more addicts in here they are so time consuming to deal with and are just frequent fliers?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "What trauma informed principles would be used during this interaction?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Here is a short video on how NOT to perform SBIRT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "https://www.youtube.com/watch?v=ZGETDcFcAbI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Here is another short video that shows an example of SBIRT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "https://www.youtube.com/watch?v=uL8QyJF2wVw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Continue to Resources and Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-end',
                templateUrl: './end.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "SCN6":
/*!**********************************************!*\
  !*** ./src/app/credits/credits.component.ts ***!
  \**********************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditsComponent {
}
CreditsComponent.ɵfac = function CreditsComponent_Factory(t) { return new (t || CreditsComponent)(); };
CreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsComponent, selectors: [["app-credits"]], decls: 26, vars: 0, consts: [[1, ""], [1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center"], [1, "list-group"], [1, "list-group-item", "text-center"], ["href", "https://johnbugden.com/"], [1, "display-10", "text-center"], [1, "text-center"], ["href", "mailto: kadion@nursing.umass.edu", 1, "text-center"], [1, "my-4"]], template: function CreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Patient - Alison Butts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nurse - Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Written by Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Application design and programming by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "John Bugden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Kimberly Dion, PhD, RN, CNE, CARN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "kadion@nursing.umass.edu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-credits",
                templateUrl: "./credits.component.html",
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0, a1) { return { "width.px": a0, "height.px": a1 }; };
class AppComponent {
    constructor() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.title = "Caring for People Who use Drugs";
    }
    onResize(event) {
        console.log(event.target.innerWidth);
        this.screenWidth = event.target.innerWidth;
        this.screenHeight = Math.round(this.screenWidth * .5625);
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = Math.round(this.screenWidth * .5625);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 4, consts: [[1, "responsive-container", 3, "ngStyle"], [1, "row"], [1, "col-sm-4"], ["routerLink", "/", 1, "col-sm-4", "text-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart Scenario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.screenWidth, ctx.screenHeight));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html"
            }]
    }], null, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "TJqS":
/*!**********************************!*\
  !*** ./src/app/scenes/scene2.ts ***!
  \**********************************/
/*! exports provided: scene2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene2", function() { return scene2; });
const scene2 = {
    responses: [
        {
            response: "Is it okay if we talk for a few minutes so I can learn more from you about your injection practice?",
            codeMessage: "This approach allows the patient to decide if they want to talk about their drug use practice and also positions the patient as the person in the power position. This approach allows the patient to see that the nurse is interested in learning and hearing from the patient.",
            correct: true,
            src: "scene2/r1.m4v",
        },
        {
            response: "I hope that you will remember how much your abscess hurts the next time you  decide to inject drugs.",
            codeMessage: "This is not a therapeutic response. This response does not demonstrate an understanding of substance use disorder and is a form of shaming the patient.",
            correct: false,
            src: "scene2/r2.m4v",
        },
        {
            response: "You know, we have a lot of really sick people in the hospital that need my attention.",
            codeMessage: "This is not a therapeutic response. This response does not demonstrate an understanding of substance use disorder and is a form of shaming the patient. The nurse is suggesting that the patient isn’t as sick as others in the hospital and doesn’t need to be there.",
            correct: false,
            src: "scene2/r3.m4v",
        },
    ],
    situation: "The nurse provides comfort treatment and checks in on the patient to see how they are doing. The patient appears to be more comfortable. The patient has visible injection marks on their arm in varying forms of healing as well as other reddened or bruised injection site marks.",
    sceneId: 1,
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "v2j/");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "cqME");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "VKRg");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlay/overlay.component */ "AzdY");
/* harmony import */ var _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlay/response-buttons/response-buttons.component */ "9FNU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlay/response-buttons/select-response.service */ "AtQ7");
/* harmony import */ var _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlay/scene-buttons/scene-buttons.component */ "EVDg");
/* harmony import */ var _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlay/scene-buttons/change-scene.service */ "0bl4");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./end/end.component */ "LvuO");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./credits/credits.component */ "SCN6");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resources/resources.component */ "pvbL");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__["ChangeResponseService"], _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__["ChangeSceneService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
            _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
            _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
            _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__["OverlayComponent"],
        _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ResponseButtonsComponent"],
        _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__["SceneButtonsComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"],
        _end_end_component__WEBPACK_IMPORTED_MODULE_16__["EndComponent"],
        _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__["CreditsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _resources_resources_component__WEBPACK_IMPORTED_MODULE_19__["ResourcesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_8__["OverlayComponent"],
                    _overlay_response_buttons_response_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ResponseButtonsComponent"],
                    _overlay_scene_buttons_scene_buttons_component__WEBPACK_IMPORTED_MODULE_12__["SceneButtonsComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                    _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_15__["IntroductionComponent"],
                    _end_end_component__WEBPACK_IMPORTED_MODULE_16__["EndComponent"],
                    _credits_credits_component__WEBPACK_IMPORTED_MODULE_17__["CreditsComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _resources_resources_component__WEBPACK_IMPORTED_MODULE_19__["ResourcesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
                    _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
                    _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
                    _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"],
                ],
                providers: [_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_11__["ChangeResponseService"], _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_13__["ChangeSceneService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "b6gM":
/*!**********************************!*\
  !*** ./src/app/scenes/scene4.ts ***!
  \**********************************/
/*! exports provided: scene4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene4", function() { return scene4; });
const scene4 = {
    responses: [
        {
            response: "On a scale of 0 to 10, with 0 being not at all ready and 10 being very ready, how ready are you to stop using drugs?",
            codeMessage: "The nurse is assessing the patient’s readiness to change behaviors as this will allow the nurse to meet the patient where they are at. The nurse can tailor their education to fit the needs of the patient as the nurse recognizes that any positive change is a step toward recovery. Since the patient is not ready to quit using drugs, it is important that the nurse understands what types of education should be provided to keep the patient as safe as possible.",
            correct: true,
            src: "scene4/r1.m4v",
        },
        {
            response: "It’s good that you came to the emergency room to get that abscess looked at before it got worse. Next time, you should come earlier so that the abscess won’t get so bad.",
            codeMessage: "Although the nurse is praising the positive behavior of coming to the hospital, they are ending the statement with a condescending and patriarchal tone that may cause the patient to become defensive and resistant to treatment.",
            correct: false,
            src: "scene4/r2.m4v",
        },
        {
            response: "There are a lot of detox and treatment centers that you can go to. When you hit rock bottom, you will learn that you can’t keep living like this.",
            codeMessage: "This is not a therapeutic response and does not meet the patient where they are at in their life. This response does not build rapport with the patient or recognize their level of motivation to change behaviors.",
            correct: false,
            src: "scene4/r3.m4v",
        },
    ],
    situation: "The nurse has provided education to the patient about clean techniques for injecting, the importance of cleaning the skin, one use/one time syringe practice, and where to get free syringes. The nurse begins to talk to the patient about keeping safe, and where they are on wanting to change their behaviors around their drug use.",
    sceneId: 3,
};


/***/ }),

/***/ "pvbL":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ResourcesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 52, vars: 0, consts: [[1, "jumbotron", "overlay", "p-xl-5"], [1, "display-6", "text-center"], [1, "list-group"], [1, "list-group-item"], ["href", "tel:1-800-662-4357"], ["href", "tel:1-800-487-4889"], ["href", "https://neverusealone.com/"], ["href", "https://harmreduction.org"], ["href", "tel:1-800-273-8255"], ["href", "tel:1-888-333-2377"], [1, "my-4"], [1, "mx-auto", "row", "scene-wrapper"], ["type", "button", "routerLink", "/credits", 1, "btn", "btn-primary", "btn-lg"]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " For information regarding substance use and substance use disorder, contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SAMHSA's National Helpline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1-800-662-HELP (4357)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "or TTY 1-800-487-4889");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Never Use Alone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "https://neverusealone.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "National Harm Reduction Coalition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "https://harmreduction.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " For information regarding mental health resources, contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "National Suicide Hotline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1-800-273-8255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "The American Foundation for Suicide Prevention");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1-888-333-2377");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "View Credits and Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resources',
                templateUrl: './resources.component.html',
                styleUrls: ['./resources.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credits/credits.component */ "SCN6");
/* harmony import */ var _end_end_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end/end.component */ "LvuO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/resources.component */ "pvbL");










const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "introduction", component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"] },
    { path: "main", component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: "end", component: _end_end_component__WEBPACK_IMPORTED_MODULE_3__["EndComponent"] },
    { path: "credits", component: _credits_credits_component__WEBPACK_IMPORTED_MODULE_2__["CreditsComponent"] },
    { path: "resources", component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_7__["ResourcesComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/scene-data */ "9PSt");
/* harmony import */ var _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overlay/response-buttons/select-response.service */ "AtQ7");
/* harmony import */ var _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overlay/scene-buttons/change-scene.service */ "0bl4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../overlay/overlay.component */ "AzdY");








class MainComponent {
    constructor(getResponseService, getSceneService, router) {
        this.getResponseService = getResponseService;
        this.getSceneService = getSceneService;
        this.router = router;
        this.title = "nursing-sim";
        this.scenes = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"];
    }
    ngOnInit() {
        this.initializeComponent();
    }
    initializeComponent() {
        this.scenes = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"];
        this.needsToRetry = false;
        this.sceneId = 0;
        this.overlayIsHidden = false;
        this.currentScene = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"][0];
        this.hasResponded = false;
        this.responsesSubscription = this.subscribeToResponses();
        this.sceneSubscription = this.subscribeToSceneChanges();
        this.correctResponse = null;
        if (this.api !== undefined) {
            console.log("API is not null", this.api);
        }
        else {
            console.log("API is Null");
        }
    }
    onPlayerReady(api) {
        this.api = api;
    }
    chooseResponse() {
        this.api.play();
    }
    subscribeToSceneChanges() {
        return this.getSceneService.invokeSceneChange.subscribe((sceneId) => {
            if (sceneId < 5) {
                this.hasResponded = false;
                this.currentScene = _scenes_scene_data__WEBPACK_IMPORTED_MODULE_1__["scenes"][sceneId];
                this.sceneId = sceneId;
                this.responsesSubscription = this.subscribeToResponses();
            }
            else {
                console.debug('Reached the end of the scenario.');
                this.router.navigate(['/end']);
            }
        });
    }
    subscribeToResponses() {
        return this.getResponseService.invokeResponseSelection.subscribe((response) => {
            console.log("New response: ", response);
            this.responsesSubscription.unsubscribe();
            this.responseOngoing = true;
            this.videoSource = "";
            this.videoSource = "assets/videos/".concat(response.src); //disable for electron build
            console.log("New video source: ", this.videoSource);
            console.log("Last VideoSRC: ", this.lastVideoSource);
            console.log("New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
            console.log("Last VideoSRC: ", this.lastVideoSource);
            this.unEndedCurrentResponse = response;
            if (this.videoSource === this.lastVideoSource) {
                this.videoSource = "assets/videos/OL.mp4";
                this.vidReadySubscription = this.api.getMediaById("singleVideo").subscriptions.canPlay.subscribe(() => {
                    this.videoSource = this.lastVideoSource;
                    this.vidReadySubscription.unsubscribe();
                    this.videoReadySubscription();
                });
            }
            else {
                this.videoReadySubscription();
            }
        });
    }
    videoReadySubscription() {
        this.vidReadySubscription = this.api
            .getMediaById("singleVideo")
            .subscriptions.canPlay.subscribe(() => {
            this.vidReadySubscription.unsubscribe();
            this.api.getMediaById("singleVideo").currentTime = 0;
            console.log("(canPay Subscription) New video source canPlay: ", this.api.getMediaById("singleVideo").canPlay);
            this.vidEndSubscription = this.api
                .getMediaById("singleVideo")
                .subscriptions.ended.subscribe(() => {
                this.vidEndSubscription.unsubscribe();
                this.responseOngoing = false;
                this.hasResponded = true;
                this.currentResponse = this.unEndedCurrentResponse;
                this.lastVideoSource = this.videoSource;
            });
            this.api.getMediaById("singleVideo").play();
        });
    }
    ngOnDestroy() {
        const subs = [this.vidEndSubscription, this.vidReadySubscription, this.sceneSubscription, this.responsesSubscription];
        subs.forEach(sub => {
            this.unsubscribeEach(sub);
        });
    }
    unsubscribeEach(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__["ChangeResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__["ChangeSceneService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 7, consts: [[3, "onPlayerReady"], ["type", "video/mp4", "id", "singleVideo", "preload", "true", "autoplay", "", 3, "src", "vgMedia"], ["media", ""], [1, "player-overlay", 3, "hidden"], [3, "currentSceneId", "hasResponded", "currentScene", "currentResponse"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function MainComponent_Template_vg_player_onPlayerReady_0_listener($event) { return ctx.onPlayerReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-overlay", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("vgMedia", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.responseOngoing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentSceneId", ctx.sceneId)("hasResponded", ctx.hasResponded)("currentScene", ctx.currentScene)("currentResponse", ctx.currentResponse);
    } }, directives: [_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_5__["VgMediaDirective"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_6__["OverlayComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-main",
                templateUrl: "./main.component.html",
            }]
    }], function () { return [{ type: _overlay_response_buttons_select_response_service__WEBPACK_IMPORTED_MODULE_2__["ChangeResponseService"] }, { type: _overlay_scene_buttons_change_scene_service__WEBPACK_IMPORTED_MODULE_3__["ChangeSceneService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqjT":
/*!**********************************!*\
  !*** ./src/app/scenes/scene1.ts ***!
  \**********************************/
/*! exports provided: scene1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scene1", function() { return scene1; });
const scene1 = {
    responses: [
        {
            response: "Why are you yelling at me? If you didn’t inject drugs than this wouldn’t have happened",
            codeMessage: "This is a stigmatizing response. Try again.",
            correct: false,
            src: "scene1/r1.m4v",
        },
        {
            response: "There isn’t anything that I can do for you. You know that you can’t have opioids. We don’t give opioids for abscesses",
            codeMessage: "This is a non-therapeutic response. Non opioid and non-pharmacological interventions could be used such as warm compresses, NSAIDS, and acetaminophen. This response may also result in the patient not seeking care the next time it is needed.",
            correct: false,
            src: "scene1/r2.m4v",
        },
        {
            response: "I can see that you are hurting. Can you tell me about your pain and I can see what I can do to help you?",
            codeMessage: "Nurse performs PQRST and administers NSAID and provides patient with a warm compress. This is a therapeutic response that acknowledges the patient’s discomfort and seeks to relieve the distress.",
            correct: true,
            src: "scene1/r3.m4v",
        },
    ],
    situation: "The nurse is caring for a 22 year old person admitted for an abscess on their forearm. The patient has been injecting drugs for the past 2 years and admits to using marijuana, alcohol, heroin, and cocaine. Their forearm is red and swollen and they just arrived to the emergency department 45 minutes ago. The CNA reports to you that the patient wants to see the nurse. You are entering the room to see the patient.",
    sceneId: 0
};


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map