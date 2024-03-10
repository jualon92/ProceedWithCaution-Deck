import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Medal, Medals, PointsByDate } from '../entity';
import { StorageService } from '../../storage-service';
import { MedalsService } from 'src/app/services/medals.service';
@Component({
  selector: 'app-no-card-left',
  templateUrl: './no-card-left.component.html',
  styleUrls: ['./no-card-left.component.scss'],
})
export class NoCardLeftComponent implements OnInit {
  @Output() shuffleDeck: EventEmitter<any> = new EventEmitter();
  medal : Medal = { color: "warning", message: "Bronze", image : "./assets/images/bronze.png"}

  constructor(private medalsService: MedalsService, private router: Router, private route : ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    // get query params from url
     this.route.queryParams.subscribe(params => { 
          const points = params['points'];
          const pointsByDate = {points: points, date: new Date()}
          this.storageService.savePoints(pointsByDate)
          this.medal = this.medalsService.getMedalsByPoints(points);       
     })
  }





  onRestartGame(){
    this.router.navigate(['/tabs/tab1']);
  }
}
