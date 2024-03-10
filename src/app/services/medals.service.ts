import { Injectable } from '@angular/core';
import { Medals } from '../tab1/entity';
 

@Injectable({
  providedIn: 'root'
})
export class MedalsService {

  constructor() { }

  getMedalsByPoints(points:number){
    if (points < 3) return Medals.Bronze;
    if (points < 6) return Medals.Silver;
    return Medals.Gold;
  }

}
