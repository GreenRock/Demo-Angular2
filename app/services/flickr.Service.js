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
var http_1 = require("@angular/http");
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var FlickrService = (function () {
    function FlickrService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.flickerAPI = "https://api.flickr.com/services/rest/";
    }
    FlickrService.prototype.loadImage = function (keyword) {
        var params = new http_1.URLSearchParams();
        params.set('method', 'flickr.photos.search');
        params.set('format', 'json');
        params.set('text', keyword);
        params.set('api_key', 'c31b326ef96f11652c62e3c3da74fff8');
        params.set('nojsoncallback', '1');
        var options = new http_1.RequestOptions({ search: params });
        return this.http.get(this.flickerAPI, options)
            .map(function (res) { return res.json(); })
            .map(function (val) {
            if (val.stat === 'ok') {
                return val.photos.photo.map(function (photo) {
                    return { url: "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg",
                        title: photo.title,
                        id: photo.id,
                        owner: photo.owner,
                        secret: photo.secret,
                        server: photo.server,
                        farm: photo.farm,
                        ispublic: photo.ispublic,
                        isfriend: photo.isfriend,
                        isfamily: photo.isfamily };
                });
            }
            else {
                return [];
            }
        })
            .catch(this.hanldeError);
    };
    FlickrService.prototype.hanldeError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    FlickrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
    ], FlickrService);
    return FlickrService;
}());
exports.FlickrService = FlickrService;
//# sourceMappingURL=flickr.Service.js.map