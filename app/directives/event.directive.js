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
var EventDirective = (function () {
    function EventDirective(el) {
        this._el = el;
    }
    EventDirective.prototype.onclick = function () {
        alert('click me');
    };
    EventDirective.prototype.onmouseover = function () {
        this._el.nativeElement.style.backgroundColor = 'yellow';
    };
    EventDirective.prototype.onmouseout = function () {
        this._el.nativeElement.style.backgroundColor = 'white';
    };
    __decorate([
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventDirective.prototype, "onclick", null);
    __decorate([
        core_1.HostListener("mouseover"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventDirective.prototype, "onmouseover", null);
    __decorate([
        core_1.HostListener("mouseout"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EventDirective.prototype, "onmouseout", null);
    EventDirective = __decorate([
        core_1.Directive({
            selector: "[click-me]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], EventDirective);
    return EventDirective;
}());
exports.EventDirective = EventDirective;
//# sourceMappingURL=event.directive.js.map