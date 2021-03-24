(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Gnosis-Projects\GeoMakeItStudio\src\main.ts */"zUnb");


/***/ }),

/***/ "0IWs":
/*!*********************************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DataDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDesignerComponent", function() { return DataDesignerComponent; });
/* harmony import */ var _raw_loader_data_designer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./data-designer.component.html */ "0Vtz");
/* harmony import */ var _data_designer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-designer.component.css */ "xenw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _designer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../designer.service */ "I2vV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataDesignerComponent = /** @class */ (function () {
    function DataDesignerComponent(fb, service, location) {
        this.fb = fb;
        this.service = service;
        this.location = location;
    }
    DataDesignerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataDesigner.subscribe(function (data) {
            _this.editor = data;
        });
        this.dataFile.subscribe(function (data) {
            _this.data = data;
            _this.initializeForm();
            _this.fillForm(data);
        });
        /*this.service.getAPi().subscribe(data => {
          console.log(data);
        })*/
    };
    DataDesignerComponent.prototype.initializeForm = function () {
        this.dataForm = this.fb.group({});
    };
    DataDesignerComponent.prototype.isObject = function (obj) {
        return (obj instanceof Object);
    };
    Object.defineProperty(DataDesignerComponent.prototype, "dataFromForm", {
        get: function () {
            return this.dataForm;
        },
        enumerable: false,
        configurable: true
    });
    // make the sorting in ngFor, like JSON sorting
    DataDesignerComponent.prototype.asIsOrderInPipe = function (a, b) {
        return 1;
    };
    DataDesignerComponent.prototype.fillForm = function (obj) {
        for (var item in obj) {
            if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
                this.dataForm.addControl(item, this.fb.group({}));
                for (var value in obj[item]) {
                    if (typeof (obj[item])[value] === 'object' && !Array.isArray((obj[item])[value])) {
                        this.dataForm.get(item).addControl(value, this.fb.group({}));
                    }
                    if (Array.isArray((obj[item])[value])) {
                        this.dataForm.get(item).addControl(value, this.fb.array((obj[item])[value]));
                    }
                    if (typeof (obj[item])[value] !== 'object') {
                        this.dataForm.get(item).addControl(value, this.fb.control(''));
                        this.dataForm.get(item).get(value).setValue((obj[item])[value]);
                    }
                }
            }
            if (Array.isArray(obj[item])) {
                this.dataForm.addControl(item, this.fb.array(obj[item]));
            }
            if (typeof obj[item] !== 'object') {
                this.dataForm.addControl(item, this.fb.control(''));
                (this.dataForm.get(item)).setValue(obj[item]);
            }
        }
    };
    DataDesignerComponent.prototype.onSubmit = function () {
        console.log(this.dataForm.controls);
    };
    DataDesignerComponent.prototype.removeUnderscore = function (str) {
        return str.replace(/_/g, ' ');
    };
    DataDesignerComponent.prototype.removeStringBeforeDot = function (str) {
        if (str === '') {
            return str;
        }
        else {
            var index = str.indexOf('.') + 1;
            if (index === 0) {
                return str;
            }
            else {
                return str.substring(index, (str.length));
            }
        }
    };
    DataDesignerComponent.prototype.isEmpty = function (value) {
        if (value.length === 0) {
            return true;
        }
        return false;
    };
    DataDesignerComponent.prototype.deleteGroup = function (groupId) {
        this.service.variable = groupId;
        this.dataForm.removeControl(groupId);
        this.dataFromForm.removeControl(groupId);
    };
    DataDesignerComponent.prototype.addGroup = function () {
        var _a;
        var name = this.getNameForNewFormGroup(this.dataForm.controls); // create name //
        this.dataForm.addControl(name, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({})); // add new formGroup to form //
        (_a = this.dataFromForm) === null || _a === void 0 ? void 0 : _a.addControl(name, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({})); // add new FormGroup, to display it//
    };
    // create name for the new formGroup //
    DataDesignerComponent.prototype.getNameForNewFormGroup = function (form) {
        var name = '';
        var index = '';
        for (var item in form) {
            name = item; // keep the name of last fromGroup
        }
        if (name === '' && this.service.variable !== '') { // if we remove all previous group names, get from service the stored name //
            name = this.service.variable.substring(0, this.service.variable.length - 1);
            return name + 1;
        }
        else if (name !== '') {
            index = name.substring(name.length - 1, name.length); // keep the number of last formGroup
            name = name.substring(0, name.length - 1); // remove from name, the number of last FormGroup
            return name + (parseInt(index, 10) + 1); // append number, of Last formGroup plus 1, to name //
        }
        else {
            return 'card_' + 1;
        }
    };
    DataDesignerComponent.prototype.onCancel = function () {
        this.location.back();
    };
    DataDesignerComponent.prototype.passValueToChild = function (value) {
        if (Array.isArray(value) && value.length > 0) {
            return value;
        }
    };
    DataDesignerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _designer_service__WEBPACK_IMPORTED_MODULE_4__["DesignerService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    DataDesignerComponent.propDecorators = {
        dataDesigner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DataDesignerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-data-designer',
            template: _raw_loader_data_designer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_data_designer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _designer_service__WEBPACK_IMPORTED_MODULE_4__["DesignerService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], DataDesignerComponent);
    return DataDesignerComponent;
}());



/***/ }),

/***/ "0JaD":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/edit-plugin/edit-plugin.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content align-middle\">\r\n    <div class=\"container\">\r\n        <div class=\"row w-50\" style=\"margin-left: 270px\">\r\n            <div class=\"col-12 \">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"card\" style=\"height: 600px\">\r\n                            <div class=\"card-header card-header-danger\" >\r\n                                <h4 class=\"card-title\">Plugin</h4>\r\n                                <p class=\"card-category\"></p>\r\n                            </div>\r\n                            <div class=\"row m-2\">\r\n                                <div class=\"col-12\" *ngIf=\"descriptionObject\">\r\n                                    <app-details-card [details]=\"descriptionObject\"></app-details-card>\r\n                                </div>\r\n                                <div class=\"col-12\" *ngIf=\"!descriptionObject\">\r\n                                    <h3>- no plugin -</h3>\r\n                                </div>\r\n\r\n                                <div class=\"row m-2\">\r\n                                    <div class=\"col-12 input-group\" >\r\n                                        <mat-form-field appearance=\"outline\" [style.width.px]=\"465\">\r\n                                        <mat-label>Choose a file</mat-label>\r\n                                        <ngx-mat-file-input placeholder=\"Choose a file\" [disabled]=\"false\"></ngx-mat-file-input>\r\n                                        <mat-icon matSuffix class=\"text-info\">folder</mat-icon>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-12 m-2\">\r\n                                    <button type=\"reset\" class=\"btn btn-secondary m-2\" (click) = onCancel()>Back</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "0KfP":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-group/tab-group.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group>\r\n    <mat-tab label=\"{{content}}\">{{content}}</mat-tab>\r\n</mat-tab-group>\r\n");

/***/ }),

/***/ "0Vtz":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center\" *ngIf=\"!editor\">\n            <span class=\"text-danger\" style=\"font-weight: bold\">\n                -empty designer file-\n            </span>\n        </div>\n        <div class=\"col-12 mt-4\" *ngIf=\"editor\">\n            <div class=\"row \" style=\"width: 100%\">\n                <div class=\"col-12 mb-4\">\n                    <div *ngIf=\"editor?.page_title\" class=\"text-center\">\n                        <p>\n                            <span class=\"text-center  h4\" style=\"font-weight: bold\">\n                                {{editor.page_title}}\n                            </span>\n                        </p>\n                        <span *ngIf=\"editor.page_description\" class=\"text-center\">\n                            {{editor.page_description}}\n                        </span>\n                    </div>\n                    <div *ngFor=\"let dataResult of dataFromForm?.controls | keyvalue: asIsOrderInPipe; let i = index\">\n                        <div>\n                            <div class=\"row mt-4\">\n                                <div class=\"col-11\">\n                                    <p>\n                                        <button  class=\"btn btn-outline-info\" type=\"button\" style=\"width: 100%\" data-toggle=\"collapse\" [attr.data-target]=\"'#tab' + i\" aria-expanded=\"false\" [attr.aria-controls]=\"'tab' + i\">\n                                                {{removeUnderscore(dataResult?.key)}}\n                                        </button>\n                                    </p>\n                                </div>\n                                <div class=\"col-1\">\n                                    <p>\n                                        <button class=\"btn btn-danger btn-just-icon\" type=\"button\" (click) = \"deleteGroup(dataResult.key)\">\n                                            X\n                                        </button>\n                                    </p>\n                                </div>\n                            </div>\n                            <div *ngFor=\"let designerResult of editor?.designer | keyvalue: asIsOrderInPipe; let y = index\">\n                                <div class=\"collapse\" id=\"tab{{i}}\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12\">\n                                            {{designerResult?.value['title']}}\n                                            <app-tooltip-info-circle *ngIf=\"designerResult.value['tooltip']\" [tooltip] = \"designerResult.value['tooltip']\"></app-tooltip-info-circle>\n                                            <div class=\"border p-2 shadow\">\n                                                <div *ngFor=\"let designerItem of editor?.designer[y].components | keyvalue: asIsOrderInPipe; let z = index\">\n                                                    <div  class=\"row\">\n                                                        <div class=\"col-6\">\n                                                            <div class=\"form-control mb-2 p-2\" style=\"background-color: skyblue\">\n                                                                {{removeStringBeforeDot(removeUnderscore(designerItem.key)) }}\n                                                                <app-tooltip-info-circle *ngIf=\"designerItem.value['tooltip']\" [tooltip] = \"designerItem.value['tooltip']\"></app-tooltip-info-circle>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"col-6\">\n                                                            <app-input [formName]=\"dataForm\"\n                                                                       [items]=\"designerItem.value['items']\"\n                                                                       [groupName] = \"dataResult.key\"\n                                                                       [value] = \"passValueToChild(dataFromForm.controls[dataResult.key].get(designerItem.key)?.value)\"\n                                                                       [type] = \"designerItem.value['type']\"\n                                                                       [placeholder] = \"designerItem.value['placeholder']\"\n                                                                       [validation] = \"designerItem.value['validation']\"\n                                                                       [controlName]=\"designerItem.key\">\n                                                            </app-input>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row\">\n                        <div class=\"col-8\">\n                            <button class=\"btn btn-info\" type=\"button\" (click) = \"addGroup()\">\n                                add\n                            </button>\n                        </div>\n                        <div class=\"col-4\">\n                            <div class=\"text-right\">\n                                <button class=\"btn btn-success\" type=\"submit\" (click) = \"onSubmit()\">\n                                     Save Changes\n                                </button>\n                                <button class=\"btn btn-outline-danger ml-2\" type=\"button\" (click) = \"onCancel()\">\n                                    Cancel\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "1RUa":
/*!***************************************************!*\
  !*** ./src/app/tab-group/tab-group.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1ncm91cC90YWItZ3JvdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2X3B":
/*!**************************************************************!*\
  !*** ./src/app/plugins/plugin-card/plugin-card.component.ts ***!
  \**************************************************************/
/*! exports provided: PluginCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginCardComponent", function() { return PluginCardComponent; });
/* harmony import */ var _raw_loader_plugin_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./plugin-card.component.html */ "iWdy");
/* harmony import */ var _plugin_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin-card.component.css */ "IxHd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _games_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../games/game.service */ "K8Jx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _classes_plugins_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/plugins/plugin */ "rOuc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PluginCardComponent = /** @class */ (function () {
    function PluginCardComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    PluginCardComponent.prototype.ngOnInit = function () {
        console.log('pluginCard: ' + this.service.object.id);
    };
    PluginCardComponent.prototype.deletePlugin = function (event) {
        return event;
    };
    PluginCardComponent.prototype.goToConfig = function () {
        this.service.object = {
            plugin: this.plugin,
            game: this.service.object
        };
        this.router.navigate(['/games/plugins/config']);
    };
    PluginCardComponent.ctorParameters = function () { return [
        { type: _games_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PluginCardComponent.propDecorators = {
        plugin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    PluginCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-plugin-card',
            template: _raw_loader_plugin_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_plugin_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_games_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PluginCardComponent);
    return PluginCardComponent;
}());



/***/ }),

