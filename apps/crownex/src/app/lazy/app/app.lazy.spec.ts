import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { ProfileModule } from 'libs/profile/src/lib/profile.module';
import { UserModule } from 'libs/user/src/lib/user.module';
import { WishlistModule } from 'libs/wishlist/src/lib/wishlist.module';
import { ZoomModule } from 'libs/zoom/src/lib/zoom.module';
import { BehaviorSubject, of } from 'rxjs';
import { lazyRouterModule } from '../app-routing.module';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    action: 'login',
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject,
          },
        },
      ],
      imports: [
        StoreModule.forRoot({}),
        lazyRouterModule,
        RouterModule.forRoot([]),
        ZoomModule,
        WishlistModule,
        ProfileModule,
        CommonModule,
        UserModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
  });
  it('should not be ', (done) => {
    route.params.subscribe((params) => {
      expect(params['action']).toEqual('login');
      done();
    });
  });
  it('should not be zero', (done) => {
    paramsSubject.next({ action: 'join' });
    route.params.subscribe((params) => {
      expect(params['action']).toEqual('join');
      done();
    });
  });
});
