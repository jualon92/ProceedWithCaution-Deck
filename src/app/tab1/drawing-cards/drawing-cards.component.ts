import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { Card } from '../entity';
import { shuffle } from 'lodash-es';
import { deck } from '../card-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawing-cards',
  templateUrl: './drawing-cards.component.html',
  styleUrls: ['./drawing-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class DrawingCardsComponent  {
  @Output() endGame = new EventEmitter<boolean>();
  readonly playerDeck  = signal<Card[]>(shuffle(deck));
  readonly actualCard  = computed( ()  => this.playerDeck()[0]);
  points = 0;
  cardToggle = true;
  constructor(public cd: ChangeDetectorRef, private router: Router) { }


 /*  toggleCardAnimation():void{
    //TODO: dont trigger additional detection cycles
    this.cardToggle = false;
    this.cd.detectChanges();
    this.cardToggle = true;
    this.cd.detectChanges(); 
  }
 */
  drawNextCard():void{
     
    //remove card from the deck
    this.playerDeck.update( card => card.filter( c => c.title !== this.actualCard().title));
   
    if (this.playerDeck().length === 0){
      this.router.navigate(['/tabs/tab1/end-game'], { queryParams: { points: this.points } });
    }

    // this.toggleCardAnimation();

  }

  removeCardFromDeck(){
    this.playerDeck.update( card => card.filter( c => c.title !== this.actualCard().title));
  }
  shuffleDeck(){
     this.playerDeck.set(shuffle(deck));
   }

   onQuestDone(){
      this.points = this.points + this.actualCard().difficulty.points;
      this.drawNextCard();
   }

 
   onQuestSkipped(){
      this.drawNextCard();
   }
}
