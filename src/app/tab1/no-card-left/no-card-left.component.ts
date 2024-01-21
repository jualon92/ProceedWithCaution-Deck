import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-no-card-left',
  templateUrl: './no-card-left.component.html',
  styleUrls: ['./no-card-left.component.scss'],
})
export class NoCardLeftComponent {
  @Output() shuffleDeck: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  onRestartGame(){
    this.router.navigate(['/tabs/tab1']);
  }
}
