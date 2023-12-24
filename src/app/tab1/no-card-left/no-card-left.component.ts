import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-no-card-left',
  templateUrl: './no-card-left.component.html',
  styleUrls: ['./no-card-left.component.scss'],
})
export class NoCardLeftComponent  implements OnInit {
  @Output() shuffleDeck: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  shuffle(){
    this.shuffleDeck.emit();
  }
}
