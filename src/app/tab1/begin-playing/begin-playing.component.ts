import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-begin-playing',
  templateUrl: './begin-playing.component.html',
  styleUrls: ['./begin-playing.component.scss'],
})
export class BeginPlayingComponent  {
  
  @Output() shouldStart = new EventEmitter<boolean>();
  constructor() { }


  onStartGame($event: Event){
    this.shouldStart.emit(false)
  }
}
