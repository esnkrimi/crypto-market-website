import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { apiService } from './api.service';

describe('Service Test', () => {
  let serv: apiService;
  let http: any = {
    get: jest.fn(),
  };
  let returnFromHttpGet = {
    Data: {
      btc: {},
      doge: {},
      sol: {},
      eth: {},
      xrp: {},
      ada: {},
    },
  };
  serv = new apiService(http);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  });
  it('test10', () => {
    jest.spyOn(http, 'get').mockReturnValue(of(returnFromHttpGet));
    let res = serv.coinListAll();
    let result = ['btc', 'doge', 'sol', 'eth', 'xrp', 'ada'];
    res.subscribe((d) => {
      expect(d).toBe(result);
    });
  });
});
