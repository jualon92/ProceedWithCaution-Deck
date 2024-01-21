import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { BeginPlayingComponent } from './begin-playing/begin-playing.component';
import { DrawingCardsComponent } from './drawing-cards/drawing-cards.component';
import { NoCardLeftComponent } from './no-card-left/no-card-left.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'draw-cards',
    component: DrawingCardsComponent,
  },
  {
    path: 'end-game',
    component: NoCardLeftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
