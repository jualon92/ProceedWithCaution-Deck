export interface Card {
  title: string,
  description:  string,
  subtitle: string,
  image:  string
  benefits: string[]
}

export interface Deck {
  cards: Card[]
}
