import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent {
  @Output() returnSelectedValue = new EventEmitter<string>();
  @Input() selected: any;
  @Input() data: any;
  pageNumber = 1;

  counter(i: number) {
    return new Array(i);
  }

  valueChanged(a) {
    this.returnSelectedValue.emit(a['target']['value']);
  }
}
