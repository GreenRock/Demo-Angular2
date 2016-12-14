import { Directive, ElementRef, Input, HostListener, Component  } from '@angular/core'

@Directive({
    selector: "[click-me]"
})
export class EventDirective {
    _el: ElementRef; 
    constructor(el: ElementRef){
        this._el = el;
    }

    @HostListener("click") onclick() {
        alert('click me');
    }

    @HostListener("mouseover") onmouseover(){
        this._el.nativeElement.style.backgroundColor= 'yellow';
    }

    @HostListener("mouseout") onmouseout(){
        this._el.nativeElement.style.backgroundColor= 'white';
    }
}
