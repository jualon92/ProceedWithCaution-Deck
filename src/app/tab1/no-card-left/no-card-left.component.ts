import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Medal, Medals } from '../entity';
@Component({
  selector: 'app-no-card-left',
  templateUrl: './no-card-left.component.html',
  styleUrls: ['./no-card-left.component.scss'],
})
export class NoCardLeftComponent implements OnInit {
  @Output() shuffleDeck: EventEmitter<any> = new EventEmitter();
  medal : Medal = { color: "warning", message: "Bronze", image : "./assets/images/bronze.png"}

  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    // get query params from url
     this.route.queryParams.subscribe(params => { 
          const points = params['points'];
          this.medal = this.getMedalsByPoints(points);
     })
  }

  getMedalsByPoints(points:number){
    if (points < 3) return Medals.Bronze;
    if (points < 6) return Medals.Silver;
    return Medals.Gold;
  }



  onRestartGame(){
    this.router.navigate(['/tabs/tab1']);
  }
}
