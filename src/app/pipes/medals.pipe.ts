import { Pipe, PipeTransform } from '@angular/core';
import { Medal, Medals } from '../tab1/entity';

@Pipe({
  name: 'medals'
})
export class MedalsPipe implements PipeTransform {

  transform(points: number): Medal {
    if (points < 3) return Medals.Bronze;
    if (points < 6) return Medals.Silver;
    return Medals.Gold;
  }

}
