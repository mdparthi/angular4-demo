import {Directive, ElementRef, Renderer2, Input, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector:'[appHighlight]'
})
export class HighlightDirective {
    @Input('myColor') myColor : string
    @Input('defaultColor') defaultColor : string;

    @HostBinding('style.backgroundColor') bgColor : any;
    @HostListener('mouseenter') mouseenter(eventdata){
        this.bgColor = this.myColor;
    }
    @HostListener('mouseleave') mouseleave(eventdata){
        this.bgColor = this.defaultColor;
    }

    constructor(private elementRef : ElementRef,
                private renderer : Renderer2){
        // this.elementRef.nativeElement.style.backgroundColor = "green";
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //                         'background-color', this.defaultColor)

        this.defaultColor = 'transparent';
       
    }

    
}