/***/ "2mbj":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/button-toggles/button-toggles.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>  <!-- button system for My-games page -->\r\n    <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\r\n        <mat-button-toggle matTooltip=\"Read view of the game\" value=\"\">\r\n            <i class=\"material-icons text-gray\">\r\n                visibility\r\n            </i>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle matTooltip=\"View plugins of the game\" (click) = \"sendDataToPluginsForGames()\">   <!-- if button clicked, go to plugins-for-game component -->\r\n            <i class=\"material-icons text-info\">\r\n                extension\r\n            </i>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle matTooltip=\"Build and download the game\" value=\"\">\r\n            <i class=\"material-icons text-primary\">\r\n                build\r\n            </i>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle matTooltip=\"Edit the game\" value=\"underline\">\r\n            <i class=\"material-icons text-success\">\r\n                sticky_note_2\r\n            </i>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle>\r\n            <app-delete-pop-up [element] = \"service.object\" (delete) = \"onDelete($event)\"> <!-- Component for delete procedure, with pop-up warning window -->\r\n            </app-delete-pop-up>\r\n        </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n</p>\r\n");

/***/ }),

/***/ "3Buq":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>\n");

/***/ }),

/***/ "3XvB":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-card/details-card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!details.title\">\r\n    <div class=\"text-center text-danger\"> - no plugIn - {{noPlugInContent()}}</div>\r\n</div>\r\n<div class = \"card shadow border\" *ngIf=\"details.title\" style=\"height:330px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"p-2\">\r\n                <div class=\"mat-h2 text-center\">\r\n                    {{details.title}}\r\n                </div>\r\n                <div class=\"mat-h5 text-gray text-center\">\r\n                    {{details.subTitle}}\r\n                </div>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2\">\r\n                <strong>Version</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2 text-right\">\r\n                {{details.version}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2\">\r\n                <strong>Main</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2 text-right\">\r\n                {{details.main}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2\">\r\n                <strong>Status</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2 text-right\">\r\n                {{details.status}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2\">\r\n                <strong>Updated at</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2 text-right\">\r\n                {{details.updatedAt}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2\">\r\n                <strong>Created at</strong>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div class=\"p-2 text-right\">\r\n                {{details.createdAt}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "4+78":
/*!*************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugins-for-games.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbnMtZm9yLWdhbWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.css */ "C+6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (message, notificationType) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: notificationType,
            timer: 500,
            placement: {
                from: 'top',
                align: 'right' // notification alignment
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return []; };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "5eJu":
/*!***************************************************************!*\
  !*** ./src/app/plugins/edit-plugin/edit-plugin.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvZWRpdC1wbHVnaW4vZWRpdC1wbHVnaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "7E1S":
/*!**************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/configs.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA");
/* harmony import */ var _icons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component.css */ "3Buq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-icons',
            template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_icons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "8Z47":
/*!************************************************************!*\
  !*** ./src/app/button-toggles/button-toggles.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonTogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTogglesComponent", function() { return ButtonTogglesComponent; });
/* harmony import */ var _raw_loader_button_toggles_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./button-toggles.component.html */ "2mbj");
/* harmony import */ var _button_toggles_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-toggles.component.css */ "chv8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _games_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../games/game.service */ "K8Jx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ButtonTogglesComponent = /** @class */ (function () {
    function ButtonTogglesComponent(service, router) {
        this.service = service;
        this.router = router;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ButtonTogglesComponent.prototype.ngOnInit = function () {
    };
    // if clicked, delete button, return true to parent component //
    ButtonTogglesComponent.prototype.onDelete = function (data) {
        if (data) {
            this.delete.emit(true);
        }
    };
    // send gameObject to pluginForGames, in order to add or edit plugins of your game//
    ButtonTogglesComponent.prototype.sendDataToPluginsForGames = function () {
        var _a;
        this.service.object = this.game;
        console.log('buttonTogle: ' + ((_a = this.game) === null || _a === void 0 ? void 0 : _a.id));
        this.router.navigate(['/games/plugins']);
    };
    ButtonTogglesComponent.ctorParameters = function () { return [
        { type: _games_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ButtonTogglesComponent.propDecorators = {
        delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        game: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ButtonTogglesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-button-toggles',
            template: _raw_loader_button_toggles_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_button_toggles_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_games_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ButtonTogglesComponent);
    return ButtonTogglesComponent;
}());



/***/ }),

/***/ "93z2":
/*!************************************************!*\
  !*** ./src/app/studio/dashboard.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRpby9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9HCb":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/create/create-plugin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6 \">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">New Plugin</h4>\r\n                        <p class=\"card-category\">Type a unique identifier</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"col-sm-12\">\r\n                            <form [formGroup]=\"createPluginForm\">\r\n                                <mat-form-field class=\"mb-4\">\r\n                                    <input class=\"mb-2\" matInput type=\"text\" placeholder=\"Identifier\" #identifier formControlName=\"identifier\" />\r\n                                    <mat-error *ngIf = \"createPluginForm.controls['identifier'].value === ''\">Identifier is required</mat-error>\r\n                                    <mat-error *ngIf = \"createPluginForm.get('identifier').value?.length < 3 || createPluginForm.get('identifier').value?.length > 32\">Identifier must have min-3 to max-32 characters</mat-error>\r\n                                    <mat-error *ngIf = \"createPluginForm.controls['identifier'].errors?.pattern\">Identifier must start with an alphabetic character and contains only lowercase</mat-error>\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"mb-4\">\r\n                                    <input class=\"mb-2\" matInput type=\"text\" placeholder=\"Title of plugin\" #title formControlName=\"title\" />\r\n                                    <mat-error *ngIf = \"createPluginForm.controls['title'].value === ''\">Title is required</mat-error>\r\n                                </mat-form-field>\r\n                                <mat-form-field>\r\n                                    <textarea class=\"mb-2\" matInput placeholder=\"Description\" #description formControlName=\"description\"></textarea>\r\n                                </mat-form-field>\r\n                                <button type=\"submit\" class=\"btn btn-info m-2\" (click) = \"onSubmit()\" [disabled]=\"!createPluginForm.valid\">Save</button>\r\n                                <button type=\"reset\" class=\"btn btn-secondary m-2\" (click) = onCancel()>Cancel</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "A5Di":
/*!******************************************************!*\
  !*** ./src/app/auth/login/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" >\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-3.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <!--<div class=\"sidebar-background\" style=\"background-image: url(../../../assets/img/sidebar-3.jpg)\"></div>-->\r\n    </div>\r\n    <div class=\"main-panel bg-image\">\r\n        <app-navbar ></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"fixed-plugin\">\r\n        <div class=\"dropdown show-dropdown open show\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>\r\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"ml-auto mr-auto\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-41.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Download Free\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Buy Pro\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\r\n                  <div>\r\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\r\n                        View Documentation\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>-->\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "AKSw":
/*!**********************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/information/information.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "AkdS":
/*!**********************************************************!*\
  !*** ./src/app/delete-pop-up/delete-pop-up.component.ts ***!
  \**********************************************************/
/*! exports provided: DeletePopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePopUpComponent", function() { return DeletePopUpComponent; });
/* harmony import */ var _raw_loader_delete_pop_up_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./delete-pop-up.component.html */ "YHgh");
/* harmony import */ var _delete_pop_up_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-pop-up.component.css */ "gNMG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeletePopUpComponent = /** @class */ (function () {
    function DeletePopUpComponent(location) {
        this.location = location;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    DeletePopUpComponent.prototype.ngOnInit = function () {
    };
    DeletePopUpComponent.prototype.onCancel = function () {
        this.location.back();
    };
    DeletePopUpComponent.prototype.onDelete = function () {
        this.delete.emit(true);
        window.close();
    };
    DeletePopUpComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    DeletePopUpComponent.propDecorators = {
        element: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    DeletePopUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-delete-pop-up',
            template: _raw_loader_delete_pop_up_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_delete_pop_up_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DeletePopUpComponent);
    return DeletePopUpComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'https://api.geomakeit.com/v1/'
};


/***/ }),

/***/ "B+2+":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/games/games.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 text-right\">\r\n                <a class=\"btn btn-info\" role=\"button\" routerLinkActive=\"active\" href=\"#/games/create\">+ New</a>  <!-- Create new game if button clicked -->\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\" >\r\n                        <h4 class=\"card-title\">My Games</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive table-full-width\">\r\n                        <table class=\"table\" >\r\n                            <thead class=\"text-danger\">\r\n                                <th>Title</th>\r\n                                <th>Description</th>\r\n                            </thead>\r\n                            <tbody *ngIf=\"error?.message !== null\">\r\n                                <span class=\"m-2\" style=\"font-weight: bold\">\r\n                                    {{error?.message}}\r\n                                </span>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"error?.message === null\">\r\n                                <tr *ngFor = \"let game of listOfGames\" class=\"mat-h3\">   <!-- Display the list of user's games  -->\r\n                                    <td *ngIf=\"game.title !== ''\">{{game.title}}</td>\r\n                                    <td *ngIf=\"game.description !== ''\">{{game.description}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <app-button-toggles [game] = \"game\" (click)=\"onClick(game)\" (delete) = \"onDelete($event)\" ></app-button-toggles>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"listOfGames?.length === 0\" >\r\n                                    <span class=\"m-2\" style=\"font-weight: bold\">\r\n                                        No games found\r\n                                    </span>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <app-spinner [visible]=\"showSpinner\"></app-spinner>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "BMoy":
/*!********************************************!*\
  !*** ./src/app/global-http.interceptor.ts ***!
  \********************************************/
/*! exports provided: GlobalHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHttpInterceptor", function() { return GlobalHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_error_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/error/error */ "Uk1d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GlobalHttpInterceptor = /** @class */ (function () {
    function GlobalHttpInterceptor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    GlobalHttpInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // Todo  add Uth Token Service //
        localStorage.setItem('token', '1|XxqPWqgRFk9yj9B7KKmwRBOFziaeiaKsHYb235HA');
        var requestWithAuth = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        return next.handle(requestWithAuth).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            if (error.status === 401) { // if user is not authenticated, redirect to login form
                _this.auth.logout();
                _this.router.navigate(['login']);
            }
            var errorMessage = new _classes_error_error__WEBPACK_IMPORTED_MODULE_3__["Error"]();
            if (error.error instanceof ErrorEvent) {
                errorMessage.message = error.message;
                errorMessage.code = error.status;
            }
            else {
                errorMessage.message = error.statusText;
                errorMessage.code = error.status;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    };
    GlobalHttpInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    GlobalHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], GlobalHttpInterceptor);
    return GlobalHttpInterceptor;
}());



/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./spinner.component.html */ "V+DM");
/* harmony import */ var _spinner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.css */ "n93O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent.ctorParameters = function () { return []; };
    SpinnerComponent.propDecorators = {
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-spinner',
            template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "Cl5i":
/*!************************************************************!*\
  !*** ./src/app/error-handling/error-handling.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorHandlingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingComponent", function() { return ErrorHandlingComponent; });
/* harmony import */ var _raw_loader_error_handling_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./error-handling.component.html */ "cksQ");
/* harmony import */ var _error_handling_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-handling.component.css */ "knt0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_error_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/error/error */ "Uk1d");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorHandlingComponent = /** @class */ (function () {
    function ErrorHandlingComponent() {
    }
    ErrorHandlingComponent.prototype.ngOnInit = function () {
    };
    ErrorHandlingComponent.prototype.errorResponse = function () {
        var _a;
        return (_a = this.errorCode) === null || _a === void 0 ? void 0 : _a.message;
    };
    ErrorHandlingComponent.ctorParameters = function () { return []; };
    ErrorHandlingComponent.propDecorators = {
        errorCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ErrorHandlingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-error-handling',
            template: _raw_loader_error_handling_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_error_handling_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorHandlingComponent);
    return ErrorHandlingComponent;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "DYla":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FHow":
