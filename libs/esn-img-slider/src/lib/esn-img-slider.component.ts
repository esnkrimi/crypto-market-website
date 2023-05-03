import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'esn-img-slider',
  templateUrl: 'esn-img-slider.component.html',
  styleUrls: ['esn-img-slider.scss'],
  animations: [
    trigger('changeImg', [
      transition('before => next', [animate('1s')]),
      transition('next => before', [animate('2s')]),
    ]),
  ],
})
export class EsnImgSliderComponent implements OnInit {
  @Input() imgSrc;
  i = 0;
  openClose: boolean = false;
  constructor(private render: Renderer2) {}
  ngOnInit(): void {
    let j = interval(3000);
    /* j.subscribe((d) => {
      this.i++;
      this.i = this.i > 1 ? 0 : this.i;
    });
    */
  }
}
