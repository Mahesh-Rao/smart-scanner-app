(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ULS2KOR\Documents\QRScanner\ScannerApp\src\main.ts */"zUnb");


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-qrscanner */ "9pzi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "qr-scanner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "*Scan your QR code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_6_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.changeCam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("debug", true)("canvasWidth", ctx_r2.canvasW)("canvasHeight", ctx_r2.canvasH)("stopAfterScan", false)("updateTime", 500);
} }
function AppComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_6_div_1_Template, 6, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_6_div_2_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.changeCameraView);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.changeCameraView);
} }
function AppComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_7_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.scanAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Scan Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.resultView);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_7_div_1_Template, 6, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_7_div_2_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.goToSubDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.goToSubDiv);
} }
class AppComponent {
    constructor(router, deviceDetector, http, titleService) {
        this.router = router;
        this.deviceDetector = deviceDetector;
        this.http = http;
        this.titleService = titleService;
        this.arrayValid = ["ULS2KOR-Sunny", "AAA4BAN-Aakanksha", "AakankshaSunny", "SunnyMalik-ULS2KOR", "EED1COB", "UKR5COB", "VV1KOR"];
        this.coolError = ["OOps Invaid !", "Whoops! we can't find you", "Invalid!", "Try Again!", "Better luck next time!",
            "Unauthorized!"];
        this.changeCameraView = true;
        this.changeCamera = 1;
        this.camVal1 = 'environment';
        this.goTo = true;
        this.goToSubDiv = true;
    }
    onPopState(event) {
        console.log('Back button pressed');
        // window.location.href="https://www.google.com" true;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    ngOnInit() {
        /* this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Shamli&appid=1de1919045fb45b62a6bb665f6dbbfd7').subscribe((response)=>{
           console.log("response from api ",response);
         },(error)=>{
           console.log("Error is ",error);
         })*/
        this.titleService.setTitle("Smart Shopping");
        this.goTo = true;
        this.deviceInfo = this.deviceDetector.getDeviceInfo();
        const isMobile = this.deviceDetector.isMobile();
        const isTablet = this.deviceDetector.isTablet();
        const isDesktopDevice = this.deviceDetector.isDesktop();
        console.log(this.deviceInfo);
        console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
        console.log(isTablet); // returns if the device us a tablet (iPad etc)
        console.log(isDesktopDevice);
        if (isMobile == true) {
            this.canvasW = "320";
            this.canvasH = "480";
        }
        else if (isTablet == true) {
            this.canvasW = "680";
            this.canvasH = "540";
        }
        else {
            this.canvasW = "1080";
            this.canvasH = "720";
        }
    }
    ngAfterViewInit() {
        this.openScanner();
    }
    openScanner() {
        this.qrScannerComponent.getMediaDevices().then(devices => {
            console.log(devices);
            const videoDevices = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                let choosenDev;
                for (const dev of videoDevices) {
                    if (dev.label.includes(this.camVal1)) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[this.changeCamera]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(result => {
            console.log(result);
            this.makeAPIcall(result);
        });
    }
    callValidInvalidAPI(finalResult) {
        if (finalResult == "valid") {
            this.goTo = false;
            this.callThread();
        }
        else {
            this.callError();
        }
    }
    changeCam() {
        this.changeCameraView = false;
        if (this.changeCamera == 1) {
            this.changeCamera = 0;
            this.camVal1 = 'front';
        }
        else {
            this.changeCamera = 1;
            this.camVal1 = 'environment';
        }
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.delay(500);
            this.changeCameraView = true;
            yield this.delay(500);
            this.openScanner();
        }))();
    }
    callError() {
        // var errIndex=(Math.floor(Math.random() * (5 - 0 + 1) + 0));  // (max-min+1)+min
        // console.log(errIndex);
        this.goTo = false;
        this.goToSubDiv = false;
        this.resultView = "Invalid";
        this.callThread();
    }
    // The above part is all about scanning the qr-code and the below one to show the output
    scanAgain() {
        this.goTo = true;
        this.callThread();
    }
    callThread() {
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Do something before delay
            //   console.log('before delay')
            yield this.delay(3000);
            //    console.log('after delay')
            this.goTo = true;
            this.goToSubDiv = true;
            yield this.delay(500);
            this.openScanner();
        }))();
    }
    makeAPIcall(codeResult) {
        this.http.get('/api/getData/', { params: { ID: codeResult } }).subscribe((response) => {
            console.log("response from api ", response);
            if (JSON.stringify(response) == JSON.stringify({ val: "valid" })) {
                this.callValidInvalidAPI("valid");
            }
            else {
                this.callValidInvalidAPI("Invalid");
            }
        }, (error) => {
            console.log("Error is ", error);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.qrScannerComponent = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("popstate", function AppComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 2, consts: [["rel", "shortcut icon", "type", "image/x-icon", "href", "favicon.ico"], ["id", "mainContainer", 4, "ngIf"], ["class", "resultantContainer", 4, "ngIf"], ["id", "mainContainer"], ["class", "qrContainer", 4, "ngIf"], [1, "qrContainer"], [1, "contain"], ["id", "qscan", 3, "debug", "canvasWidth", "canvasHeight", "stopAfterScan", "updateTime"], ["id", "scanNote"], ["id", "changeCam", 3, "click"], [1, "resultantContainer"], [4, "ngIf"], ["id", "welcomeP"], ["id", "welcomeImg"], ["id", "scanAgain", 3, "click"], ["id", "invalidImg"], ["id", "invalidP"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "BOSCH Go!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_div_6_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.goTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.goTo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"]], styles: ["#mainContainer{\r\n    width: 100%;\r\n    height: 100% \r\n    \r\n}\r\n.qrContainer{\r\n    background:white;\r\n    width: 100%;\r\n    height: 100%  \r\n}\r\n.contain{\r\n    width: 40vw;\r\n    height: 40vw;\r\n    margin-left: 27vw;\r\n    margin-top: 5vh;\r\n}\r\n#scanNote{\r\n    text-align: center;\r\n    font-size: 13px;\r\n}\r\n#changeCam{\r\n    width: 37px;\r\n    text-align: center;\r\n    padding: 10px;\r\n    margin-top: 10vh;\r\n    margin-left: -20vw;\r\n    background-image: url(\"/assets/images/baseline_flip_camera_ios_black_18dp.png\");\r\n    background-color: white;\r\n    height: 40px;\r\n    border: none;\r\n}\r\nh2{\r\n    margin-bottom: 10px;\r\n    color: red;\r\n    font-family: \"boschsans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 25px;\r\n    font-weight: 900;\r\n}\r\nhr{\r\n    background-image: url(\"/assets/images/index.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: left;\r\n    background-size: cover;\r\n    height: 12px;\r\n    margin-left: -1vw;\r\n    margin-right: -1vw;\r\n}\r\nh4{\r\n    margin-top: 2vh;\r\n    width: 100vw;\r\n    font-size: 26px;\r\n    text-align: center;\r\n}\r\n.resultantContainer{\r\n    background:white;\r\n    padding: 3.5em;\r\n    vertical-align: auto;\r\n    margin-top: 2%;\r\n}\r\n#invalidImg{\r\n    bottom: 0;\r\n    height: 200px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 200px;\r\n    background-image: url(\"/assets/images/invalid.png\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;    \r\n}\r\n#welcomeImg{\r\n    bottom: 0;\r\n    height: 200px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 200px;\r\n    background-image: url(\"/assets/images/welcome1.jpg\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;    \r\n}\r\n#welcomeP{\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin-top: -5vh;\r\n    text-align: center;\r\n}\r\n#invalidP{\r\n    font-size: 25px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin-top: -5vh;\r\n    text-align: center;\r\n}\r\n#scanAgain{\r\n    width: 100px;\r\n    text-align: center;\r\n    text-shadow: black;\r\n    background-color:lightskyblue;\r\n    height: 40px;\r\n    font-size: 13px;\r\n    border-radius: 10px;\r\n    margin:auto;\r\n    margin-top: 230px;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYOztBQUVKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLCtFQUErRTtJQUMvRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysd0VBQXdFO0lBQ3hFLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWixvREFBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJSBcclxuICAgIFxyXG59XHJcbi5xckNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJSAgXHJcbn1cclxuXHJcbi5jb250YWlue1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMjd2dztcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuI3NjYW5Ob3Rle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4jY2hhbmdlQ2Fte1xyXG4gICAgd2lkdGg6IDM3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjB2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jhc2VsaW5lX2ZsaXBfY2FtZXJhX2lvc19ibGFja18xOGRwLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5oMntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiYm9zY2hzYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2luZGV4LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMXZ3O1xyXG59XHJcblxyXG5oNHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc3VsdGFudENvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzLjVlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbiNpbnZhbGlkSW1ne1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ludmFsaWQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG4jd2VsY29tZUltZ3tcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93ZWxjb21lMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbiN3ZWxjb21lUHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IC01dmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbnZhbGlkUHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IC01dmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzY2FuQWdhaW57XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIzMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59Il19 */"], encapsulation: 2 });


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
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-qrscanner */ "9pzi");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-qrcode2 */ "bmg4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["NgQrScannerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["NgQrScannerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_qrcode2__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map