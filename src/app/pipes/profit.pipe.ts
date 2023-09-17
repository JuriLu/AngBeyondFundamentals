import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'profit'
})
export class ProfitPipe implements PipeTransform {

  transform(value: number, profitPercentage:number = 10): number {
    return value * profitPercentage * 1 / 100;
  }

}
