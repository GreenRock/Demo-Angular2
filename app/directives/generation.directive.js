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
var GenerationHtml = (function () {
    function GenerationHtml(element) {
        this.element = element;
    }
    GenerationHtml.prototype.ngOnInit = function () {
        this.element.nativeElement.setAttribute("data-required", "true");
        this.element.nativeElement.setAttribute("data-required-message", this.message);
        this.element.nativeElement.removeAttribute("u-required");
        console.info(this.message);
    };
    __decorate([
        core_1.Input("u-required"), 
        __metadata('design:type', String)
    ], GenerationHtml.prototype, "message", void 0);
    GenerationHtml = __decorate([
        core_1.Directive({
            selector: "[u-required]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GenerationHtml);
    return GenerationHtml;
}());
exports.GenerationHtml = GenerationHtml;
var FormValidate = (function () {
    function FormValidate(element) {
        this.element = element;
    }
    FormValidate.prototype.ngAfterContentInit = function () {
        console.info(this.element.nativeElement);
        console.info(this.element);
    };
    FormValidate = __decorate([
        core_1.Directive({
            selector: "[u-form]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FormValidate);
    return FormValidate;
}());
exports.FormValidate = FormValidate;
//# sourceMappingURL=generation.directive.js.map