/*!******************************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/config-designer/designer.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerComponent", function() { return DesignerComponent; });
/* harmony import */ var _raw_loader_designer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./designer.component.html */ "Pka1");
/* harmony import */ var _designer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer.component.css */ "hh+X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(fb, location) {
        this.fb = fb;
        this.location = location;
    }
    DesignerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designerFile.subscribe(function (data) {
            _this.designer = data;
        });
        this.dataFile.subscribe(function (data) {
            _this.data = data;
            _this.initializeForm();
            _this.fillForm(data);
        });
    };
    DesignerComponent.prototype.initializeForm = function () {
        this.dataForm = this.fb.group({});
    };
    DesignerComponent.prototype.isObject = function (obj) {
        return (obj instanceof Object);
    };
    // make the sorting in ngFor, like JSON sorting
    DesignerComponent.prototype.asIsOrderInPipe = function (a, b) {
        return 1;
    };
    DesignerComponent.prototype.fillForm = function (obj) {
        for (var item in obj) {
            if (typeof obj[item] === 'object' && !Array.isArray(obj[item])) {
                this.dataForm.addControl(item, this.fb.group({}));
                for (var value in obj[item]) {
                    if (typeof (obj[item])[value] === 'object' && !Array.isArray((obj[item])[value])) {
                        this.dataForm.get(item).addControl(value, this.fb.group({}));
                    }
                    if (Array.isArray((obj[item])[value])) {
                        this.dataForm.get(item).addControl(value, this.fb.array((obj[item])[value]));
                    }
                    if (typeof (obj[item])[value] !== 'object') {
                        this.dataForm.get(item).addControl(value, this.fb.control(''));
                        this.dataForm.get(item).get(value).setValue((obj[item])[value]);
                    }
                }
            }
            if (Array.isArray(obj[item])) {
                this.dataForm.addControl(item, this.fb.array(obj[item]));
            }
            if (typeof obj[item] !== 'object') {
                this.dataForm.addControl(item, this.fb.control(''));
                (this.dataForm.get(item)).setValue(obj[item]);
            }
        }
    };
    DesignerComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.dataForm.value));
    };
    DesignerComponent.prototype.removeUnderscore = function (str) {
        return str.replace(/_/g, ' ');
    };
    DesignerComponent.prototype.removeStringBeforeDot = function (str) {
        if (str === '') {
            return str;
        }
        else {
            var index = str.indexOf('.') + 1;
            return str.substring(index, (str.length));
        }
    };
    DesignerComponent.prototype.isEmpty = function (value) {
        if (value.length === 0) {
            return true;
        }
        return false;
    };
    DesignerComponent.prototype.onCancel = function () {
        this.location.back();
    };
    DesignerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    DesignerComponent.propDecorators = {
        designerFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DesignerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-designer',
            template: _raw_loader_designer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_designer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], DesignerComponent);
    return DesignerComponent;
}());



/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "FuDS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/create/create-game.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6 \">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">New Game</h4>\r\n                        <p class=\"card-category\">Enter title and description for your new game.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"col-sm-12\">\r\n                            <form [formGroup]=\"createGameForm\">\r\n                                <mat-form-field class=\"example-full-width\" style=\"height:80px\">\r\n                                    <input class=\"mb-2\" matInput type=\"text\" placeholder=\"Title\" #title formControlName=\"title\" />\r\n                                    <mat-error >Title is required</mat-error> <!-- validation -->\r\n                                </mat-form-field>\r\n                                <mat-form-field class=\"example-full-width\" style=\"height:80px\">\r\n                                    <textarea class=\"mb-2\" matInput type=\"text\" placeholder=\"Description\" #description formControlName=\"description\" ></textarea>\r\n                                    <mat-error>Description is required</mat-error> <!-- validation -->\r\n                                </mat-form-field>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-info m-4\" (click) = \"onSubmit()\" [disabled]=\"!createGameForm.valid\">Save</button>\r\n                                <button type=\"reset\" class=\"btn btn-secondary m-2\" (click) = onCancel()>Cancel</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HfF2":
/*!***********************************************!*\
  !*** ./src/app/studio/dashboard.component.ts ***!
  \***********************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "phJp");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "93z2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    /* startAnimationForLineChart(chart){
         let seq: any, delays: any, durations: any;
         seq = 0;
         delays = 80;
         durations = 500;
   
         chart.on('draw', function(data) {
           if(data.type === 'line' || data.type === 'area') {
             data.element.animate({
               d: {
                 begin: 600,
                 dur: 700,
                 from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                 to: data.path.clone().stringify(),
                 easing: Chartist.Svg.Easing.easeOutQuint
               }
             });
           } else if(data.type === 'point') {
                 seq++;
                 data.element.animate({
                   opacity: {
                     begin: seq * delays,
                     dur: durations,
                     from: 0,
                     to: 1,
                     easing: 'ease'
                   }
                 });
             }
         });
   
         seq = 0;
     };
     startAnimationForBarChart(chart){
         let seq2: any, delays2: any, durations2: any;
   
         seq2 = 0;
         delays2 = 80;
         durations2 = 500;
         chart.on('draw', function(data) {
           if(data.type === 'bar'){
               seq2++;
               data.element.animate({
                 opacity: {
                   begin: seq2 * delays2,
                   dur: durations2,
                   from: 0,
                   to: 1,
                   easing: 'ease'
                 }
               });
           }
         });
   
         seq2 = 0;
     };*/
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        /*const dataDailySalesChart: any = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
  
       const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }
  
        const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
  
        this.startAnimationForLineChart(dailySalesChart);
  
  
        /!* ----------==========     Completed Tasks Chart initialization    ==========---------- *!/
  
        const dataCompletedTasksChart: any = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
  
       const optionsCompletedTasksChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }
  
        const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
  
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
  
  
  
        /!* ----------==========     Emails Subscription Chart initialization    ==========---------- *!/
  
        const datawebsiteViewsChart = {
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
  
          ]
        };
        const optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        };
        const responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
  
        // start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);*/
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Hykb":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "I2vV":
/*!************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/designer.service.ts ***!
  \************************************************************************************/
/*! exports provided: DesignerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerService", function() { return DesignerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignerService = /** @class */ (function () {
    function DesignerService(http) {
        this.http = http;
    }
    Object.defineProperty(DesignerService.prototype, "variable", {
        get: function () {
            return this.item;
        },
        set: function (value) {
            this.item = value;
        },
        enumerable: false,
        configurable: true
    });
    DesignerService.prototype.getConfigDesigner = function () {
        var url = 'assets/dummyJson/defaults_config_designer.json';
        return this.http.get(url);
    };
    DesignerService.prototype.getDataDesigner = function () {
        var url = 'assets/dummyJson/questions_data_designer.json';
        return this.http.get(url);
    };
    DesignerService.prototype.getListWithJsonEditors = function () {
        var url = 'assets/dummyJson/listWithEditors.json';
        return this.http.get(url);
    };
    DesignerService.prototype.getAPi = function () {
        var url = 'http://api.geomakeit.com/v1/games';
        return this.http.get(url);
    };
    DesignerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DesignerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DesignerService);
    return DesignerService;
}());



/***/ }),

/***/ "ICGk":
/*!************************************************!*\
  !*** ./src/app/games/games/games.component.ts ***!
  \************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _raw_loader_games_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./games.component.html */ "B+2+");
