import { Card } from "./entity"

const card1:Card = {
  title: 'Card 1',
  description: 'This is card 1',
   subtitle: 'This is subtitle1',
  image: 'https://picsum.photos/200/300'
}
const card2 = {
  title: 'Card 2',
  description: 'This is card 2',
  subtitle: 'This is subtitle2',
  image: 'https://picsum.photos/200/300'
}

const card3 = {
  title: 'Card 3',
  description: 'This is card 3',
  subtitle: 'This is subtitle3',
  image: 'https://picsum.photos/200/300'
}


export const notEnoughCardsCard = {
  title: 'Deck is empty!',
  description: 'not enough cards in the deck',
  subtitle: ':(',
  image: 'https://picsum.photos/200/300'
}

export const deck = [card1, card2, card3]
