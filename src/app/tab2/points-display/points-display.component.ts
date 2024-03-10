import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MedalsService } from 'src/app/services/medals.service';
import { PointsByDate } from 'src/app/tab1/entity';

@Component({
  selector: 'app-points-display',
  templateUrl: './points-display.component.html',
  styleUrls: ['./points-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointsDisplayComponent  {
  @Input() points: PointsByDate[] = [];

  constructor(public medalsService: MedalsService) { }

 

}
