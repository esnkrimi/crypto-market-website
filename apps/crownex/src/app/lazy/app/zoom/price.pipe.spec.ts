import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { apiService } from './api.service';
import { pricePipe } from './price';

describe('service Test', () => {
  let pipe = new pricePipe();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pricePipe],
      providers: [],
      imports: [HttpClientModule],
    });
  });
  it('serv1', () => {
    let priceDestination = pipe.transform('$150000', ['To']);
    expect(priceDestination).toEqual('150000$');
  });

  it('serv2', () => {
    let priceDestination = pipe.transform('$150000', '');
    expect(priceDestination).toEqual('150000');
  });
});
