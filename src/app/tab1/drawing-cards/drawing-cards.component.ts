import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, computed, signal } from '@angular/core';
import { Card } from '../entity';
import { shuffle } from 'lodash-es';
import { deck } from '../card-db';

@Component({
  selector: 'app-drawing-cards',
  templateUrl: './drawing-cards.component.html',
  styleUrls: ['./drawing-cards.component.scss'],
})
export class DrawingCardsComponent  {
  @Output() endGame = new EventEmitter<boolean>();
  readonly playerDeck  = signal<Card[]>(shuffle(deck));
  readonly actualCard  = computed( ()  => this.playerDeck()[0]);
  cardToggle = true;
  constructor(public cd: ChangeDetectorRef) { }


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
      this.endGame.emit(true);
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

      this.drawNextCard();
   }

   onQuestSkipped(){
      this.drawNextCard();
   }
}