/* harmony import */ var _games_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games.component.css */ "bPUA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game.service */ "K8Jx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamesComponent = /** @class */ (function () {
    function GamesComponent(service, location) {
        this.service = service;
        this.location = location;
        this.afterDelete = new _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]();
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.showSpinner = true; // display spinner while loading //
        this.loadListOfGames();
        /*this.service.getGameById(1).subscribe(data => {
  
        },
        error => {
            this.error = error;
            this.showSpinner = false;   // hide spinner
        });*/
    };
    // save game-object to service, for sharing between components //
    GamesComponent.prototype.onClick = function (obj) {
        this.service.object = obj;
    };
    // onClick delete-button, delete game and display notification
    GamesComponent.prototype.onDelete = function (data) {
        var _this = this;
        if (data) {
            this.service.deleteGameOfSpecificUser(this.service.object.id).subscribe(function (deletedGame) {
                _this.service.getGamesOfSpecificUser().subscribe(function (values) {
                    _this.listOfGames = data.data;
                });
                _this.afterDelete.showNotification('Game ' + _this.service.object.title + '  Deleted', 'success');
                _this.loadListOfGames();
            }, function (error) {
                console.log('Deleting game: ' + error.code + ' - ' + error.message);
                _this.afterDelete.showNotification('Can\'t delete game: ' + _this.service.object.title + '. Something went wrong!', 'danger');
            });
        }
    };
    GamesComponent.prototype.loadListOfGames = function () {
        var _this = this;
        this.service.getGamesOfSpecificUser().subscribe(function (data) {
            _this.listOfGames = data.data;
            _this.showSpinner = false; // hide spinner
        }, function (error) {
            /* error.message = 'No games found.'*/
            console.log('Game List: ' + error.code + ' - ' + error.message);
            _this.error = error;
            _this.showSpinner = false; // hide spinner
        });
    };
    GamesComponent.ctorParameters = function () { return [
        { type: _game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-games',
            template: _raw_loader_games_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_games_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _studio_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../studio/dashboard.component */ "HfF2");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            ],
            exports: [
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"]
            ],
            declarations: [
                _studio_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_12__["UpgradeComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "IxHd":
/*!***************************************************************!*\
  !*** ./src/app/plugins/plugin-card/plugin-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvcGx1Z2luLWNhcmQvcGx1Z2luLWNhcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "K8Jx":
/*!***************************************!*\
  !*** ./src/app/games/game.service.ts ***!
  \***************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'games';
    }
    GameService.prototype.getGameById = function (id) {
        return this.http.get(this.path + '/' + id);
    };
    Object.defineProperty(GameService.prototype, "object", {
        // get values from the general-use object //
        get: function () {
            return this._object;
        },
        // save values to the general-use object //
        set: function (data) {
            this._object = data;
        },
        enumerable: false,
        configurable: true
    });
    // Get-Http request //
    GameService.prototype.getGamesOfSpecificUser = function () {
        return this.http.get(this.path);
    };
    // Post-HTTP request //
    GameService.prototype.postNewGameForSpecificUser = function (game) {
        return this.http.post(this.path, game);
    };
    GameService.prototype.deleteGameOfSpecificUser = function (gameId) {
        return this.http.delete(this.path + '/' + gameId);
    };
    GameService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo mat-h1 bg-black text-center shadow\" >\r\n        <img src=\"assets/img/geomakeit_logo.png\" [width]=\"250\" >\r\n</div>\r\n<div class=\"sidebar-wrapper\" >\r\n  <!--<div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n   &lt;!&ndash; <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a></a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul>&ndash;&gt;\r\n  </div>-->\r\n    <!--<div class=\"col-12 mat-card-title m-2 text-center\">\r\n        <i class=\"material-icons\">account_circle</i> \"username\"\r\n    </div>-->\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" *ngIf=\"menuItem.path !== ''\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "KfqS":
/*!**************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/strings/strings.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL3N0cmluZ3Mvc3RyaW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "LafY":
/*!*************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/plugin-configs.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL3BsdWdpbi1jb25maWdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "MDkB":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/strings/strings.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>strings works!</p>\r\n");

/***/ }),

/***/ "MgOh":
/*!********************************************************!*\
  !*** ./src/app/games/create/create-game.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2NyZWF0ZS9jcmVhdGUtZ2FtZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "NL5l":
/*!***********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "O17t":
/*!*****************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/availbable-plugins/available-plugins.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: AvailablePluginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailablePluginsService", function() { return AvailablePluginsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailablePluginsService = /** @class */ (function () {
    function AvailablePluginsService(http) {
        this.http = http;
        this.url = 'assets/dummyJson/availablePlugins.json';
    }
    AvailablePluginsService.prototype.getAvailablePlugins = function () {
        // http calls => intercepting all requests or responses for exception catch//
        return this.http.get(this.url);
    };
    AvailablePluginsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AvailablePluginsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AvailablePluginsService);
    return AvailablePluginsService;
}());



/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Oq5L":
/*!*******************************************!*\
  !*** ./src/app/plugins/plugin.service.ts ***!
  \*******************************************/
/*! exports provided: PluginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginService", function() { return PluginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PluginService = /** @class */ (function () {
    function PluginService(http) {
        this.http = http;
        this.path = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'plugins';
    }
    Object.defineProperty(PluginService.prototype, "object", {
        get: function () {
            return this._object;
        },
        set: function (obj) {
            this._object = obj;
        },
        enumerable: false,
        configurable: true
    });
    PluginService.prototype.getInstalledPluginsOfAGame = function (gameId) {
        return this.http.get(this.path + '/' + gameId);
    };
    PluginService.prototype.getAvailablePlugins = function () {
        return this.http.get(this.path);
    };
    PluginService.prototype.getAllPluginsOfUser = function () {
        return this.http.get(this.path);
    };
    PluginService.prototype.getPluginById = function (pluginId) {
        return this.http.get(this.path + '/' + pluginId);
    };
    PluginService.prototype.putPluginById = function (pluginId, updatedPlugin) {
        return this.http.put(this.path + '/' + pluginId, updatedPlugin);
    };
    PluginService.prototype.postPlugin = function (newPlugin) {
        return this.http.post(this.path, newPlugin);
    };
    PluginService.prototype.deletePluginById = function (pluginId) {
        return this.http.delete(this.path + '/' + pluginId);
    };
    PluginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PluginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PluginService);
    return PluginService;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 ml-auto mr-auto\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\r\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive table-upgrade\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th class=\"text-center\">Free</th>\r\n                                        <th class=\"text-center\">PRO</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Component</td>\r\n                                        <td class=\"text-center\">60</td>\r\n                                        <td class=\"text-center\">200</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Plugins</td>\r\n                                        <td class=\"text-center\">2</td>\r\n                                        <td class=\"text-center\">15</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Example Pages</td>\r\n                                        <td class=\"text-center\">3</td>\r\n                                        <td class=\"text-center\">27</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Login, Register, Pricing, Lock Pages</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Mini Sidebar</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Premium Support</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td class=\"text-center\">Free</td>\r\n                                        <td class=\"text-center\">Just $59</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-center\"></td>\r\n                                        <td class=\"text-center\">\r\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "Pka1":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/configs/config-designer/designer.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 text-center\" *ngIf=\"!designer\">\r\n            <span class=\"text-danger\" style=\"font-weight: bold\">\r\n                -empty designer file-\r\n            </span>\r\n        </div>\r\n        <div class=\"col-12 mt-4\" *ngIf=\"designer\">\r\n            <div class=\"row \" style=\"width: 100%\">\r\n                <div class=\"col-12 mb-4\">\r\n                    <div *ngIf=\"!designer?.page_title\" class=\"text-center\">\r\n                        <p>\r\n                            <span class=\"text-center  h4\" style=\"font-weight: bold\">\r\n                                {{designer.page_title}}\r\n                            </span>\r\n                        </p>\r\n                        <span *ngIf=\"!designer.page_description\" class=\"text-center\">\r\n                            {{designer.page_description}}\r\n                        </span>\r\n                    </div>\r\n\r\n                        <div *ngFor=\"let dataResult of data | keyvalue: asIsOrderInPipe; let i = index\">\r\n                            <div *ngFor=\"let designerResult of designer?.designer | keyvalue; let y = index\">\r\n                                <div *ngIf = \"y === i\">\r\n                                    <div class=\"row mt-4\">\r\n                                        <div class=\"col-12\">\r\n                                            <p>\r\n                                                <button  class=\"btn btn-outline-info\" type=\"button\" style=\"width: 100%\" data-toggle=\"collapse\" [attr.data-target]=\"'#tab' + i\" aria-expanded=\"false\" [attr.aria-controls]=\"'tab' + i\">\r\n                                                    {{designerResult.value['title']}}\r\n                                                    <app-tooltip-info-circle *ngIf=\"designerResult.value['tooltip']\" [tooltip] = \"designerResult.value['tooltip']\"></app-tooltip-info-circle>\r\n                                                </button>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"collapse\" id=\"tab{{i}}\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-12\">\r\n                                                <div class=\"border p-2 shadow\">\r\n                                                    <div *ngFor=\"let designerItem of designer?.designer[y].components | keyvalue; let z = index\">\r\n                                                        <div  class=\"row\">\r\n                                                            <div class=\"col-6\">\r\n                                                                <div class=\"form-control mb-2 p-2\" style=\"background-color: skyblue\">\r\n                                                                    {{removeUnderscore(removeStringBeforeDot(designerItem.key)) | titlecase}}\r\n                                                                    <app-tooltip-info-circle *ngIf=\"designerItem.value['tooltip']\" [tooltip] = \"designerItem.value['tooltip']\"></app-tooltip-info-circle>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-6\">\r\n                                                                <app-input [formName]=\"dataForm\"\r\n                                                                           [value] = dataResult.value[removeStringBeforeDot(designerItem.key)]\r\n                                                                           [groupName] = \"dataResult.key\"\r\n                                                                           [type] = \"designerItem.value['type']\"\r\n                                                                           [placeholder] = \"designerItem.value['placeholder']\"\r\n                                                                           [validation] = \"designerItem.value['validation']\"\r\n                                                                           [controlName]=\"removeStringBeforeDot(designerItem.key)\">\r\n                                                                </app-input>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-10\">\r\n                            <button class=\"btn btn-info\" type=\"submit\" (click) = \"onSubmit()\">\r\n                                Save Changes\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-2 text-right\">\r\n                            <button class=\"btn btn-outline-danger\" type=\"button\" (click) = \"onCancel()\">\r\n                                Cancel\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "Qd8X":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Simple Table</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead class=\"\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td>\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td>\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td>\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td>\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td>\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td>\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QvUL":
/*!********************************************************!*\
  !*** ./src/app/details-card/details-card.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCardComponent", function() { return DetailsCardComponent; });
/* harmony import */ var _raw_loader_details_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./details-card.component.html */ "3XvB");
/* harmony import */ var _details_card_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-card.component.css */ "qQ1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "+qE3");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsCardComponent = /** @class */ (function () {
    function DetailsCardComponent() {
        this.noPlugIn = new events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    DetailsCardComponent.prototype.ngOnInit = function () {
        this.noPlugIn.emit(true);
    };
    DetailsCardComponent.prototype.isEmptyObject = function () {
        if (this.details.title) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        return false;
    };
    DetailsCardComponent.prototype.noPlugInContent = function () {
        this.noPlugIn.emit(false);
    };
    DetailsCardComponent.ctorParameters = function () { return []; };
    DetailsCardComponent.propDecorators = {
        details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        noPlugIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    DetailsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-details-card',
            template: _raw_loader_details_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_details_card_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsCardComponent);
    return DetailsCardComponent;
}());



/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" type=\"email\">\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                 </mat-form-field>\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"javascript:void(0)\">\n                          <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-icon-button  type=\"submit\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons  text-danger\">person</i>\r\n                       <!-- <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>-->\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right text-center\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <div>\r\n                            <a class=\"m-2 mat-select\" routerLinkActive=\"active\" [routerLink]=\"link\">\r\n                                <i class=\"material-icons\" >person</i> User Profile\r\n                            </a>\r\n                        </div>\r\n                        <div>\r\n                            <a class=\"m-2 mat-select\" routerLinkActive=\"active\" [routerLink]=\"link\">\r\n                                <i class=\"material-icons\">logout</i> Log out\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n               <!-- <li class=\"nav-item\" routerLinkActive=\"active\" matTooltip=\"User profile\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" [routerLink]=\"link\">\r\n                        <i class=\"material-icons\">person</i>\r\n                    </a>\r\n                </li>-->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--\r\n\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">studio</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"afterDelete\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n");

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
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Uk1d":
/*!****************************************!*\
  !*** ./src/app/classes/error/error.ts ***!
  \****************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
var Error = /** @class */ (function () {
    function Error() {
    }
    return Error;
}());



/***/ }),

/***/ "Uyxw":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n");

/***/ }),

/***/ "V+DM":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"visible\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span>\n            <i class=\"fa fa-spin\"  aria-hidden=\"true\"></i>\n        </span>\n    </div>\n</div>\n");

/***/ }),

/***/ "V6gy":
/*!**********************************************************!*\
  !*** ./src/app/plugins/my-plugins/plugins.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvbXktcGx1Z2lucy9wbHVnaW5zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "VURm":
/*!************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugins-for-games.component.ts ***!
  \************************************************************************/
/*! exports provided: PluginsForGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsForGamesComponent", function() { return PluginsForGamesComponent; });
/* harmony import */ var _raw_loader_plugins_for_games_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./plugins-for-games.component.html */ "hYh/");
/* harmony import */ var _plugins_for_games_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins-for-games.component.css */ "4+78");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _availbable_plugins_available_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./availbable-plugins/available-plugins.service */ "O17t");
/* harmony import */ var _instaled_plugins_of_a_game_installed_plugins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instaled-plugins-of-a-game/installed-plugins.service */ "Z+Ht");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game.service */ "K8Jx");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PluginsForGamesComponent = /** @class */ (function () {
    function PluginsForGamesComponent(availableService, installedService, router, gameService) {
        this.availableService = availableService;
        this.installedService = installedService;
        this.router = router;
        this.gameService = gameService;
    }
    PluginsForGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        // get game-object from game-service and send HTTP request for the installed plugins //
        this.game = this.gameService.object;
        if (((_a = this.game) === null || _a === void 0 ? void 0 : _a.id) === undefined) {
            this.router.navigate(['games']);
        }
        this.availableService.getAvailablePlugins().subscribe(function (data) {
            _this.availablePlugins = data.data;
        });
        this.installedService.getInstalledPluginsPerGame((_b = this.game) === null || _b === void 0 ? void 0 : _b.id).subscribe(function (data) {
            _this.installedPlugins = data;
        });
    };
    PluginsForGamesComponent.prototype.goToGamesList = function () {
        this.router.navigate(['games']);
    };
    PluginsForGamesComponent.ctorParameters = function () { return [
        { type: _availbable_plugins_available_plugins_service__WEBPACK_IMPORTED_MODULE_3__["AvailablePluginsService"] },
        { type: _instaled_plugins_of_a_game_installed_plugins_service__WEBPACK_IMPORTED_MODULE_4__["InstalledPluginsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }
    ]; };
    PluginsForGamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-plugins-for-games',
            template: _raw_loader_plugins_for_games_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_plugins_for_games_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_availbable_plugins_available_plugins_service__WEBPACK_IMPORTED_MODULE_3__["AvailablePluginsService"],
            _instaled_plugins_of_a_game_installed_plugins_service__WEBPACK_IMPORTED_MODULE_4__["InstalledPluginsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]])
    ], PluginsForGamesComponent);
    return PluginsForGamesComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" >\r\n    <div class=\"container-fluid\" >\r\n        <div class=\"row\">\r\n            <div class=\"col-6 text-left\">\r\n                <strong>&copy; GeoMakeIt {{test | date: 'yyyy'}}!</strong> All right reserved\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n                <strong>version</strong> 3.05\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XH3c":
/*!************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/plugin-configs.component.ts ***!
  \************************************************************************************/
/*! exports provided: PluginConfigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginConfigsComponent", function() { return PluginConfigsComponent; });
/* harmony import */ var _raw_loader_plugin_configs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./plugin-configs.component.html */ "wqnH");
/* harmony import */ var _plugin_configs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin-configs.component.css */ "LafY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game.service */ "K8Jx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PluginConfigsComponent = /** @class */ (function () {
    function PluginConfigsComponent(service, location) {
        this.service = service;
        this.location = location;
    }
    PluginConfigsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        if (this.service.object instanceof Object) {
            this.plugin = this.service.object.plugin;
            console.log('Game: ' + ((_a = this.service.object.game) === null || _a === void 0 ? void 0 : _a.id));
            this.service.getGameById((_b = this.service.object.game) === null || _b === void 0 ? void 0 : _b.id).subscribe(function (data) {
                _this.game = data;
            });
        }
        else {
            this.plugin = false;
            this.location.back();
        }
    };
    PluginConfigsComponent.prototype.gameExist = function (game) {
        return (game instanceof Object);
    };
    PluginConfigsComponent.ctorParameters = function () { return [
        { type: _game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    PluginConfigsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-plugin-configs',
            template: _raw_loader_plugin_configs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_plugin_configs_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PluginConfigsComponent);
    return PluginConfigsComponent;
}());



/***/ }),

