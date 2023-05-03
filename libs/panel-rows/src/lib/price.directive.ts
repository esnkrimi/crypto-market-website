import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[priceDirective]',
})
export class PriceDirective implements OnChanges {
  @Input() sign;
  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.sign !== '-') this.el.nativeElement.style.color = 'green';
    else if (this.sign === '-') this.el.nativeElement.style.color = 'red';
  }
}
