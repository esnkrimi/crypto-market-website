import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class pricePipe implements PipeTransform {
  transform(price, title): any {
    let rerutnValue: any = price;
    rerutnValue = price.substring(1, 15);
    if (title)
      if (title[0] === 'To') {
        rerutnValue = this.isSign(price)
          ? price.substring(1, 8) + price.substring(0, 1)
          : price;
      }
    return rerutnValue;
  }
  isSign(price: any) {
    if (price[0] >= 0 && price[0] <= 9) return false;
    return true;
  }
}
