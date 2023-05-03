import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class notoficationService {
  showConfirm$ = new BehaviorSubject(false);
  constructor() {}
}
