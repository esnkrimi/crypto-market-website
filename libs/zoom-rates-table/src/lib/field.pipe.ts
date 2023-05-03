import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class fieldPipe implements PipeTransform {
  transform(price): any {
    let str = price.split(' ');
    if (str.length === 2) str = str[1];
    return str;
  }
}
