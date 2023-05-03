import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NewsThumbnailModule } from '@crownex/news-thumbnail';
import { ProgressBarModule } from 'luxury-progress-bar';
import { of } from 'rxjs';
import { apiService } from './api.service';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let service: apiService;
  let mockData = [
    {
      title: 'news1',
      comment: 'comment1',
    },
    {
      title: 'news2',
      comment: 'comment2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [HttpClientModule, ProgressBarModule, NewsThumbnailModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(apiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    jest.spyOn(service, 'news').mockReturnValue(of(mockData));
    component.getApi();
    expect(service.news).toHaveBeenCalled();
    expect(component.data).toBe(mockData);
  });

  it('should load', () => {
    jest.spyOn(service, 'news').mockReturnValue(of(mockData));
    expect(component.loading).toBe(true);
    component.getApi();
    expect(component.loading).toBe(false);
  });

  it('CHECK PROGRESS', () => {
    jest.spyOn(service, 'news').mockReturnValue(of(mockData));
    fixture.autoDetectChanges();
    let progressElement = fixture.debugElement.query(By.css('lib-progressBar'));
    expect(progressElement).not.toBeUndefined();
  });

  it('CHECK PROGRESS HIDE', () => {
    jest.spyOn(service, 'news').mockReturnValue(of(mockData));
    component.getApi();
    fixture.autoDetectChanges();
    let progressElement = fixture.debugElement.query(By.css('lib-progressBar'));
    expect(progressElement).toBeNull();
  });
});
