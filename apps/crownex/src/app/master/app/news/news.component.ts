import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, switchMap, tap } from 'rxjs';
import { apiService } from './api.service';

@Component({
  selector: 'nx-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  @Input() DEVICE_IS_PC;
  data;
  categoryNews: string = 'SOL';
  fields = ['title'];
  form = new FormGroup({
    inputChar: new FormControl(''),
  });
  loading = true;
  constructor(private service: apiService) {}
  getApi() {
    this.service.news(this.categoryNews.toUpperCase()).subscribe((res) => {
      this.data = res;
      this.loading = false;
    });
  }

  getFirstChar() {
    this.form.controls['inputChar'].valueChanges
      .pipe(
        debounceTime(1000),
        tap((d) => {
          this.loading = true;
        })
      )
      .subscribe((d: any) => {
        this.categoryNews = d;
        this.getApi();
      });
  }

  ngOnInit(): void {
    this.getApi();
    this.getFirstChar();
  }
}