/***/ "XRhJ":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./error404.component.html */ "m6/9");
/* harmony import */ var _error404_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error404.component.css */ "Hykb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component.ctorParameters = function () { return []; };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-error404',
            template: _raw_loader_error404_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_error404_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "YHgh":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-pop-up/delete-pop-up.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger modal -->\r\n\r\n<a matTooltip=\"Delete element\"  class=\"text-danger\" data-toggle=\"modal\" href=\"#deletePopUp\">\r\n    <i class=\"material-icons\">delete</i>\r\n</a>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deletePopUp\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header bg-danger\">\r\n                <h5 class=\"modal-title text-white\" id=\"exampleModalLongTitle\">Delete {{element?.title}}</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you sure that you want to delete {{element?.title}}?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"onDelete()\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Z+Ht":
/*!*************************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/instaled-plugins-of-a-game/installed-plugins.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: InstalledPluginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalledPluginsService", function() { return InstalledPluginsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstalledPluginsService = /** @class */ (function () {
    function InstalledPluginsService(http) {
        this.http = http;
    }
    InstalledPluginsService.prototype.getInstalledPluginsPerGame = function (gameId) {
        // TODO -> http calls => intercepting all requests or responses for exception catch
        var url = 'assets/dummyJson/installedPlugins.json';
        return this.http.get(url);
    };
    InstalledPluginsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    InstalledPluginsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InstalledPluginsService);
    return InstalledPluginsService;
}());



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _games_games_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games/games/games.component */ "ICGk");
/* harmony import */ var _plugins_my_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/my-plugins/plugins.component */ "xd0K");
/* harmony import */ var _plugins_create_create_plugin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/create/create-plugin.component */ "xAFs");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _games_create_create_game_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./games/create/create-game.component */ "xteK");
/* harmony import */ var _button_toggles_button_toggles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./button-toggles/button-toggles.component */ "8Z47");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _plugins_edit_plugin_edit_plugin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/edit-plugin/edit-plugin.component */ "oho9");
/* harmony import */ var _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./details-card/details-card.component */ "QvUL");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _delete_pop_up_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./delete-pop-up/delete-pop-up.component */ "AkdS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.module */ "IqXj");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error404/error404.component */ "XRhJ");
/* harmony import */ var _plugins_plugin_card_plugin_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plugins/plugin-card/plugin-card.component */ "2X3B");
/* harmony import */ var _games_plugins_for_games_plugins_for_games_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./games/plugins-for-games/plugins-for-games.component */ "VURm");
/* harmony import */ var _games_plugins_for_games_plugin_configs_plugin_configs_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/plugin-configs.component */ "XH3c");
/* harmony import */ var _tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tab-group/tab-group.component */ "kO3S");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _games_plugins_for_games_plugin_configs_information_information_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/information/information.component */ "f6j8");
/* harmony import */ var _games_plugins_for_games_plugin_configs_configs_configs_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/configs/configs.component */ "ZpUU");
/* harmony import */ var _games_plugins_for_games_plugin_configs_strings_strings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/strings/strings.component */ "k11N");
/* harmony import */ var _global_http_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./global-http.interceptor */ "BMoy");
/* harmony import */ var _games_plugins_for_games_plugin_configs_configs_config_designer_designer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/configs/config-designer/designer.component */ "FHow");
/* harmony import */ var _tooltip_info_circle_tooltip_info_circle_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tooltip-info-circle/tooltip-info-circle.component */ "tZYd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _games_plugins_for_games_plugin_configs_configs_data_designer_data_designer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./games/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component */ "0IWs");
/* harmony import */ var _error_handling_error_handling_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./error-handling/error-handling.component */ "Cl5i");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _auth_login_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./auth/login/login/login.component */ "vJ7I");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                ngx_material_file_input__WEBPACK_IMPORTED_MODULE_20__["MaterialFileInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_24__["AdminLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_37__["NgbModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
                _games_games_games_component__WEBPACK_IMPORTED_MODULE_10__["GamesComponent"],
                _plugins_my_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_11__["PluginsComponent"],
                _plugins_create_create_plugin_component__WEBPACK_IMPORTED_MODULE_12__["CreatePluginComponent"],
                _games_create_create_game_component__WEBPACK_IMPORTED_MODULE_14__["CreateGameComponent"],
                _button_toggles_button_toggles_component__WEBPACK_IMPORTED_MODULE_15__["ButtonTogglesComponent"],
                _plugins_edit_plugin_edit_plugin_component__WEBPACK_IMPORTED_MODULE_18__["EditPluginComponent"],
                _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_19__["DetailsCardComponent"],
                _delete_pop_up_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_22__["DeletePopUpComponent"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_25__["Error404Component"],
                _plugins_plugin_card_plugin_card_component__WEBPACK_IMPORTED_MODULE_26__["PluginCardComponent"],
                _games_plugins_for_games_plugins_for_games_component__WEBPACK_IMPORTED_MODULE_27__["PluginsForGamesComponent"],
                _games_plugins_for_games_plugin_configs_plugin_configs_component__WEBPACK_IMPORTED_MODULE_28__["PluginConfigsComponent"],
                _tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_29__["TabGroupComponent"],
                _games_plugins_for_games_plugin_configs_information_information_component__WEBPACK_IMPORTED_MODULE_31__["InformationComponent"],
                _games_plugins_for_games_plugin_configs_configs_configs_component__WEBPACK_IMPORTED_MODULE_32__["ConfigsComponent"],
                _games_plugins_for_games_plugin_configs_strings_strings_component__WEBPACK_IMPORTED_MODULE_33__["StringsComponent"],
                _games_plugins_for_games_plugin_configs_configs_config_designer_designer_component__WEBPACK_IMPORTED_MODULE_35__["DesignerComponent"],
                _tooltip_info_circle_tooltip_info_circle_component__WEBPACK_IMPORTED_MODULE_36__["TooltipInfoCircleComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_38__["InputComponent"],
                _games_plugins_for_games_plugin_configs_configs_data_designer_data_designer_component__WEBPACK_IMPORTED_MODULE_39__["DataDesignerComponent"],
                _error_handling_error_handling_component__WEBPACK_IMPORTED_MODULE_40__["ErrorHandlingComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_41__["SpinnerComponent"],
                _auth_login_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _global_http_interceptor__WEBPACK_IMPORTED_MODULE_34__["GlobalHttpInterceptor"],
                    multi: true,
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZVY2":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input/input.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formName\">\r\n    <div formGroupName=\"{{groupName}}\">\r\n        <div ngSwitch=\"{{type}}\">\r\n            <div *ngSwitchCase=\"'textBox'\">\r\n                <input type=\"text\" class=\"form-control text-secondary\" style=\"font-weight: bold\" [formControlName]=\"controlName\" placeholder=\"{{placeholder}}\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'integer'\">\r\n                <input type=\"number\" class=\"form-control text-secondary\" placeholder=\"{{placeholder}}\"  style=\"font-weight: bold\" step=\"1\"  min=\"0\" [formControlName]=\"controlName\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'double'\">\r\n                <input type=\"number\" class=\"form-control text-secondary\" placeholder=\"{{placeholder}}\" style=\"font-weight: bold\" step=\"0.1\"  min=\"0\" [formControlName]=\"controlName\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'float'\">\r\n                <input type=\"number\" class=\"form-control text-secondary\" placeholder=\"{{placeholder}}\" style=\"font-weight: bold\" step=\"0.1\"  min=\"0\" [formControlName]=\"controlName\">\r\n            </div>\r\n            <div *ngSwitchCase=\"'arrayOfStrings'\">\r\n                <div class=\"row justify-content-center text-center\" [formArrayName]=\"controlName\">\r\n                    <div class=\"col-12\">\r\n                        <p>\r\n                            <button data-toggle=\"collapse\" (click) = \"changeButton()\" class=\"btn btn-outline-info\"\r\n                                    [attr.data-target]=\"'#arrayOfStrings' + controlName + groupName\"\r\n                                    style=\"width: 100%\"\r\n                                    aria-expanded=\"false\" [attr.aria-controls]=\"'arrayOfStrings' + controlName + groupName\">\r\n                                {{buttonText(buttonValue)}}\r\n                            </button>\r\n                        </p>\r\n                        <div class=\"collapse\" id=\"arrayOfStrings{{controlName}}{{groupName}}\">\r\n                            <table class=\"border border-info w-100\">\r\n                                <tr *ngFor=\"let dataItem of arrayValues; let i = index\" >\r\n                                    <td>\r\n                                        <input type = \"text\"  class=\"form-control text-secondary m-2\" id=\"{{dataItem}}{{i}}\" name=\"{{dataItem}}{{i}}\"\r\n                                               style=\"font-weight: bold; width: 100%\" [formControlName]=\"i\">\r\n                                    </td>\r\n                                    <td style=\"width: 13%\">\r\n                                        <button class=\"btn mat-icon-button btn-danger\" (click) = \"deleteArrayItem(groupName, controlName, i)\">x</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <div class=\"text-left\">\r\n                                <button class=\"btn btn-info\" (click) = \"addArrayItem(groupName, controlName)\">\r\n                                    add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\"'arrayOfCommands'\">\r\n                <div class=\"row justify-content-center text-center\" [formArrayName]=\"controlName\">\r\n                    <div class=\"col-12\">\r\n                        <p>\r\n                            <button data-toggle=\"collapse\" (click) = \"changeButton()\" class=\"btn btn-outline-info\"\r\n                                    [attr.data-target]=\"'#arrayOfCommands' + controlName + groupName\"\r\n                                    style=\"width: 100%\"\r\n                                    aria-expanded=\"false\" [attr.aria-controls]=\"'arrayOfCommands' + controlName + groupName\">\r\n                                {{buttonText(buttonValue)}}\r\n                            </button>\r\n                        </p>\r\n                        <div class=\"collapse\" id=\"arrayOfCommands{{controlName}}{{groupName}}\">\r\n                            <table class=\"border border-info w-100\">\r\n                                <tr *ngFor=\"let ar of arrayValues; let i = index\" >\r\n                                    <td>\r\n                                        <input type = \"text\"  class=\"form-control text-secondary m-2\" style=\"font-weight: bold\" [formControlName]=\"i\">\r\n                                    </td>\r\n                                    <td style=\"width: 13%\">\r\n                                        <button class=\"btn mat-icon-button btn-danger\" (click) = \"deleteArrayItem(groupName, controlName, i)\">x</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <div class=\"text-left\">\r\n                                <button class=\"btn btn-info\" (click) = \"addArrayItem(groupName, controlName)\">\r\n                                    add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\"'arrayOfIntegers'\">\r\n                <div class=\"row justify-content-center text-center\" [formArrayName]=\"controlName\">\r\n                    <div class=\"col-12\">\r\n                        <p>\r\n                            <button data-toggle=\"collapse\" (click) = \"changeButton()\" class=\"btn btn-outline-info\"\r\n                                    [attr.data-target]=\"'#arrayOfIntegers' + controlName + groupName\"\r\n                                    style=\"width: 100%\"\r\n                                    aria-expanded=\"false\" [attr.aria-controls]=\"'arrayOfIntegers' + controlName + groupName\">\r\n                                {{buttonText(buttonValue)}}\r\n                            </button>\r\n                        </p>\r\n                        <div class=\"collapse\" id=\"arrayOfIntegers{{controlName}}{{groupName}}\">\r\n                            <table class=\"border border-info w-100\">\r\n                                <tr *ngFor=\"let ar of arrayValues; let i = index\" >\r\n                                    <td>\r\n                                        <input type = \"number\" step=\"1\"  min=\"0\" class=\"form-control text-secondary m-2\" style=\"font-weight: bold\" [formControlName]=\"i\">\r\n                                    </td>\r\n                                    <td style=\"width: 13%\">\r\n                                        <button class=\"btn mat-icon-button btn-danger\" (click) = \"deleteArrayItem(groupName, controlName, i)\">x</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <div class=\"text-left\">\r\n                                <button class=\"btn btn-info\" (click) = \"addArrayItem(groupName, controlName)\">\r\n                                    add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\"'arrayOfDouble'\">\r\n                <div class=\"row justify-content-center text-center\" [formArrayName]=\"controlName\">\r\n                    <div class=\"col-12\">\r\n                        <p>\r\n                            <button data-toggle=\"collapse\" (click) = \"changeButton()\" class=\"btn btn-outline-info\"\r\n                                    [attr.data-target]=\"'#arrayOfDouble' + controlName + groupName\"\r\n                                    style=\"width: 100%\"\r\n                                    aria-expanded=\"false\" [attr.aria-controls]=\"'arrayOfDouble' + controlName + groupName\">\r\n                                {{buttonText(buttonValue)}}\r\n                            </button>\r\n                        </p>\r\n                        <div class=\"collapse\" id=\"arrayOfDouble{{controlName}}{{groupName}}\">\r\n                            <table class=\"border border-info w-100\">\r\n                                <tr *ngFor=\"let ar of arrayValues; let i = index\" >\r\n                                    <td>\r\n                                        <input type = \"number\" step=\"0.1\" min=\"0\" class=\"form-control text-secondary m-2\" style=\"font-weight: bold\" [formControlName]=\"i\">\r\n                                    </td>\r\n                                    <td style=\"width: 13%\">\r\n                                        <button class=\"btn mat-icon-button btn-danger\" (click) = \"deleteArrayItem(groupName, controlName, i)\">x</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <div class=\"text-left\">\r\n                                <button class=\"btn btn-info\" (click) = \"addArrayItem(groupName, controlName)\">\r\n                                    add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\"'arrayOfFloat'\">\r\n                <div class=\"row justify-content-center text-center\" [formArrayName]=\"controlName\">\r\n                    <div class=\"col-12\">\r\n                        <p>\r\n                            <button data-toggle=\"collapse\" (click) = \"changeButton()\"\r\n                                    class=\"btn btn-outline-info\" [attr.data-target]=\"'#arrayOfFloat' + controlName + groupName\"\r\n                                    aria-expanded=\"false\" [attr.aria-controls]=\"'arrayOfFloat' + controlName + groupName\"\r\n                                    style=\"width: 100%\">\r\n                                {{buttonText(buttonValue)}}\r\n                            </button>\r\n                        </p>\r\n                        <div class=\"collapse\" id=\"arrayOfFloat{{controlName}}{{groupName}}\">\r\n                            <table class=\"border border-info w-100\">\r\n                                <tr *ngFor=\"let ar of arrayValues; let i = index\" >\r\n                                    <td>\r\n                                        <input type = \"number\" step=\"0.1\" min=\"0\" class=\"form-control text-secondary m-2\" style=\"font-weight: bold\" [formControlName]=\"i\">\r\n                                    </td>\r\n                                    <td style=\"width: 13%\">\r\n                                        <button class=\"btn mat-icon-button btn-danger\" (click) = \"deleteArrayItem(groupName, controlName, i)\">x</button>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <div class=\"text-left\">\r\n                                <button class=\"btn btn-info\" (click) = \"addArrayItem(groupName, controlName)\">\r\n                                    add\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\"'dropdown'\">\r\n                <select class=\"form-select  text-secondary\" style=\"font-weight: bold\"  [formControlName]=\"controlName\">\r\n                    <ng-container>\r\n                       <option class=\"form-control text-secondary\" style=\"font-weight: bold\" value=\"{{item}}\" *ngFor=\"let item of items\">{{item}}</option>\r\n                    </ng-container>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C");
/* harmony import */ var _upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.component.css */ "NL5l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upgrade',
            template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "ZpUU":
/*!*************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/configs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfigsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsComponent", function() { return ConfigsComponent; });
/* harmony import */ var _raw_loader_configs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./configs.component.html */ "fjpE");
/* harmony import */ var _configs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs.component.css */ "7E1S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _designer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designer.service */ "I2vV");
/* harmony import */ var _data_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-file.service */ "jeFu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(designerService, dataService) {
        this.designerService = designerService;
        this.dataService = dataService;
    }
    ConfigsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designerService.getDataDesigner().subscribe(function (data) {
            _this.designer = data;
        }, function (error) {
            _this.error = error;
        });
        this.designerService.getConfigDesigner().subscribe(function (data) {
            _this.defaultDesigner = data;
        }, function (error) {
            _this.error = error;
        });
    };
    ConfigsComponent.ctorParameters = function () { return [
        { type: _designer_service__WEBPACK_IMPORTED_MODULE_3__["DesignerService"] },
        { type: _data_file_service__WEBPACK_IMPORTED_MODULE_4__["DataFileService"] }
    ]; };
    ConfigsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-configs',
            template: _raw_loader_configs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_configs_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_designer_service__WEBPACK_IMPORTED_MODULE_3__["DesignerService"], _data_file_service__WEBPACK_IMPORTED_MODULE_4__["DataFileService"]])
    ], ConfigsComponent);
    return ConfigsComponent;
}());



