import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EsnSignupLoginService } from './esn-signup-login.service';
@Component({
  selector: 'esn-signup-login',
  templateUrl: `esn-signup-login.component.html`,
  styleUrls: ['esn-signup-login.service.scss'],
  animations: [
    trigger('showHide', [
      state(
        'open',
        style({
          height: '100px',
          backgroundColor: 'blue',
          animation: 'fadeIn 5s',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          backgroundColor: 'blue',
          animation: 'fadeOut 5s',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class EsnSignupLoginComponent implements OnInit {
  @Input() data;
  @Output() callbackSignup = new EventEmitter<object>();
  @Output() callbackLogin = new EventEmitter<object>();
  showHide = false;
  loginSignup = false;
  btnClass;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  signupForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
      ),
    ]),
    country: new FormControl(''),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private service: EsnSignupLoginService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    this.btnClass = this.data.btnClass;
  }

  toggle() {
    this.loginSignup = !this.loginSignup;
    this.showHide = !this.showHide;
  }
  login() {
    this.callbackLogin.emit(this.loginForm.value);
  }

  signup() {
    this.callbackSignup.emit(this.signupForm.value);
  }
}
