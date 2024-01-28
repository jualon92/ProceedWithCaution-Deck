import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-begin-playing',
  templateUrl: './begin-playing.component.html',
  styleUrls: ['./begin-playing.component.scss'],
})
export class BeginPlayingComponent  {
  
  @Output() shouldStart = new EventEmitter<boolean>();

  constructor(public navCtrl: NavController,) { 

  }


  onStartGame($event: Event){
    this.navCtrl.navigateForward('/tabs/tab1/draw-cards' );
  }
}
