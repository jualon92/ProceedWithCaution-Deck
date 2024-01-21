import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-begin-playing',
  templateUrl: './begin-playing.component.html',
  styleUrls: ['./begin-playing.component.scss'],
})
export class BeginPlayingComponent  {
  
  @Output() shouldStart = new EventEmitter<boolean>();

  constructor(private router : Router) { 

  }


  onStartGame($event: Event){
     this.router.navigate(['/tabs/tab1/draw-cards']);
  }
}
