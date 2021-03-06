"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('./common');
var flickr_component_1 = require('./flickr/flickr.component');
var event_directive_1 = require('./directives/event.directive');
var generation_directive_1 = require('./directives/generation.directive');
var flickr_Service_1 = require("./services/flickr.Service");
var authenticate_component_1 = require('./authenticate/authenticate.component');
var app_route_1 = require('./app.route');
var hero_Module_1 = require('./hero/hero.Module');
var ng2_validation_1 = require('ng2-validation');
require('./rxjs-extensions');
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_route_1.SkoolboRoute,
                hero_Module_1.HeroModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                ng2_validation_1.CustomFormsModule
            ],
            providers: [
                flickr_Service_1.FlickrService
            ],
            exports: [],
            declarations: [
                common_1.AppComponent,
                common_1.HomeComponent,
                common_1.AboutComponent,
                common_1.CategoryComponent,
                event_directive_1.EventDirective,
                generation_directive_1.GenerationHtml,
                flickr_component_1.FlickrComponent,
                authenticate_component_1.AuthenticateComponent,
                generation_directive_1.FormValidate
            ],
            bootstrap: [common_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.js.map