/***/ }),

/***/ "bPUA":
/*!*************************************************!*\
  !*** ./src/app/games/games/games.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error404/error404.component */ "XRhJ");
/* harmony import */ var _auth_login_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login/login.component */ "vJ7I");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: 'studio',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    {
        path: 'pageNotFound',
        component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"]
    },
    {
        path: '**',
        redirectTo: '/pageNotFound'
    },
    {
        path: 'login',
        component: _auth_login_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "chv8":
/*!*************************************************************!*\
  !*** ./src/app/button-toggles/button-toggles.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi10b2dnbGVzL2J1dHRvbi10b2dnbGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "cksQ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-handling/error-handling.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 m-2 text-center \">\n            <span class=\"text-danger\" style=\"font-weight: bold\">{{errorResponse()}}</span>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": "IqXj"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "f6j8":
/*!*********************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/information/information.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _raw_loader_information_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./information.component.html */ "g7AK");
/* harmony import */ var _information_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information.component.css */ "AKSw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent.ctorParameters = function () { return []; };
    InformationComponent.propDecorators = {
        plugin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-information',
            template: _raw_loader_information_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_information_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "fjpE":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/configs/configs.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"error?.message !== null\">\r\n    {{ error?.message }}\r\n</div>\r\n\r\n<div class=\"container-fluid\"  *ngIf=\"error?.message === null\">\r\n    <div class=\"row border\">\r\n        <div class=\"col-12\">\r\n            <mat-tab-group>\r\n                <mat-tab label=\"{{designer?.file | titlecase}}\">\r\n                    <app-designer *ngIf=\"designer?.designer_type === 'config'\"\r\n                                  [designerFile]=\"designerService.getConfigDesigner()\"\r\n                                  [dataFile]=\"dataService.getDataDefaultJsonFile()\">\r\n                    </app-designer>\r\n                    <app-data-designer *ngIf=\"designer?.designer_type === 'data'\"\r\n                                  [dataDesigner]=\"designerService.getDataDesigner()\"\r\n                                  [dataFile]=\"dataService.getDataJsonFile()\">\r\n                    </app-data-designer>\r\n                </mat-tab>\r\n                <mat-tab label=\"{{defaultDesigner?.file | titlecase}}\">\r\n                    <app-designer *ngIf=\"defaultDesigner?.designer_type === 'config'\"\r\n                                  [designerFile]=\"designerService.getConfigDesigner()\"\r\n                                  [dataFile]=\"dataService.getDataDefaultJsonFile()\">\r\n                    </app-designer>\r\n                    <app-data-designer *ngIf=\"defaultDesigner?.designer_type === 'data'\"\r\n                                       [dataDesigner]=\"designerService.getDataDesigner()\"\r\n                                       [dataFile]=\"dataService.getDataJsonFile()\">\r\n                    </app-data-designer>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "g7AK":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/information/information.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>information works!</p>\r\n");

/***/ }),

