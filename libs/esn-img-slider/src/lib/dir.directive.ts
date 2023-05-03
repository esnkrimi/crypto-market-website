import { Directive, Renderer2, ElementRef, OnInit, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class DirDirective {
  @Input('appHover') hoverColor;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.hoverColor[0]);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.hoverColor[1]);
  }
} 