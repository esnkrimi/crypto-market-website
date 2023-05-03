import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[fieldDirective]',
})
export class FieldDirective implements OnChanges {
  @Input() fieldDirective;
  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.fieldDirective === 'PRICE')
      this.el.nativeElement.style.color = 'orange';
  }
}
