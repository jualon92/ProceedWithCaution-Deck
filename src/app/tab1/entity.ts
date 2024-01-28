export interface Card {
  title: string,
  description:  string,
  subtitle: string,
  image:  string
  benefits: string[],
  difficulty: Difficulty,
}

export const Difficulties = {
  Hard : { color: "danger", message: "Hard as a rock"},
  Medium : { color: "warning", message: "Not too hard, not too easy"},
  Easy : { color: "primary", message: "Easy peasy lemon squeezy"},
}

export interface Difficulty{
  color: string,
  message: string,
}

export interface Deck {
  cards: Card[]
}
