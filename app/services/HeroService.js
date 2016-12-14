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
require('rxjs/add/operator/toPromise');
var HeroService = (function () {
    function HeroService() {
        this.Heros = [
            { Id: 11, Name: 'Mr. Nice' },
            { Id: 12, Name: 'Narco' },
            { Id: 13, Name: 'Bombasto' },
            { Id: 14, Name: 'Celeritas' },
            { Id: 15, Name: 'Magneta' },
            { Id: 16, Name: 'RubberMan' },
            { Id: 17, Name: 'Dynama' },
            { Id: 18, Name: 'Dr IQ' },
            { Id: 19, Name: 'Magma' },
            { Id: 20, Name: 'Tornado' }
        ];
    }
    HeroService.prototype.getHeros = function () {
        return Promise.resolve(this.Heros);
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(this.Heros.filter(function (h) { return h.Id == id; })[0]);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=HeroService.js.map