/***/ "gNMG":
/*!***********************************************************!*\
  !*** ./src/app/delete-pop-up/delete-pop-up.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1wb3AtdXAvZGVsZXRlLXBvcC11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "hYh/":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugins-for-games.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-12 \">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Plugins for {{game?.title}}</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"col-12\">\r\n                            <p>     <!-- Installed Plugins  -->\r\n                                <button  class=\"btn btn-outline-info\"\r\n                                         type=\"button\" data-toggle=\"collapse\"\r\n                                         data-target=\"#installedPlugins\"\r\n                                         aria-expanded=\"false\"\r\n                                         aria-controls=\"installedPlugins\">\r\n                                    installed Plugins\r\n                                </button>\r\n                            </p>\r\n                            <hr>\r\n                            <div class=\"collapse\" id=\"installedPlugins\">\r\n                                <div class=\"card card-body border border-info\" >\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\" *ngFor=\"let installedPlugin of installedPlugins\">  <!-- installed plugins -->\r\n                                            <app-plugin-card [plugin] = \"installedPlugin\"></app-plugin-card>\r\n                                        </div>  <!-- end of installed plugins -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <p>         <!-- Available plugins -->\r\n                                <button class=\"btn btn-outline-info\" type=\"button\"\r\n                                        data-toggle=\"collapse\"\r\n                                        data-target=\"#availablePlugins\"\r\n                                        aria-expanded=\"false\"\r\n                                        aria-controls=\"availablePlugins\">\r\n                                    Available Plugins\r\n                                </button>\r\n                            </p>\r\n                            <hr>\r\n                            <div class=\"collapse\" id=\"availablePlugins\">\r\n                                <div class=\"card card-body border border-info\" >\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\" *ngFor=\"let availablePlugin of availablePlugins\">  <!-- available plugins -->\r\n                                            <app-plugin-card [plugin] = \"availablePlugin\"></app-plugin-card>\r\n                                        </div>   <!--end of available plugins-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "hh+X":
/*!*******************************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/config-designer/designer.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL2NvbmZpZ3MvY29uZmlnLWRlc2lnbmVyL2Rlc2lnbmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.link = '/user-profile';
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Studio';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "iWdy":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/plugin-card/plugin-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow\">\r\n    <div class=\"card-header card-header-info\" >\r\n        <h4 class=\"card-title\">\r\n            {{plugin.title}}\r\n        </h4>\r\n        <p class=\"card-category\">\r\n            -add description-\r\n        </p>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"col-12\">\r\n            <strong>\r\n                version:\r\n                <span class=\"text-info\">\r\n                    -add plugin's current release-\r\n                </span>\r\n            </strong>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-12\">\r\n                <table class=\"w-100\">\r\n                    <tr>\r\n                        <td class=\"text-center border border-info\">\r\n                            <span class=\"text-success\" style=\"font-weight: bold\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <i class=\"material-icons pt-2\">\r\n                                            download\r\n                                        </i>\r\n                                       - plugin install -\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        -add valuation-\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                           <!-- <span *ngIf=\"!plugin.is_building\" class=\"text-danger\" style=\"font-weight: bold\">\r\n                                Disabled\r\n                            </span>-->\r\n                        </td>\r\n                        <td class=\"text-center border border-info\">\r\n                          <!--  <div *ngIf=\"plugin.gameId !== ''\">-->\r\n                                <mat-button-toggle matTooltip=\"enter to configurations\" (click)=\"goToConfig()\" routerLinkActive = true style=\"border: 0\">\r\n                                    <i class=\"material-icons text-info\">\r\n                                        settings\r\n                                    </i>\r\n                                    <span class=\"font-weight-bold text-info\">\r\n                                        Configuration\r\n                                    </span>\r\n                                </mat-button-toggle>\r\n                          <!--  </div>-->\r\n                            <!--<div *ngIf=\"plugin.gameId === ''\">\r\n                                <mat-button-toggle matTooltip=\"Information about this plugin\" routerLinkActive = true style=\"border: 0\">\r\n                                    <i class=\"material-icons text-info\">\r\n                                        info\r\n                                    </i>\r\n                                    <span class=\"text-info\" style=\"font-weight: bold\">\r\n                                        Info\r\n                                    </span>\r\n                                </mat-button-toggle>\r\n                            </div>-->\r\n                        </td>\r\n                        <td class=\"text-center border border-info\">\r\n                            <!--<span *ngIf=\"plugin.required\" class=\"text-black\">this plugin is required</span>-->\r\n                          <!--  <span *ngIf=\"!plugin.required\" class=\"text-black\">\r\n                                <mat-button-toggle  *ngIf=\"plugin.gameId !== ''\" style=\"border: 0\">\r\n                                    <app-delete-pop-up  [element] = \"plugin\" (delete)=\"deletePlugin($event)\"></app-delete-pop-up>\r\n                                </mat-button-toggle>-->\r\n                                <mat-button-toggle style=\"border: 0\"> <!--*ngIf=\"plugin.gameId === ''\" style=\"border: 0\">-->\r\n                                    <i class=\"material-icons text-success\">\r\n                                        download\r\n                                    </i>\r\n                                    <span class=\"text-success\" style=\"font-weight: bold\">\r\n                                       Install\r\n                                    </span>\r\n                                </mat-button-toggle>\r\n                           <!-- </span>-->\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jeFu":
/*!*************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/data-file.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DataFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFileService", function() { return DataFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFileService = /** @class */ (function () {
    function DataFileService(http) {
        this.http = http;
    }
    DataFileService.prototype.getDataDefaultJsonFile = function () {
        var url = 'assets/dummyJson/defaults_config_file.json';
        return this.http.get(url);
    };
    DataFileService.prototype.getDataJsonFile = function () {
        var url = 'assets/dummyJson/questions_data_file.json';
        return this.http.get(url);
    };
    DataFileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DataFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataFileService);
    return DataFileService;
}());



/***/ }),

/***/ "jxfC":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "k11N":
/*!*************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/strings/strings.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StringsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringsComponent", function() { return StringsComponent; });
/* harmony import */ var _raw_loader_strings_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./strings.component.html */ "MDkB");
/* harmony import */ var _strings_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings.component.css */ "KfqS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StringsComponent = /** @class */ (function () {
    function StringsComponent() {
    }
    StringsComponent.prototype.ngOnInit = function () {
    };
    StringsComponent.ctorParameters = function () { return []; };
    StringsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-strings',
            template: _raw_loader_strings_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_strings_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], StringsComponent);
    return StringsComponent;
}());



/***/ }),

/***/ "kO3S":
/*!**************************************************!*\
  !*** ./src/app/tab-group/tab-group.component.ts ***!
  \**************************************************/
/*! exports provided: TabGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabGroupComponent", function() { return TabGroupComponent; });
/* harmony import */ var _raw_loader_tab_group_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tab-group.component.html */ "0KfP");
/* harmony import */ var _tab_group_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-group.component.css */ "1RUa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabGroupComponent = /** @class */ (function () {
    function TabGroupComponent() {
    }
    TabGroupComponent.prototype.ngOnInit = function () {
    };
    TabGroupComponent.ctorParameters = function () { return []; };
    TabGroupComponent.propDecorators = {
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    TabGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tab-group',
            template: _raw_loader_tab_group_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tab_group_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TabGroupComponent);
    return TabGroupComponent;
}());



/***/ }),

/***/ "knt0":
/*!*************************************************************!*\
  !*** ./src/app/error-handling/error-handling.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLWhhbmRsaW5nL2Vycm9yLWhhbmRsaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "m6/9":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error404/error404.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content m-4 \">\r\n    <div class=\"container border rounded-circle shadow\" style=\"background-image: linear-gradient(to bottom right, cornflowerblue , lightcoral);\">\r\n        <div class=\"row m-4\">\r\n            <div class=\"col-12\">\r\n                <div class=\"text-center\">\r\n                    <h1>\r\n                        404!\r\n                    </h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-4\">\r\n            <div class=\"col-12 \">\r\n                <div class=\"text-center\">\r\n                    <h1>\r\n                        Page not found\r\n                    </h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-4\">\r\n            <div class=\"col-12 \">\r\n                <div class=\"text-center\">\r\n                    <h3>\r\n                        <img src=\"assets/img/geomakeit_logo.png\">\r\n                    </h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "mMQL":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plugins/my-plugins/plugins.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 text-right\">\r\n                <a class=\"btn btn-info\" role=\"button\" routerLinkActive=\"active\" href=\"#/plugins/create\">+ New</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\" >\r\n                        <h4 class=\"card-title\">My Plugins</h4>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive table-full-width\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <th>Identifier</th>\r\n                                <th>Title</th>\r\n                                <th>Description</th>\r\n                            </thead>\r\n                            <tbody *ngIf=\"error !== null\">\r\n                                <span class=\"text-danger m-2\" style=\"font-weight: bold\">{{error.message}}</span>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"error === null\">\r\n                                <tr *ngFor = \"let plugin of listOfPlugins\" class=\"mat-h3\">\r\n                                    <td *ngIf=\"plugin.identifier === ''\" class=\"text-gray\" >- no plugins -</td>\r\n                                    <td>{{plugin.identifier}}</td>\r\n                                    <td>{{plugin.title}}</td>\r\n                                    <td>{{plugin.description}}</td>\r\n                                    <td class=\"text-right\">\r\n                                        <div>\r\n                                            <form>\r\n                                                <mat-button-toggle class=\"mr-2 bg-info text-white\" [routerLink]=\"'/plugins/edit'\" [queryParams]=\"{id: 5}\">\r\n                                                    Upload\r\n                                                    <i class=\"material-icons text-white\">\r\n                                                        file_upload\r\n                                                    </i>\r\n                                                </mat-button-toggle>\r\n                                                <mat-button-toggle class=\"border-danger\">\r\n                                                    <app-delete-pop-up (click)=\"setPlugInForDelete(plugin)\"  [element] = \"deletePlugin\" (delete)=\"onDelete($event, plugin.id)\"></app-delete-pop-up>\r\n                                                </mat-button-toggle>\r\n                                            </form>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"listOfPlugins?.length === 0\">\r\n                                    <span class=\"m-2\" style=\"font-weight: bold\">\r\n                                        No plugins found\r\n                                    </span>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <app-spinner [visible]=\"setSpinnerActive\"></app-spinner>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "n93O":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oho9":
/*!**************************************************************!*\
  !*** ./src/app/plugins/edit-plugin/edit-plugin.component.ts ***!
  \**************************************************************/
/*! exports provided: EditPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPluginComponent", function() { return EditPluginComponent; });
/* harmony import */ var _raw_loader_edit_plugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./edit-plugin.component.html */ "0JaD");
/* harmony import */ var _edit_plugin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-plugin.component.css */ "5eJu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPluginComponent = /** @class */ (function () {
    function EditPluginComponent(router, location) {
        this.router = router;
        this.location = location;
        this.descriptionObject = {
            title: 'Demo Plugin',
            subTitle: 'small description of plugin',
            version: '1.0.0',
            main: 'example.plugin',
            status: '0',
            updatedAt: '1 second ago',
            createdAt: '15 second ago'
        };
    }
    EditPluginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting id of plugin from url query
        this.router.queryParams.subscribe(function (params) { _this.pluginId = +params['id'] || 0; });
    };
    EditPluginComponent.prototype.onCancel = function () {
        this.location.back();
    };
    EditPluginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    EditPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-plugin',
            template: _raw_loader_edit_plugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_edit_plugin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], EditPluginComponent);
    return EditPluginComponent;
}());



/***/ }),

/***/ "peVF":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tooltip-info-circle/tooltip-info-circle.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-info-circle\" viewBox=\"0 0 16 16\" matTooltip=\"{{tooltip}}\">\r\n    <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\r\n    <path d=\"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/>\r\n</svg>\r\n\r\n");

/***/ }),

/***/ "phJp":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studio/dashboard.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <h1>\r\n        GeoMakeIt! Studio\r\n    </h1>\r\n</div>\r\n");

/***/ }),

/***/ "pqdB":
/*!***********************************************************************!*\
  !*** ./src/app/tooltip-info-circle/tooltip-info-circle.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2x0aXAtaW5mby1jaXJjbGUvdG9vbHRpcC1pbmZvLWNpcmNsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "qQ1n":
/*!*********************************************************!*\
  !*** ./src/app/details-card/details-card.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY2FyZC9kZXRhaWxzLWNhcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var url = '';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + url, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _studio_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../studio/dashboard.component */ "HfF2");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _games_games_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../games/games/games.component */ "ICGk");
/* harmony import */ var _plugins_my_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../plugins/my-plugins/plugins.component */ "xd0K");
/* harmony import */ var _plugins_create_create_plugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plugins/create/create-plugin.component */ "xAFs");
/* harmony import */ var _games_create_create_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../games/create/create-game.component */ "xteK");
/* harmony import */ var _plugins_edit_plugin_edit_plugin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plugins/edit-plugin/edit-plugin.component */ "oho9");
/* harmony import */ var _games_plugins_for_games_plugins_for_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../games/plugins-for-games/plugins-for-games.component */ "VURm");
/* harmony import */ var _games_plugins_for_games_plugin_configs_plugin_configs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../games/plugins-for-games/plugin-configs/plugin-configs.component */ "XH3c");









var AdminLayoutRoutes = [
    { path: 'studio', component: _studio_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'games', component: _games_games_games_component__WEBPACK_IMPORTED_MODULE_2__["GamesComponent"] },
    { path: 'games/create', component: _games_create_create_game_component__WEBPACK_IMPORTED_MODULE_5__["CreateGameComponent"] },
    { path: 'games/plugins', component: _games_plugins_for_games_plugins_for_games_component__WEBPACK_IMPORTED_MODULE_7__["PluginsForGamesComponent"] },
    { path: 'games/plugins/config', component: _games_plugins_for_games_plugin_configs_plugin_configs_component__WEBPACK_IMPORTED_MODULE_8__["PluginConfigsComponent"] },
    { path: 'plugins', component: _plugins_my_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_3__["PluginsComponent"] },
    { path: 'plugins/create', component: _plugins_create_create_plugin_component__WEBPACK_IMPORTED_MODULE_4__["CreatePluginComponent"] },
    { path: 'plugins/edit', component: _plugins_edit_plugin_edit_plugin_component__WEBPACK_IMPORTED_MODULE_6__["EditPluginComponent"] },
    { path: 'login', redirectTo: '/login' }
];


/***/ }),

/***/ "rOuc":
/*!*******************************************!*\
  !*** ./src/app/classes/plugins/plugin.ts ***!
  \*******************************************/
/*! exports provided: Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
var Plugin = /** @class */ (function () {
    function Plugin() {
    }
    return Plugin;
}());



