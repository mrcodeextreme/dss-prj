
import { Directive, HostListener, HostBinding,
        ElementRef, Renderer2, Input } from '@angular/core';

@Directive({

    selector: '[appDropdown]'

})

export class DropdownDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @Input() defaultColor = 'transparent';
    @Input() highlightColor = 'blue';


// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
        /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');*/
        this.backgroundColor = this.defaultColor;
}

    // tslint:disable-next-line:member-ordering
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
}

    @HostListener('mouseleave') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {

        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
        this.backgroundColor = this.defaultColor;
}
    // tslint:disable-next-line:member-ordering
    @HostBinding('style.backgroundColor') backgroundColor: string;

}

