import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { apiService } from './api.service';

describe('Service Test', () => {
  let mockReturnValue = new BehaviorSubject<any>({
    DISPLAY: { BTC: { USD: { PRICE: 20.0 } } },
  });
  let service: apiService;
  const http: any = {
    get: jest.fn(),
  };
  service = new apiService(http);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientModule],
    });
  });
  it('serv3', () => {
    jest.spyOn(http, 'get').mockReturnValue(mockReturnValue);
    service.calendar().subscribe((d) => {
      expect(d).toEqual(mockReturnValue);
    });
  });
});