/***/ }),

/***/ "smLI":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./table-list.component.html */ "Qd8X");
/* harmony import */ var _table_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-list.component.css */ "jxfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.ctorParameters = function () { return []; };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-table-list',
            template: _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_table_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "tZYd":
/*!**********************************************************************!*\
  !*** ./src/app/tooltip-info-circle/tooltip-info-circle.component.ts ***!
  \**********************************************************************/
/*! exports provided: TooltipInfoCircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipInfoCircleComponent", function() { return TooltipInfoCircleComponent; });
/* harmony import */ var _raw_loader_tooltip_info_circle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tooltip-info-circle.component.html */ "peVF");
/* harmony import */ var _tooltip_info_circle_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-info-circle.component.css */ "pqdB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipInfoCircleComponent = /** @class */ (function () {
    function TooltipInfoCircleComponent() {
    }
    TooltipInfoCircleComponent.prototype.ngOnInit = function () {
    };
    TooltipInfoCircleComponent.ctorParameters = function () { return []; };
    TooltipInfoCircleComponent.propDecorators = {
        tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    TooltipInfoCircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tooltip-info-circle',
            template: _raw_loader_tooltip_info_circle_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_tooltip_info_circle_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipInfoCircleComponent);
    return TooltipInfoCircleComponent;
}());



/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ");
/* harmony import */ var _typography_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.css */ "Wwls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv");
/* harmony import */ var _maps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component.css */ "YpYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent.ctorParameters = function () { return []; };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maps',
            template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maps_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "vJ7I":
/*!*****************************************************!*\
  !*** ./src/app/auth/login/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "Uyxw");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "A5Di");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return []; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wqnH":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/plugins-for-games/plugin-configs/plugin-configs.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\" >\r\n                        <p><span class=\"card-title h4\">Configuration of Game</span></p>\r\n                        <p class=\"card-category\"></p>\r\n                    </div>\r\n                    <div *ngIf=\"gameExist(game)\" class=\"card-content table-responsive table-full-width\">\r\n                        <mat-tab-group >\r\n                            <mat-tab label=\"Game Information\">\r\n                                <div class=\"row\" style=\"width: 99%\">\r\n                                    <div class=\"col-12 m-4\">\r\n                                        <h3>GeoMakeIt</h3>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"width: 99%\">\r\n                                    <div class=\"col-12 m-4\">\r\n                                        Plugin Information\r\n                                    </div>\r\n                                </div>\r\n                            </mat-tab>\r\n                            <mat-tab label=\"Plugins\">\r\n                                <div class=\"row\"  style=\"width: 98%\">\r\n                                    <div class=\"col-12 ml-2 mt-2 mb-2\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-2\">\r\n                                                <div class=\"list-group\" id=\"plugins-list\" role=\"tablist\">\r\n                                                    <a class=\"list-group-item list-group-item-action active\" id=\"plugIn-information\" data-bs-toggle=\"list\" href=\"#info-content\" role=\"tab\">Information</a>\r\n                                                    <a class=\"list-group-item list-group-item-action\" id=\"plugIn-configs\" data-bs-toggle=\"list\" href=\"#config-content\" role=\"tab\" >Config</a>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-10\">\r\n                                                <div class=\"tab-content\">\r\n                                                    <div class=\"tab-pane fade show active\" id=\"info-content\" role=\"tabpanel\">\r\n                                                        <app-information></app-information>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane fade show\" id=\"config-content\" role=\"tabpanel\">\r\n                                                        <app-configs></app-configs>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n                    </div>\r\n                    <div *ngIf=\"!gameExist(game)\" class=\"card-content table-responsive table-full-width text-center mt-4\">\r\n                        <span class=\"text-danger\" style=\"font-weight: bold\">- no game selected -</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "xAFs":
/*!***********************************************************!*\
  !*** ./src/app/plugins/create/create-plugin.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatePluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePluginComponent", function() { return CreatePluginComponent; });
/* harmony import */ var _raw_loader_create_plugin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-plugin.component.html */ "9HCb");
/* harmony import */ var _create_plugin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-plugin.component.css */ "ycOr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin.service */ "Oq5L");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatePluginComponent = /** @class */ (function () {
    function CreatePluginComponent(location, fb, service) {
        this.location = location;
        this.fb = fb;
        this.service = service;
        this.notification = new _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"]();
    }
    CreatePluginComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    CreatePluginComponent.prototype.initializeForm = function () {
        this.createPluginForm = this.fb.group({
            identifier: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z]{1}[a-z0-9_]{2,31}$')]),
            title: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: this.fb.control('')
        });
    };
    CreatePluginComponent.prototype.onSubmit = function () {
        if (this.createPluginForm.valid) {
            this.createNewPlugin(this.createPluginForm.value);
        }
    };
    CreatePluginComponent.prototype.createNewPlugin = function (newPlugin) {
        var _this = this;
        return this.service.postPlugin(newPlugin).subscribe(function (savePlugin) {
            _this.notification.showNotification('Plugin ' + newPlugin.identifier + ', created successful', 'success');
            _this.location.back();
        }, function (error) {
            _this.notification.showNotification('Can\'t create new plugin', 'danger');
            _this.location.back();
        });
    };
    CreatePluginComponent.prototype.onCancel = function () {
        this.location.back();
    };
    CreatePluginComponent.prototype.change = function (char) {
        return char.toLowerCase();
    };
    CreatePluginComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] }
    ]; };
    CreatePluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-plugin',
            template: _raw_loader_create_plugin_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_plugin_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]])
    ], CreatePluginComponent);
    return CreatePluginComponent;
}());



/***/ }),

/***/ "xd0K":
/*!*********************************************************!*\
  !*** ./src/app/plugins/my-plugins/plugins.component.ts ***!
  \*********************************************************/
/*! exports provided: PluginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsComponent", function() { return PluginsComponent; });
/* harmony import */ var _raw_loader_plugins_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./plugins.component.html */ "mMQL");
/* harmony import */ var _plugins_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins.component.css */ "V6gy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _plugin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin.service */ "Oq5L");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PluginsComponent = /** @class */ (function () {
    function PluginsComponent(service) {
        this.service = service;
        this.notification = new _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]();
        this.error = null;
    }
    PluginsComponent.prototype.ngOnInit = function () {
        this.setSpinnerActive = true;
        this.loadListOfPlugins();
    };
    PluginsComponent.prototype.onDelete = function (data, pluginId) {
        var _this = this;
        if (data) {
            this.service.deletePluginById(pluginId).subscribe(function (data) {
                _this.notification.showNotification('Plugin Deleted!', 'success');
                _this.loadListOfPlugins();
            }, function (error) {
                _this.notification.showNotification('Can\'t delete Plugin!', 'danger');
                console.log('Delete plugin: ' + error.message + ' - ' + error.code);
            });
        }
    };
    PluginsComponent.prototype.loadListOfPlugins = function () {
        var _this = this;
        this.service.getAllPluginsOfUser().subscribe(function (data) {
            _this.listOfPlugins = data.data;
            _this.setSpinnerActive = false;
        }, function (error) {
            console.log('List of plugins: ' + error.message + ' - ' + error.code);
            _this.setSpinnerActive = false;
            _this.error = error;
        });
    };
    PluginsComponent.prototype.setToService = function (plugin) {
        this.service.object = plugin;
    };
    PluginsComponent.prototype.setPlugInForDelete = function (data) {
        this.deletePlugin = data;
    };
    PluginsComponent.ctorParameters = function () { return [
        { type: _plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"] }
    ]; };
    PluginsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-plugins',
            template: _raw_loader_plugins_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_plugins_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_plugin_service__WEBPACK_IMPORTED_MODULE_4__["PluginService"]])
    ], PluginsComponent);
    return PluginsComponent;
}());



/***/ }),

/***/ "xenw":
/*!**********************************************************************************************************!*\
  !*** ./src/app/games/plugins-for-games/plugin-configs/configs/data-designer/data-designer.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL3BsdWdpbnMtZm9yLWdhbWVzL3BsdWdpbi1jb25maWdzL2NvbmZpZ3MvZGF0YS1kZXNpZ25lci9kYXRhLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "xteK":
/*!*******************************************************!*\
  !*** ./src/app/games/create/create-game.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGameComponent", function() { return CreateGameComponent; });
/* harmony import */ var _raw_loader_create_game_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./create-game.component.html */ "FuDS");
/* harmony import */ var _create_game_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-game.component.css */ "MgOh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game.service */ "K8Jx");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateGameComponent = /** @class */ (function () {
    function CreateGameComponent(location, fb, service) {
        this.location = location;
        this.fb = fb;
        this.service = service;
        this.notification = new _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"]();
    }
    CreateGameComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    // declare form structure //
    CreateGameComponent.prototype.initializeForm = function () {
        this.createGameForm = this.fb.group({
            title: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    // on cancel, return to parent component //
    CreateGameComponent.prototype.onCancel = function () {
        this.location.back();
    };
    CreateGameComponent.prototype.onSubmit = function () {
        if (this.createGameForm.valid) {
            this.createNewGame(this.createGameForm.value);
        }
    };
    CreateGameComponent.prototype.createNewGame = function (newGame) {
        var _this = this;
        return this.service.postNewGameForSpecificUser(newGame).subscribe(function (game) {
            _this.notification.showNotification('Game: ' + newGame.title + ', created successfully', 'success');
            _this.location.back();
        }, function (error) {
            _this.notification.showNotification('Can\'t create new game', 'danger');
            console.log(error.code + ' - ' + error.message);
            _this.location.back();
        });
    };
    CreateGameComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }
    ]; };
    CreateGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create-game',
            template: _raw_loader_create_game_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_create_game_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]])
    ], CreateGameComponent);
    return CreateGameComponent;
}());



/***/ }),

/***/ "ycOr":
/*!************************************************************!*\
  !*** ./src/app/plugins/create/create-plugin.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvY3JlYXRlL2NyZWF0ZS1wbHVnaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { path: '/studio', title: 'Studio', icon: 'dashboard', class: '' },
    { path: '/games', title: 'games', icon: 'games', class: '' },
    { path: '/plugins', title: 'Plugins', icon: 'extension', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        console.log(this.menuItems);
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zJ+v":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./input.component.html */ "ZVY2");
/* harmony import */ var _input_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.component.css */ "DYla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputComponent = /** @class */ (function () {
    function InputComponent(cd) {
        this.cd = cd;
        this.buttonValue = false;
        this.collapseText = 'Click to open...';
        this.arrayValues = [];
    }
    InputComponent.prototype.ngOnInit = function () {
        this.formName.addControl(this.groupName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({}));
        if (this.type.includes('array')) {
            this.formName.get(this.groupName).addControl(this.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]));
            this.arrayValues = this.value;
        }
        this.formName.get(this.groupName).addControl(this.controlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
    };
    InputComponent.prototype.isArray = function (obj) {
        return (Array.isArray(obj));
    };
    InputComponent.prototype.changeButton = function () {
        this.buttonValue = !this.buttonValue;
        this.buttonText(this.buttonValue);
    };
    InputComponent.prototype.buttonText = function (value) {
        if (!value) {
            return 'Click to open table...';
        }
        if (value) {
            return 'Click to close table...';
        }
    };
    InputComponent.prototype.deleteArrayItem = function (groupName, controlName, i) {
        this.formName.get(groupName).get(controlName).removeAt(i);
        this.arrayValues.splice(i, 1);
    };
    InputComponent.prototype.addArrayItem = function (groupName, controlName) {
        if (typeof this.arrayValues === 'undefined') {
            this.arrayValues = [];
        }
        this.formName.get(groupName).get(controlName).push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''));
        this.arrayValues.push('');
    };
    InputComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    InputComponent.propDecorators = {
        formName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        controlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        groupName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        validation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-input',
            template: _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_input_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], InputComponent);
    return InputComponent;
}());



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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map