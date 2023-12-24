import { ChangeDetectorRef, Component, computed, signal } from '@angular/core';
import { deck, notEnoughCardsCard } from './card-db';
import { Card } from './entity';
import { shuffle } from 'lodash-es';
import { first } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  firstPlay = signal<boolean>(true);
  initialDeck = shuffle(deck);
  readonly playerDeck  = signal<Card[]>(this.initialDeck);
  //actual card is the card at the top of the deck
  readonly actualCard  = computed( ()  => this.playerDeck()[0]);
  discardPile: Card[] = [];


  drawNextCard(){
    //add the card to card history
    this.discardPile.push(this.actualCard());
    //remove card from the deck
    this.playerDeck.update( card => card.filter( c => c.title !== this.actualCard().title));

  }


  shuffleDeck(){
   //redo the deck
    this.playerDeck.set(shuffle(deck));
    this.discardPile = [];
  }


}

