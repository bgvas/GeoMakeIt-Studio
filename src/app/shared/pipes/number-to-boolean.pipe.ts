import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToBoolean'
})
export class NumberToBooleanPipe implements PipeTransform {

  transform(value: any): boolean {
    if (value === 1 || value === '1') {
      return true;
    } else { return false; }

  }

}
