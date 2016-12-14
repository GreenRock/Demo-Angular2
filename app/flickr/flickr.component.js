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
var flickr_Service_1 = require("../services/flickr.Service");
core_1.enableProdMode();
var FlickrComponent = (function () {
    function FlickrComponent(flickrService) {
        this.flickrService = flickrService;
    }
    FlickrComponent.prototype.ngOnInit = function () {
        this.keyword = "aodai";
    };
    FlickrComponent.prototype.loadImage = function (search) {
        var _this = this;
        this.flickrService.loadImage(this.keyword).subscribe(function (res) { return _this.flickrFeeds = res; }, function (error) { return _this.errorMessage = error; });
    };
    FlickrComponent.prototype.seach = function () {
        this.loadImage(this.keyword);
    };
    return FlickrComponent;
}());
FlickrComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'flickr-component',
        templateUrl: 'flickr-template.html',
        providers: [flickr_Service_1.FlickrService]
    }),
    __metadata("design:paramtypes", [flickr_Service_1.FlickrService])
], FlickrComponent);
exports.FlickrComponent = FlickrComponent;
//# sourceMappingURL=flickr.component.js.map