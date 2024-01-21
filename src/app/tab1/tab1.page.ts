 import { deck, notEnoughCardsCard } from './card-db';
import { Card } from './entity';
import { shuffle } from 'lodash-es';
import { first } from 'rxjs';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab1Page {
  isInBeginPlayingScreen = signal<boolean>(true);
  gameEnded =  signal<boolean>(false);


  constructor() {

  }



}

