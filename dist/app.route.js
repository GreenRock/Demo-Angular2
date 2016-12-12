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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("./common");
var flickr_component_1 = require("./flickr/flickr.component");
require("rxjs/add/operator/switchMap");
var SkoolboRoute = (function () {
    function SkoolboRoute() {
    }
    return SkoolboRoute;
}());
SkoolboRoute = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'google', redirectTo: 'http://google.com', pathMatch: 'full' },
                { path: 'home', component: common_1.HomeComponent, },
                { path: 'about', component: common_1.AboutComponent },
                { path: 'category/:id', component: common_1.CategoryComponent },
                { path: 'kitten', component: flickr_component_1.FlickrComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], SkoolboRoute);
exports.SkoolboRoute = SkoolboRoute;
//# sourceMappingURL=app.route.js.map