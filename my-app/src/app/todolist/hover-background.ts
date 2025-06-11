import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
  standalone: false
})
export class HoverBackground {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter')
  onMouse() {
  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green')
}

  @HostListener('mouseleave')
  leaveMouse() {
  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow')
}

}
