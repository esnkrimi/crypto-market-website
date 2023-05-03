import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { apiService } from '../api.service';
import {
  map,
  debounceTime,
  fromEvent,
  switchMap,
  tap,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'nx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements AfterViewInit {
  input: any;
  data;
  dataFlag;
  loading = true;
  loadingProgress = false;
  dataNews;
  @Input() bgColor;
  Id = 'autocomplete';
  myContext = { $implicit: true };
  @ViewChild('autocomplete') autocomplete: ElementRef;
  constructor(private service: apiService) {}

  ngAfterViewInit(): void {
    this.fetchAutocomplete(this.autoComplete);
  }

  fetchAutocomplete(autoComplete: (input: string) => void) {
    fromEvent(this.autocomplete.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        map((x: any) => x.target.value),
        tap((c) => {
          //console.log(c);
          this.dataNews = [];
          if (c.length > 2)
            this.service.news(c).subscribe((n) => {
              this.dataNews = n;
              this.dataNews = this.dataNews.filter((d: any) =>
                d.title.toUpperCase().includes(c.toUpperCase())
              );
            });
        }),
        distinctUntilChanged(),
        tap((d) => (this.loadingProgress = true)),
        switchMap((x) => this.autoComplete(x))
      )
      .subscribe({
        error: (e) => console.error(e),
        next: (d) => {
          this.myContext = { $implicit: false };
          this.data = d;
          this.loadingProgress = false;
        },
      });
  }

  autoComplete(inputText) {
    this.data = '';
    this.dataFlag = '';
    this.loading = true;
    this.myContext = { $implicit: true };
    inputText = inputText.toUpperCase() ?? inputText.toUpperCase();
    return this.service.cryptoZoom(inputText, 'usd');
  }
}
