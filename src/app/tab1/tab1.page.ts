import { ChangeDetectorRef, Component } from '@angular/core';
import { deck, notEnoughCardsCard } from './card-db';
import { Card } from './entity';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  playerDeck:Card[] = [...deck];
  actualCard: Card = this.getRandomCard();
  discardPile: Card[] = [];

  drawNextCard(){
    //add the card to card history
    this.discardPile.push(this.actualCard);
    //remove card from the deck
    this.playerDeck.splice(this.playerDeck.indexOf(this.actualCard), 1);
    //draw a new card
    this.actualCard = this.getRandomCard();
  }

  shuffleDeck(){
    //redo the deck
    this.playerDeck = [...deck];
    this.actualCard = this.getRandomCard();
    this.discardPile = [];
  }

  getRandomCard(){
    const index = Math.floor(Math.random() * this.playerDeck.length);
    return this.playerDeck[index];
  }




}

