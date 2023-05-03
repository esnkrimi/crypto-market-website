import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { ZoomComponent } from '@appBase/lazy/app/zoom/zoom.component';
import { MasterRoutingModule } from '@appBase/master/app-routing.module';
import { LocalService } from '@appBase/storage';
import { SearchModule } from '@crownex/search';
import { EsnContextMenuModule } from 'libs/esn-context-menu/src/lib/esn-context-menu.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let ls: LocalService;
  let route: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchModule,
        EsnContextMenuModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'lazy/zoom/:id', component: ZoomComponent },
        ]),
      ],
      declarations: [HeaderComponent],
    }).compileComponents();
    ls = TestBed.inject(LocalService);
    route = TestBed.inject(ActivatedRoute);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const mockId = '1';
    const mockJson = 'MockJson';
    ls.saveData(mockId, mockJson);
    let res = ls.getData(mockId);
    //console.log(res);
    expect(res).toBe(mockJson);
  });

  it('Test', fakeAsync(() => {
    fixture.detectChanges();
    let href = fixture.debugElement.query(By.css('.click'));
    href.nativeElement.click();
    fixture.detectChanges();
    tick(4444);
    route.url.subscribe((d) => {
      //console.log(d);
    });
  }));
});
