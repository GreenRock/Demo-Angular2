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
var common_1 = require("@angular/common");
var HeroService_1 = require("../services/HeroService");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, router, location) {
        this.heroService = heroService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(params["id"]).then(function (hero) { return _this.hero = hero; }); })
            .subscribe(function (params) { return _this.id = params["id"]; });
    };
    HeroDetailComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.Id];
        this.router.navigate(link);
    };
    HeroDetailComponent.prototype.GoBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-detail',
        templateUrl: '/templates/hero-detail-template.html',
        providers: [HeroService_1.HeroService]
    }),
    __metadata("design:paramtypes", [HeroService_1.HeroService,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero.detail.component.js.map