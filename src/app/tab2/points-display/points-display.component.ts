import { Component, Input, OnInit } from '@angular/core';
import { PointsByDate } from 'src/app/tab1/entity';

@Component({
  selector: 'app-points-display',
  templateUrl: './points-display.component.html',
  styleUrls: ['./points-display.component.scss'],
})
export class PointsDisplayComponent   {
  @Input() points: PointsByDate[] = [];

  constructor() { }

 

}
