import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crownex-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  DEVICE_IS_PC;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((v) => (this.DEVICE_IS_PC = v[0].deviceIsPc));
  }
  loading = true;
  loaded(event) {
    this.loading = event;
  }
}
