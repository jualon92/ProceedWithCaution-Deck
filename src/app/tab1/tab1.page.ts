import { ChangeDetectorRef, Component, computed, signal } from '@angular/core';
import { deck, notEnoughCardsCard } from './card-db';
import { Card } from './entity';
import { shuffle } from 'lodash-es';
import { first } from 'rxjs';
@Component({
  selector: 'app-tab1',

  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isInBeginPlayingScreen = signal<boolean>(true);
  initialDeck = shuffle(deck);
  readonly playerDeck  = signal<Card[]>(this.initialDeck);
  readonly gameEnded =  signal<boolean>(false);
  //actual card is the card at the top of the deck
  readonly actualCard  = computed( ()  => this.playerDeck()[0]);
/*   readonly cardMessage = computed( () => this.actualCard().title); */
  discardPile: Card[] = [];
  skippedCards: Card[]= []
  completedCards: Card[] = [];
  completedCardMessage: string = "";
  skippedCardMessage: string = "";
  lastCardName: string = "";
  cardToggle = true;

  constructor(public cd: ChangeDetectorRef) {

  }

 
  drawNextCard(){
    this.lastCardName = this.actualCard().title;
    //add the card to card history
    this.discardPile.push(this.actualCard());
    //remove card from the deck
    this.playerDeck.update( card => card.filter( c => c.title !== this.actualCard().title));
    this.toggleCardAnimation();
  }


  toggleCardAnimation():void{
    //TODO: dont trigger additional detection cycles
    this.cardToggle = false;
    this.cd.detectChanges();
    this.cardToggle = true;
    this.cd.detectChanges();

  }
  addToCompletePile(){
    this.completedCards.push(this.actualCard());
  }

  addToSkippedPile(){
      this.skippedCards.push(this.actualCard());
  }

  shuffleDeck(){
   //redo the deck
    this.playerDeck.set(shuffle(deck));
    this.discardPile = [];
    this.gameEnded.set(false);
  }


}

