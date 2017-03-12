import { Directive, ElementRef, Input, OnInit, AfterContentInit } from "@angular/core"

@Directive({    
    selector: "[u-required]"
})
export class GenerationHtml implements OnInit {

    @Input("u-required")
    message:string;

    constructor(private element: ElementRef) {
       
    }

    ngOnInit(){
        
        this.element.nativeElement.setAttribute("data-required", "true");
        this.element.nativeElement.setAttribute("data-required-message", this.message);

        this.element.nativeElement.removeAttribute("u-required");

        console.info(this.message);
    }
}


@Directive({
    selector: "[u-form]"
})
export class FormValidate implements AfterContentInit {

    constructor(private element: ElementRef) {
       
    }

    ngAfterContentInit(){
         console.info(this.element.nativeElement);
         console.info(this.element);
    }
}
