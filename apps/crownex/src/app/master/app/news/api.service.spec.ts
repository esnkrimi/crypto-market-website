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
      News1: {},
      News2: {},
      News3: {},
    },
  };
  serv = new apiService(http);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  });
  it('test10', () => {
    let url =
      'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=12a32eac0fb47d68adf90bf177b1d25218bb4041b0b6cd7939300b4ccd98e512';
    jest.spyOn(http, 'get').mockReturnValue(of(returnFromHttpGet));
    let res = serv.news();
    expect(http.get).toHaveBeenCalled();
    expect(http.get).toBeCalledWith(url);
    res.subscribe((d) => {
      expect(d).toBe(returnFromHttpGet.Data);
    });
  });
});
