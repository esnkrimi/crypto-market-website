import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '@appBase/storage';

@Component({
  selector: 'nx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      transition('show => hide', [animate('2s')]),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  @Input() DEVICE_IS_PC;
  currencies = ['EUR', 'JPY', 'USD', 'CAD', 'CHN', 'GBP', 'COMP'];
  crypto = ['BTC', 'ETH', 'SOL', 'DOG', 'XRP', 'CHN', 'COMP'];
  CookieSHow: any = 'NOT';
  formSubmit = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  constructor(private localstorage: LocalService) {}
  ngOnInit(): void {
    this.CookieSHow =
      this.localstorage.getData('cookie') === null ? 'NOT' : 'YES';
    //this.localstorage.saveData('cookie', 'NOT');
  }
  handleCookie(decision) {
    this.CookieSHow = 'YES';
    this.localstorage.saveData('cookie', 'YES');
  }
  submit() {
    this.formSubmit = true;
    console.log(this.form.value);
  }
}
